"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.ShapeSchema = new mongoose_1.default.Schema({
    shape_id: { type: String, required: true },
    shape_pt_lat: { type: Number, required: true },
    shape_pt_lon: { type: Number, required: true },
    shape_pt_sequence: { type: Number, required: true },
    shape_dist_traveled: { type: Number, required: true }
});
var Shape = mongoose_1.default.model("Shape", exports.ShapeSchema);
exports.default = Shape;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcGUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJtb2RlbC9zaGFwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUFnQztBQVduQixRQUFBLFdBQVcsR0FBRyxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDO0lBQzdDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUMxQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDOUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzlDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ25ELG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBQ3RELENBQUMsQ0FBQztBQUVILElBQU0sS0FBSyxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFTLE9BQU8sRUFBRSxtQkFBVyxDQUFDLENBQUM7QUFDM0Qsa0JBQWUsS0FBSyxDQUFDIn0=