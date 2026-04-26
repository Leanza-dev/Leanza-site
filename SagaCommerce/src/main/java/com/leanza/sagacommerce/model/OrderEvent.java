package com.leanza.sagacommerce.model;

import java.math.BigDecimal;
import java.util.UUID;

public record OrderEvent(
    UUID orderId,
    UUID customerId,
    BigDecimal totalAmount,
    String status
) {}
