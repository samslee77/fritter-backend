import type {Request, Response, NextFunction} from 'express';
import {Types} from 'mongoose';
import VerificationCollection from './collection';
import UserCollection from '../user/collection';

const isUserAlreadyVerified = async (req: Request, res: Response, next: NextFunction) => {
  const userId = (req.session.userId as string) ?? '';
  const obtainUser = await UserCollection.findOneByUserId(userId);
  const userVerification = obtainUser.verified;
  if (userVerification) {
    res.status(403).json({
      error: 'User is already verified.'
    });
    return;
  }

  next();
};

export {
  isUserAlreadyVerified
};
