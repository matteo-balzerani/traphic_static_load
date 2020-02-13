"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readCsv = require("gtfs-utils/read-csv");
var stopTimes_1 = __importDefault(require("./../model/stopTimes"));
var const_1 = require("./const");
function onSave(err) {
    if (err) {
        console.log(err);
    }
}
function loadStopTimesFromFile() {
    readCsv(const_1.folder.concat("stop_times.txt"))
        .on("error", console.error)
        .on("readable", function () {
        var data;
        while ((data = this.read())) {
            var stopTimes = new stopTimes_1.default(data);
            stopTimes.save(onSave);
        }
    });
}
exports.loadStopTimesFromFile = loadStopTimesFromFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZFN0b3BUaW1lcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInV0aWxzL3JlYWRTdG9wVGltZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUMvQyxtRUFBNEM7QUFDNUMsaUNBQWlDO0FBRWpDLFNBQVMsTUFBTSxDQUFDLEdBQVE7SUFDdEIsSUFBSSxHQUFHLEVBQUU7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xCO0FBQ0gsQ0FBQztBQUVELFNBQWdCLHFCQUFxQjtJQUNuQyxPQUFPLENBQUMsY0FBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3JDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUMxQixFQUFFLENBQUMsVUFBVSxFQUFFO1FBQ2QsSUFBSSxJQUFJLENBQUM7UUFDVCxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQzNCLElBQUksU0FBUyxHQUFHLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBVkQsc0RBVUMifQ==