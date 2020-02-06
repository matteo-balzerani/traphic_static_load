import mongoose from "mongoose";

//stop_id,stop_code,stop_name,stop_desc,stop_lat,stop_lon,stop_url,stop_timezone,location_type,parent_station
export interface IStop extends mongoose.Document {
  stop_id: string;
  stop_code: string;
  stop_name: string;
  stop_desc: string;
  stop_lat: number;
  stop_lon: number;
  stop_url: string;
  stop_timezone: string;
  location_type: string;
  parent_station: string;
}

export const StopSchema = new mongoose.Schema({
  stop_id: { type: String, required: true },
  stop_code: { type: String },
  stop_name: { type: String },
  stop_desc: { type: String },
  stop_lat: { type: Number, required: true },
  stop_lon: { type: Number, required: true },
  stop_url: { type: String },
  stop_timezone: { type: String },
  location_type: { type: String },
  parent_station: { type: String }
});

const Stop = mongoose.model<IStop>("Stop", StopSchema);
export default Stop;
