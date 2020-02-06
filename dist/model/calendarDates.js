"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.CalendarDateSchema = new mongoose_1.default.Schema({
    service_id: { type: Number, required: true },
    date: { type: Number, required: true },
    exception_type: { type: Number, required: true }
});
var CalendarDate = mongoose_1.default.model("CalendarDate", exports.CalendarDateSchema);
exports.default = CalendarDate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXJEYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1vZGVsL2NhbGVuZGFyRGF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBZ0M7QUFTbkIsUUFBQSxrQkFBa0IsR0FBRyxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3BELFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUM1QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdEMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBQ2pELENBQUMsQ0FBQztBQUVILElBQU0sWUFBWSxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUNqQyxjQUFjLEVBQ2QsMEJBQWtCLENBQ25CLENBQUM7QUFDRixrQkFBZSxZQUFZLENBQUMifQ==