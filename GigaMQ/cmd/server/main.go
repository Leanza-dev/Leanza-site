package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"

	"github.com/Leanza-dev/GigaMQ/internal/queue"
)

func main() {
	engine := queue.NewEngine(10, 1000)
	engine.Start()

	fmt.Println("GigaMQ Server is running. Press CTRL+C to stop.")

	// Wait for interruption signal
	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)
	<-sigChan

	fmt.Println("\nShutting down gracefully...")
	engine.Stop()
	fmt.Println("GigaMQ stopped.")
}
