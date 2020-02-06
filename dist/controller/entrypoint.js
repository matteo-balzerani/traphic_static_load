"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var loadAgency = __importStar(require("./../utils/readAgency"));
var loadCalendar = __importStar(require("./../utils/readCalendar"));
var loadCalendarDate = __importStar(require("./../utils/readCalendarDate"));
var loadRoutes = __importStar(require("./../utils/readRoutes"));
var loadShapes = __importStar(require("./../utils/readShapes"));
var loadStops = __importStar(require("./../utils/readStops"));
var loadStopTimes = __importStar(require("./../utils/readStopTimes"));
var loadTrips = __importStar(require("./../utils/rearTrips"));
exports.loadData = function (req, res) {
    loadAgency.loadAgencyFromFile();
    loadCalendar.loadCalendarFromFile();
    loadCalendarDate.loadCalendarFromFile();
    loadRoutes.loadRoutesFromFile();
    loadShapes.loadShapesFromFile();
    loadStops.loadStopsFromFile();
    loadStopTimes.loadStopTimesFromFile();
    loadTrips.loadTripsFromFile();
    res.send("end");
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnlwb2ludC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvZW50cnlwb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxnRUFBb0Q7QUFDcEQsb0VBQXdEO0FBQ3hELDRFQUFnRTtBQUNoRSxnRUFBb0Q7QUFDcEQsZ0VBQW9EO0FBQ3BELDhEQUFrRDtBQUNsRCxzRUFBMEQ7QUFDMUQsOERBQWtEO0FBRXZDLFFBQUEsUUFBUSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDaEQsVUFBVSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDaEMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDcEMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUN4QyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNoQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNoQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM5QixhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUN0QyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQyJ9