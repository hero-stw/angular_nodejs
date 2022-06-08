import expressJWT from "express-jwt";

export const checkAuth = (req, res, next) => {
  const isAdmin = true;
  if (isAdmin) {
    next();
  } else {
    res.status(401).json({
      message: "You are not authorized to access this route",
    });
  }
};

export const checkToken = expressJWT({
  secret: "process.env.SECRET",
  algorithms: ["SHA256"],
  requestProperty: "auth",
});

export const checkValidUser = (req, res, next) => {
  const status = req.profile._id == req.auth._id;
  if (!status) {
    res.status(401).json({
      message: "You are not authorized to access this route",
    });
  }
  next();
};

export const checkAdmin = (req, res, next) => {
  if (!req.profile.role == 0) {
    res.status(401).json({
      message: "You are not authorized to access this route",
    });
  }
  next();
};
