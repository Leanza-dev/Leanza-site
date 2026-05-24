# GigaCloud Infra ☁️

**A reference implementation for High-Availability Serverless infrastructure using TypeScript and AWS-native patterns.**

![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue.svg)
![Infrastructure](https://img.shields.io/badge/Stack-AWS--Serverless-orange.svg)
![Status](https://img.shields.io/badge/Status-Optimized-brightgreen.svg)

## 📌 Concept

GigaCloud demonstrates how to build scalable, fault-tolerant cloud functions that handle global traffic. It focuses on reducing "Cold Starts" and implementing robust error-handling/logging patterns necessary for production-grade environments.

### Highlights
- **Event-Driven Design**: Decoupled handlers for cleaner architecture.
- **Auto-Scaling Logic**: Demonstrates infrastructure-as-code principles.
- **Global Observability**: Integrated structured logging for distributed tracing.

## 🛠 Project Layout
- `src/handler.ts`: The main serverless entry point.
- `src/logger.ts`: Centralized cloud observability module.

## 🚀 Deployment
This project is designed to be deployed using AWS CDK or Serverless Framework.

```bash
npm install
npm run build
```

---
*Developed by Pedro Leanza - Cloud & Infrastructure Specialist.*
