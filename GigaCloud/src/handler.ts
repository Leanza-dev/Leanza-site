import { v4 as uuidv4 } from 'uuid';
import { CloudLogger } from './logger';

export interface ComputePayload {
    jobId: string;
    parameters: Record<string, string | number>;
}

export interface APIGatewayProxyResult {
    statusCode: number;
    headers?: Record<string, string>;
    body: string;
}

export interface CloudEvent {
    payload: ComputePayload;
    requestId: string;
}

const logger = new CloudLogger();

/**
 * Main Serverless Handler.
 * Demonstrates clean separation of concerns and production error handling.
 */
export const handler = async (event: CloudEvent): Promise<APIGatewayProxyResult> => {
    const correlationId = event.requestId || uuidv4();
    
    logger.info(`Processing request ${correlationId}`, { event });

    try {
        // Business Logic Simulation
        const result = await processCompute(event.payload);
        
        return {
            statusCode: 200,
            headers: { 'X-Correlation-ID': correlationId },
            body: JSON.stringify(result)
        };
    } catch (error) {
        logger.error(`Failed to process request ${correlationId}`, error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};

async function processCompute(data: ComputePayload) {
    // High-performance compute simulation
    return { status: 'success', timestamp: new Date().toISOString(), job: data.jobId };
}
