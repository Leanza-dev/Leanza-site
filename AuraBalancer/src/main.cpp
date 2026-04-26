#include "balancer.hpp"
#include <thread>
#include <chrono>

int main() {
    std::vector<BackendServer> pool = {
        {"192.168.1.10", 8080, true},
        {"192.168.1.11", 8080, true},
        {"192.168.1.12", 8080, true}
    };

    LoadBalancer<RoundRobinStrategy> aura(pool);

    std::cout << "--- Aura Balancer Started ---" << std::endl;
    
    // Simulation loop
    for(int i = 0; i < 10; ++i) {
        aura.route();
        std::this_thread::sleep_for(std::chrono::milliseconds(200));
    }

    return 0;
}
