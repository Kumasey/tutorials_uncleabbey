const Joi = require('joi');

const schemaValidator = (body) => {
  const schema = Joi.object({
    specie: Joi.string().required().min(3),
    name: Joi.string().required().min(2),
    age: Joi.number().required(),
  });
  return schema.validate(body);
};

const validatePostBody = (req, res, next) => {
  const { error } = schemaValidator(req.body);
  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }
  next();
};

module.exports = validatePostBody;
