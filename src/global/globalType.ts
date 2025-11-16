export class ResponseType<T> {
    data: T | T[];
    statusCode: number;
    message: string;

    constructor(data: T | T[], statusCode: number, message: string) {
        if (data !== null) this.data = data;
        if (statusCode !== null) this.statusCode = statusCode;
        if (message !== null) this.message = message;
    }
}