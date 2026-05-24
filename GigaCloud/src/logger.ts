export class CloudLogger {
    info(message: string, context?: Record<string, unknown>) {
        console.log(JSON.stringify({
            level: 'INFO',
            timestamp: new Date().toISOString(),
            message,
            ...context
        }));
    }

    error(message: string, error: unknown) {
        console.error(JSON.stringify({
            level: 'ERROR',
            timestamp: new Date().toISOString(),
            message,
            error: error instanceof Error ? error.message : error
        }));
    }
}
