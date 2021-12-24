export const getResponseError = (response = {}) => {
  const error = response?.error;
  const errors = response?.errors;

  if (error) {
    return response;
  }

  if (errors) {
    if (Array.isArray(errors)) {
      return errors.reduce(
        (output, current) => {
          output.message += current?.message ?? '';
          return output;
        },
        { errors, message: '', ...response }
      );
    }
    return errors;
  }

  return null;
};
