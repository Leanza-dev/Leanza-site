package queue

import (
	"fmt"
	"sync"
)

type Message struct {
	ID      string
	Payload []byte
}

type Engine struct {
	Inbound  chan Message
	Workers  int
	stopChan chan struct{}
	wg       sync.WaitGroup
}

func NewEngine(workers int, bufferSize int) *Engine {
	return &Engine{
		Inbound:  make(chan Message, bufferSize),
		Workers:  workers,
		stopChan: make(chan struct{}),
	}
}

func (e *Engine) Start() {
	fmt.Printf("Starting GigaMQ Engine with %d workers...\n", e.Workers)
	for i := 0; i < e.Workers; i++ {
		e.wg.Add(1)
		go e.worker(i)
	}
}

func (e *Engine) worker(id int) {
	defer e.wg.Done()
	for {
		select {
		case msg := <-e.Inbound:
			// Process message
			_ = msg
		case <-e.stopChan:
			return
		}
	}
}

func (e *Engine) Stop() {
	close(e.stopChan)
	e.wg.Wait()
}
