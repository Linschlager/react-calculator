export const compose = (...functions) => (args) => {
  if (functions.length === 0) return args;
  return functions.reduce((acc, next) => {
    return next(acc);
  }, args);
};

export default compose;
