import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {Freet} from '../freet/model';

export type AgeRestrictedViewing = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  freet: Types.ObjectId;
  ageRestrictedViewing: boolean;
};

export type PopulatedFollow = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  freet: Freet;
  ageRestrictedViewing: boolean;
};

const AgeRestrictedViewingSchema = new Schema({
  freet: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Freet'
  },
  ageRestrictedViewing: {
    type: Boolean,
    required: true
  }
});

const AgeRestrictedViewingModel = model<AgeRestrictedViewing>('AgeRestrictedViewing', AgeRestrictedViewingSchema);
export default AgeRestrictedViewingModel;
