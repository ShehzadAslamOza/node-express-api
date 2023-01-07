const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    console.log("In asyncWrapper middleware");
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = asyncWrapper;
