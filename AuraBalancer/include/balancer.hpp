#pragma once
#include <vector>
#include <string>
#include <atomic>
#include <iostream>

struct BackendServer {
    std::string ip;
    int port;
    bool active;
};

/**
 * High-performance Balancer Template.
 * Demonstrates the use of atomics and modern C++ for thread-safe routing.
 */
template<typename Strategy>
class LoadBalancer {
public:
    LoadBalancer(std::vector<BackendServer> servers) 
        : servers_(std::move(servers)) {}

    void route() {
        auto& target = servers_[strategy_.next(servers_.size())];
        if (target.active) {
            std::cout << "[AURA] Routing packet to: " << target.ip << ":" << target.port << std::endl;
        }
    }

private:
    std::vector<BackendServer> servers_;
    Strategy strategy_;
};

class RoundRobinStrategy {
public:
    size_t next(size_t pool_size) {
        return counter_.fetch_add(1, std::memory_order_relaxed) % pool_size;
    }
private:
    std::atomic<size_t> counter_{0};
};
