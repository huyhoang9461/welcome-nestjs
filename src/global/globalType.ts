export type ResponseType<T> = {
    data?: T | T[];
    statusCode?: number;
    message?: string;
}