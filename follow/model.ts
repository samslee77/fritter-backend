import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {User} from '../user/model';

export type Follow = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  user: User;
  followers: User[];
  following: User[];
};

const FollowSchema = new Schema({
  // The usere
  user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  // The user's verification status
  followers: {
    type: Schema.Types.ObjectId,
    required: true
  },
  following: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

const FollowModel = model<Follow>('Verification', FollowSchema);
export default FollowModel;
