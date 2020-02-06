"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.AgencySchema = new mongoose_1.default.Schema({
    agency_id: { type: String, required: true },
    agency_name: { type: String, required: true },
    agency_url: { type: String },
    agency_timezone: { type: String },
    agency_lang: { type: String },
    agency_phone: { type: String }
});
var Agency = mongoose_1.default.model("Agency", exports.AgencySchema);
exports.default = Agency;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbmN5LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsibW9kZWwvYWdlbmN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQWdDO0FBWW5CLFFBQUEsWUFBWSxHQUFHLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUM7SUFDOUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzNDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUM3QyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQzVCLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDakMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUM3QixZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0NBQy9CLENBQUMsQ0FBQztBQUVILElBQU0sTUFBTSxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFVLFFBQVEsRUFBRSxvQkFBWSxDQUFDLENBQUM7QUFDL0Qsa0JBQWUsTUFBTSxDQUFDIn0=