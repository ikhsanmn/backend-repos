import { Request, Response, NextFunction } from 'express';
import { admin } from '../config/firebaseConfig';
import ApiError from '../entities/ApiError';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return next(new ApiError(401, 'Unauthorized'));
  }

  try {
    await admin.auth().verifyIdToken(token);
    next();
  } catch (error) {
    next(new ApiError(401, 'Unauthorized'));
  }
};

export default authMiddleware;

