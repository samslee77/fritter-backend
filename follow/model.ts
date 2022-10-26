import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {User} from '../user/model';

export type Follow = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  follower: Types.ObjectId;
  following: Types.ObjectId;
};

export type PopulatedFollow = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  follower: User;
  following: User;
};

const FollowSchema = new Schema({
  follower: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  following: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

const FollowModel = model<Follow>('Follow', FollowSchema);
export default FollowModel;
