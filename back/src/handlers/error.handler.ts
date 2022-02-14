import { NextFunction, Request, Response } from "express";
import { HttpError } from "../models/http-error.model";

/**
 * Custom error handler to standardize error objects returned to the client.
 *
 * @param err TypeError | HttpError caught by Express.js
 * @param req Request object provided by Express
 * @param res Response object provided by Express
 * @param next NextFunction function provided by Express
 */
function errorHandler(err: TypeError | HttpError, req: Request, res: Response, next: NextFunction) {
    let serverErr = err;

    if (!(err instanceof HttpError)) {
        serverErr = new HttpError("Internal Server Error");
    }
    res.status((serverErr as HttpError).status).json(serverErr);
}

export default errorHandler;