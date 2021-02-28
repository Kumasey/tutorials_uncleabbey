const errorResponse = (res, error) => {
  const { statusCode, message } = error;
  res.status(statusCode);
  return res.json({
    status: 'error',
    message,
  });
};

module.exports = errorResponse;
