# SagaCommerce 🛒

**A robust implementation of the Saga Orchestration Pattern for Distributed Transactions in a Microservices Environment.**

![Java](https://img.shields.io/badge/Language-Java-red.svg)
![Spring](https://img.shields.io/badge/Framework-Spring%20Boot-green.svg)
![Architecture](https://img.shields.io/badge/Pattern-Saga%20Orchestration-blue.svg)

## 📌 The Problem

In a distributed system, traditional ACID transactions across multiple databases are impossible or extremely slow. **SagaCommerce** solves this by breaking a global transaction into a sequence of local transactions. If one step fails, the system automatically triggers **Compensating Transactions** (Rollbacks) to ensure eventual consistency.

### Workflow
1. **Order Service**: Creates a pending order.
2. **Payment Service**: Reserves the balance.
3. **Inventory Service**: Deducts stock.
4. **Failure Case**: If Inventory fails, a compensation event is sent back to the Payment Service to refund the customer.

## 🛠 Tech Stack
- **Java 17 & Spring Boot 3**
- **Spring Kafka**: For asynchronous event-driven orchestration.
- **State Machine**: To track the lifecycle of the Saga.

## 📂 Project Structure
- `com.leanza.sagacommerce.OrderSagaCoordinator`: The heart of the orchestration.
- `com.leanza.sagacommerce.model`: Event definitions for inter-service communication.

---
*Developed by Pedro Leanza - Focus on Resilient Distributed Architectures.*
