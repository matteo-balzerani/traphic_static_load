import mongoose from "mongoose";

//agency_id,agency_name,agency_url,agency_timezone,agency_lang,agency_phone
export interface IAgency extends mongoose.Document {
  agency_id: string;
  agency_name: string;
  agency_url: string;
  agency_timezone: string;
  agency_lang: string;
  agency_phone: string;
}

export const AgencySchema = new mongoose.Schema({
  agency_id: { type: String, required: true },
  agency_name: { type: String, required: true },
  agency_url: { type: String },
  agency_timezone: { type: String },
  agency_lang: { type: String },
  agency_phone: { type: String }
});

const Agency = mongoose.model<IAgency>("Agency", AgencySchema);
export default Agency;
