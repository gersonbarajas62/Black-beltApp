const jwt = require('jasonwebtoken');

module.exports = (user) => {
    const payload = {
        id:user._id,
        eamil:user.email,
        first_name:user.first_name
    };

    return jwt.sign(payload.process.env.SECRET, {expiresIn:'im'})
}