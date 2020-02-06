import mongoose from "mongoose";

//service_id,date,exception_type
export interface ICalendarDate extends mongoose.Document {
  service_id: number;
  date: number;
  exception_type: number;
}

export const CalendarDateSchema = new mongoose.Schema({
  service_id: { type: Number, required: true },
  date: { type: Number, required: true },
  exception_type: { type: Number, required: true }
});

const CalendarDate = mongoose.model<ICalendarDate>(
  "CalendarDate",
  CalendarDateSchema
);
export default CalendarDate;
