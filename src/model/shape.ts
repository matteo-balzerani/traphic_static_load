import mongoose from "mongoose";

//shape_id,shape_pt_lat,shape_pt_lon,shape_pt_sequence,shape_dist_traveled
export interface IShape extends mongoose.Document {
  shape_id: string;
  shape_pt_lat: number;
  shape_pt_lon: number;
  shape_pt_sequence: number;
  shape_dist_traveled: number;
}

export const ShapeSchema = new mongoose.Schema({
  shape_id: { type: String, required: true },
  shape_pt_lat: { type: Number, required: true },
  shape_pt_lon: { type: Number, required: true },
  shape_pt_sequence: { type: Number, required: true },
  shape_dist_traveled: { type: Number, required: true }
});

const Shape = mongoose.model<IShape>("Shape", ShapeSchema);
export default Shape;
