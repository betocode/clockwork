export class UnexpectedError extends Error {
    constructor () {
      super('oops something went wrong. please try again later')
      this.name = 'UnexpectedError'
    }
  }