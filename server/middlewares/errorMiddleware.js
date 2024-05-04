const routeNotFound = (req, res, next) => {
    const error = new Error(`Route Not Found: ${req.originalUrl}`);
    error.status = 404;
    next(error);
};

const errorHandler = (error, req, res, next) => {
    let statusCode = error.status === 200? 500 : res.statusCode;
    let message = err.message;

    if(err.name === "CastError" && err.kind === "ObjectId"){
        statusCode = 404;
        message = `Resource not found`;
    }

    req.status(statusCode).json({
        message: message,
        stack:process.env.NODE_ENV === "production"? null : err.stack,
    });
};

export { routeNotFound, errorHandler };