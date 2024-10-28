import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  user?: { id: string; role: string };
}

const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "No token providedddd" });
    return; // Agrega un retorno explícito para cumplir con el tipo void
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload & { id: string; role: string };

    if (decoded && decoded.id) {
      req.user = { id: decoded.id, role: decoded.role }; // Ajusta según los datos del token
      console.log("ingreso")
      // Pasa al siguiente middleware o controlador
      return next();
    } else {
      res.status(401).json({ message: "Invalid token structure" });
    }
  } catch (error) {
    res.status(401).json({ message: "Token verification failed" });
  }
};

export default authMiddleware;
