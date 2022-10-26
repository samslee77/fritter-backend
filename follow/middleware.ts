import type {Request, Response, NextFunction} from 'express';
import {Types} from 'mongoose';
import FollowCollection from '../follow/collection';
import UserCollection from '../user/collection';

const doesUsernameExist = async (req: Request, res: Response, next: NextFunction) => {
  if (req.body.username) {
    const user = await UserCollection.findOneByUsername(req.body.username as string);
    if (!user) {
      res.status(404).json({
        error: `A user with username ${req.body.username as string} does not exist.`
      });
      return;
    }
  } else {
    res.status(404).json({
      error: 'Provided username must be nonempty.'
    });
    return;
  }

  next();
};

const doesFollowExist = async (req: Request, res: Response, next: NextFunction) => {
  const followAccount = await UserCollection.findOneByUsername(req.body.username as string);
  const followUsersId = followAccount._id;

  const currUserId = (req.session.userId as string) ?? '';
  const follow = await FollowCollection.viewFollow(currUserId, followUsersId);
  if (follow) {
    res.status(403).json({
      error: `You are already following the user with username ${req.body.username as string}.`
    });
    return;
  }

  next();
};

const doesFollowNotExist = async (req: Request, res: Response, next: NextFunction) => {
  const followAccount = await UserCollection.findOneByUsername(req.body.username as string);
  const followUsersId = followAccount._id;

  const currUserId = (req.session.userId as string) ?? '';
  const follow = await FollowCollection.viewFollow(currUserId, followUsersId);
  if (!follow) {
    res.status(403).json({
      error: `You are not following the user with username ${req.body.username as string}.`
    });
    return;
  }

  next();
};

const doesFollowerExist = async (req: Request, res: Response, next: NextFunction) => {
  const follower = await UserCollection.findOneByUsername(req.body.username as string);
  const followerId = follower._id;

  const currUserId = (req.session.userId as string) ?? '';
  const follow = await FollowCollection.viewFollow(followerId, currUserId);
  if (!follow) {
    res.status(404).json({
      error: `The user with username ${req.body.username as string} is not following you.`
    });
    return;
  }

  next();
};

const isFollowUser = async (req: Request, res: Response, next: NextFunction) => {
  const currUser = await UserCollection.findOneByUserId((req.session.userId as string) ?? '');

  if (currUser.username === req.body.username) {
    res.status(409).json({
      error: 'You cannot follow yourself.'
    });
    return;
  }

  next();
};

export {
  doesUsernameExist,
  doesFollowExist,
  doesFollowNotExist,
  doesFollowerExist,
  isFollowUser
};
