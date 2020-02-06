"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.StopSchema = new mongoose_1.default.Schema({
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
var Stop = mongoose_1.default.model("Stop", exports.StopSchema);
exports.default = Stop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1vZGVsL3N0b3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBZ0M7QUFnQm5CLFFBQUEsVUFBVSxHQUFHLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUM7SUFDNUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3pDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDM0IsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUMzQixTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQzNCLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUMxQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDMUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUMxQixhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQy9CLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDL0IsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtDQUNqQyxDQUFDLENBQUM7QUFFSCxJQUFNLElBQUksR0FBRyxrQkFBUSxDQUFDLEtBQUssQ0FBUSxNQUFNLEVBQUUsa0JBQVUsQ0FBQyxDQUFDO0FBQ3ZELGtCQUFlLElBQUksQ0FBQyJ9