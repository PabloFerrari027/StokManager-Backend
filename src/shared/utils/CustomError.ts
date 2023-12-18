interface IMethods {
  message: string;
}

export default class CustomError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }

  static BadRequestError({ message }: IMethods) {
    return new CustomError(message, 400);
  }

  static UnauthorizedError({ message }: IMethods) {
    return new CustomError(message, 401);
  }

  static ForbiddenError({ message }: IMethods) {
    return new CustomError(message, 403);
  }

  static NotFoundError({ message }: IMethods) {
    return new CustomError(message, 404);
  }

  static NotAcceptableError({ message }: IMethods) {
    return new CustomError(message, 406);
  }

  static InternalServerError({ message }: IMethods) {
    return new CustomError(message, 500);
  }
}
