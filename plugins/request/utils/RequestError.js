export class RequestError extends Error {
  constructor(props = {}) {
    const message = props?.message ?? '';
    super(message);
    Object.assign(this, props);
    this.name = 'RequestError';
  }
}
