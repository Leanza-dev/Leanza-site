package com.leanza.sagacommerce;

import com.leanza.sagacommerce.model.OrderEvent;
import org.springframework.stereotype.Service;
import java.util.logging.Logger;

/**
 * Orchestrator for the Order Saga.
 * This class demonstrates the coordination of multiple microservices
 * while maintaining eventual consistency through compensating transactions.
 */
@Service
public class OrderSagaCoordinator {
    
    private static final Logger logger = Logger.getLogger(OrderSagaCoordinator.class.getName());

    public void processOrder(OrderEvent event) {
        logger.info("Starting Saga for Order: " + event.orderId());
        
        try {
            reservePayment(event);
            deductInventory(event);
            logger.info("Saga completed successfully for Order: " + event.orderId());
        } catch (Exception e) {
            logger.warning("Saga failed. Initiating compensation logic...");
            compensate(event);
        }
    }

    private void reservePayment(OrderEvent event) {
        logger.info("Reserving payment for customer: " + event.customerId());
        // Logic to call Payment Microservice
    }

    private void deductInventory(OrderEvent event) {
        logger.info("Deducting inventory for order: " + event.orderId());
        // Logic to call Inventory Microservice
        // Simulating a failure for demonstration
        if (Math.random() > 0.5) {
            throw new RuntimeException("Inventory not available");
        }
    }

    private void compensate(OrderEvent event) {
        logger.info("Compensating: Rolling back payment for Order: " + event.orderId());
        // Logic to refund or release reserved payment
    }
}
