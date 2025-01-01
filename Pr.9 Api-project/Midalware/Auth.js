const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(501).send({
        success: false,
        message: "Token is missing",
      });
    }

    const cleanToken = token.slice(7);

    jwt.verify(cleanToken, "vora", (err, decodedToken) => {
      if (err) {
        return res.status(400).send({
          success: false,
          message: "Token is not valid",
        });
      }

      req.user = decodedToken.payload;
      return next();
    });
  } catch (error) {
    return res.status(501).send({
      success: false,
      error: error.message,
    });
  }
};

const admin = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(400).send({
        success: false,
        message: "Unauthorized Access",
      });
    }
    return next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  verifyToken,
  admin,
};
