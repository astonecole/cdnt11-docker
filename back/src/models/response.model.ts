
export interface HttpStatus {
    code: number;
    message: string;
}

export const ok: HttpStatus = { code: 200, message: 'OK' };
export const created: HttpStatus = { code: 201, message: 'Created' };
export const noContent: HttpStatus = { code: 204, message: 'No Content' };
export const badRequest: HttpStatus = { code: 400, message: 'Bad Request' };
export const forbidden: HttpStatus = { code: 403, message: 'Forbidden' };
export const conflict: HttpStatus = { code: 409, message: 'Conflict' };
export const notFound: HttpStatus = { code: 404, message: 'Not Found' };
export const unprocessableEntity: HttpStatus = { code: 422, message: 'Unprocessable Entity' };
export const internalServerError: HttpStatus = { code: 500, message: 'Internal Server Error' };
