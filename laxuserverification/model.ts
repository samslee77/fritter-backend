import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';

export type Verification = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  verified: boolean;
  name: string;
  age: string;
};

const VerificationSchema = new Schema({
  // The user's verification status, entered name, and age
  verified: {
    type: Boolean,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  age: {
    type: String,
    required: false
  }
});

const VerificationModel = model<Verification>('Verification', VerificationSchema);
export default VerificationModel;
