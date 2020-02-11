import { Request, Response } from "express";

import * as loadAgency from "./../utils/readAgency";
import * as loadCalendar from "./../utils/readCalendar";
import * as loadCalendarDate from "./../utils/readCalendarDate";
import * as loadRoutes from "./../utils/readRoutes";
import * as loadShapes from "./../utils/readShapes";
import * as loadStops from "./../utils/readStops";
import * as loadStopTimes from "./../utils/readStopTimes";
import * as loadTrips from "../utils/readTrips";

export let loadData = (req: Request, res: Response) => {
  //load in mongodb
  loadAgency.loadAgencyFromFile();
  loadCalendar.loadCalendarFromFile();
  loadCalendarDate.loadCalendarFromFile();
  loadRoutes.loadRoutesFromFile();
  loadShapes.loadShapesFromFile();
  loadStops.loadStopsFromFile();
  loadStopTimes.loadStopTimesFromFile();
  loadTrips.loadTripsFromFile();
  res.send("return");
};
