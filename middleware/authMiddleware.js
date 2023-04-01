const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization && authorization.startsWith('Bearer')) {
    try {
      const token = authorization.split(' ')[1];
      const verify = jwt.verify(token, 'masobimat');
      req.user = verify;
      next();
    } catch (error) {
      res.status(400).send('Token invalid');
    }
  } else {
    res.status(400).send('Not aithorization');
  }
};

module.exports = protect;
