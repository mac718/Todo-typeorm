import { CustomAPIError } from "./customError";

export class NotFoundError extends CustomAPIError {
  constructor(message: string) {
    super(message, 404);
    //Typescipt bug - took me forever to figure out - must expictitly set prototype for
    //subclass to be recognized as subclass of superclass.
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
