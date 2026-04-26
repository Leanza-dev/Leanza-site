# Aura Balancer ⚡

**An ultra-fast Layer 7 Load Balancer implemented in pure C++ for maximum throughput and minimal memory footprint.**

![C++](https://img.shields.io/badge/Language-C%2B%2B-blue.svg)
![Performance](https://img.shields.io/badge/Latency-Microseconds-brightgreen.svg)
![Strategy](https://img.shields.io/badge/Pattern-Round--Robin-orange.svg)

## 📌 Vision

Aura Balancer is a systems-level project designed to demonstrate mastery over low-level networking and memory management. Unlike high-level balancers, Aura works directly with sockets and raw pointers to ensure zero-overhead routing between client requests and backend server pools.

### Features
- **Zero-Copy Routing**: Minimal data movement between kernel and user space.
- **Round-Robin Strategy**: Efficient distribution of load across multiple targets.
- **Header Parsing**: Custom L7 parsing for HTTP/1.1 and simple custom protocols.

## 🛠 Tech Stack
- **C++17**: Utilizing modern STL features and smart pointers.
- **POSIX Sockets**: For raw network interaction.
- **CMake**: Cross-platform build system.

## 📂 Structure
- `include/balancer.hpp`: Template-based balancer logic.
- `src/main.cpp`: Socket initialization and the main event loop.

---
*Developed by Pedro Leanza - Systems Programming & Performance Engineering.*
