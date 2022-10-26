import type {HydratedDocument, Types} from 'mongoose';
import type {Verification} from './model';
import VerificationModel from './model';
import UserCollection from '../user/collection';
import type {User} from '../user/model';
import {verificationRouter} from './router';

class VerificationCollection {
  /**
   * Update user's verification status
   *
   * @return {Promise<HydratedDocument<User>>}
   */
  static async updateOne(userId: Types.ObjectId | string, name: string, age: string): Promise<HydratedDocument<User>> {
    const user = await UserCollection.findOneByUserId(userId);
    user.verified = true;
    user.age = age;
    user.name = name;
    await user.save();
    return user;
  }

  static async seeOne(username: string): Promise<HydratedDocument<Verification>> {
    const user = await UserCollection.findOneByUsername(username);
    const verification = new VerificationModel({verified: user.verified, name: user.name, age: user.age});
    return verification;
  }
}

export default VerificationCollection;
