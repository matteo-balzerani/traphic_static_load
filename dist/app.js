"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var entrypoint = __importStar(require("./controller/entrypoint"));
//local
//const uri: string = "mongodb://127.0.0.1:27017/mongodb";
//docker
var uri = "mongodb://mongo-db:27017/mongodb";
mongoose_1.default.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
var app = express_1.default();
app.use(express_1.default.json());
app.set("port", process.env.PORT || 3000);
// API Endpoints
app.get("/", function (req, res) {
    res.send("Hi!");
});
app.get("/load-data", entrypoint.loadData);
var server = app.listen(app.get("port"), function () {
    console.log("App is running on http://localhost:%d", app.get("port"));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE4QjtBQUM5QixzREFBZ0M7QUFFaEMsa0VBQXNEO0FBRXRELE9BQU87QUFDUCwwREFBMEQ7QUFFMUQsUUFBUTtBQUNSLElBQU0sR0FBRyxHQUFXLGtDQUFrQyxDQUFDO0FBRXZELGtCQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQVE7SUFDN0IsSUFBSSxHQUFHLEVBQUU7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxQjtTQUFNO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0tBQ3hDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUM7QUFFMUMsZ0JBQWdCO0FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUzQyxJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDeEUsQ0FBQyxDQUFDLENBQUMifQ==