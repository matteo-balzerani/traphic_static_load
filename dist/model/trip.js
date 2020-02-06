"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.TripSchema = new mongoose_1.default.Schema({
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
var Trip = mongoose_1.default.model("Trip", exports.TripSchema);
exports.default = Trip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1vZGVsL3RyaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBZ0M7QUFnQm5CLFFBQUEsVUFBVSxHQUFHLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUM7SUFDNUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUM1QyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDekMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUMvQixlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2pDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDOUIsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUMxQixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQzFCLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUN2QyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0NBQ2hDLENBQUMsQ0FBQztBQUVILElBQU0sSUFBSSxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFRLE1BQU0sRUFBRSxrQkFBVSxDQUFDLENBQUM7QUFDdkQsa0JBQWUsSUFBSSxDQUFDIn0=