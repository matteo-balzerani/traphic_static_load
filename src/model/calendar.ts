import mongoose from "mongoose";

//service_id,monday,tuesday,wednesday,thursday,friday,saturday,sunday,start_date,end_date
export interface ICalendar extends mongoose.Document {
  service_id: number;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
  start_date: number;
  end_date: number;
}

export const CalendarSchema = new mongoose.Schema({
  service_id: { type: Number, required: true },
  monday: { type: Number, required: true },
  tuesday: { type: Number, required: true },
  wednesday: { type: Number, required: true },
  thursday: { type: Number, required: true },
  friday: { type: Number, required: true },
  saturday: { type: Number, required: true },
  sunday: { type: Number, required: true },
  start_date: { type: Number, required: true },
  end_date: { type: Number, required: true }
});

const Calendar = mongoose.model<ICalendar>("Calendar", CalendarSchema);
export default Calendar;
