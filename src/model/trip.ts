import mongoose from "mongoose";

//route_id,service_id,trip_id,trip_headsign,trip_short_name,direction_id,block_id,shape_id,wheelchair_accessible,bikes_allowed
export interface ITrip extends mongoose.Document {
  route_id: string;
  service_id: string;
  trip_id: string;
  trip_headsign: string;
  trip_short_name: string;
  direction_id: string;
  block_id: string;
  shape_id: string;
  wheelchair_accessible: string;
  bikes_allowed: string;
}

export const TripSchema = new mongoose.Schema({
  route_id: { type: String, required: true },
  service_id: { type: String, required: true },
  trip_id: { type: String, required: true },
  trip_headsign: { type: String },
  trip_short_name: { type: String },
  direction_id: { type: String },
  block_id: { type: String },
  shape_id: { type: String },
  wheelchair_accessible: { type: String },
  bikes_allowed: { type: String }
});

const Trip = mongoose.model<ITrip>("Trip", TripSchema);
export default Trip;
