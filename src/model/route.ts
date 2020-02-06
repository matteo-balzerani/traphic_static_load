import mongoose from "mongoose";

//route_id,agency_id,route_short_name,route_long_name,route_type,route_url,route_color,route_text_color
export interface IRoute extends mongoose.Document {
  route_id: string;
  agency_id: string;
  route_short_name: string;
  route_long_name: string;
  route_type: string;
  route_url: string;
  route_color: string;
  route_text_color: string;
}

export const RouteSchema = new mongoose.Schema({
  route_id: { type: String, required: true },
  agency_id: { type: String, required: true },
  route_short_name: { type: String, required: true },
  route_long_name: { type: String },
  route_type: { type: String, required: true },
  route_url: { type: String },
  route_color: { type: String },
  route_text_color: { type: String }
});

const Route = mongoose.model<IRoute>("Route", RouteSchema);
export default Route;
