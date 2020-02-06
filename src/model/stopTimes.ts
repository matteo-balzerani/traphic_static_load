import mongoose from "mongoose";

//trip_id,arrival_time,departure_time,stop_id,stop_sequence,stop_headsign,pickup_type,drop_off_type,shape_dist_traveled,timepoint
export interface IStopTimes extends mongoose.Document {
  trip_id: string;
  arrival_time: string;
  departure_time: string;
  stop_id: string;
  stop_sequence: number;
  stop_headsign: number;
  pickup_type: string;
  drop_off_type: string;
  shape_dist_traveled: string;
  timepoint: string;
}

export const StopTimesSchema = new mongoose.Schema({
  trip_id: { type: String, required: true },
  arrival_time: { type: String, required: true },
  departure_time: { type: String, required: true },
  stop_id: { type: String, required: true },
  stop_sequence: { type: String, required: true },
  stop_headsign: { type: String },
  pickup_type: { type: String, required: true },
  drop_off_type: { type: String, required: true },
  shape_dist_traveled: { type: String, required: true },
  timepoint: { type: String, required: true }
});

const StopTime = mongoose.model<IStopTimes>("StopTime", StopTimesSchema);
export default StopTime;
