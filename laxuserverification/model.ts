import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';

export type Verification = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  verified: boolean;
  name: string;
  age: string;
};

const VerificationSchema = new Schema({
  // The user's verification status
  verified: {
    type: Boolean,
    required: true
  },
  // The name the user enters to get verified
  name: {
    type: String,
    required: false
  },
  // The age the user enters to get verified
  age: {
    type: String,
    required: false
  }
});

const VerificationModel = model<Verification>('Verification', VerificationSchema);
export default VerificationModel;
