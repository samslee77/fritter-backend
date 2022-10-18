import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';

export type Verification = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  username: string;
  verificationstatus: boolean;
};

const VerificationSchema = new Schema({
  // The user's username
  username: {
    type: String,
    required: true
  },
  // The user's verification status
  verificationstatus: {
    type: Boolean,
    required: true
  }
});

const VerificationModel = model<Verification>('Verification', VerificationSchema);
export default VerificationModel;
