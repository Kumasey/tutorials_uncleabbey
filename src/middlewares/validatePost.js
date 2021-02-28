const validatePostBody = (req, res, next) => {
    const { name, age, specie } = req.body;
    if(!name || name.length <= 0 || !age || !specie) {
        return res .status(400).json({
            error: 'name, age and specie cannot be empty'
        });
    };
    return next();
};

module.exports = validatePostBody;