"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readCsv = require("gtfs-utils/read-csv");
var calendarDates_1 = __importDefault(require("./../model/calendarDates"));
var const_1 = require("./const");
exports.loadCalendarFromFile = function () {
    var a = readCsv(const_1.folder.concat("calendar_dates.txt"))
        .on("error", console.error)
        .on("readable", function () {
        var data;
        while ((data = this.read())) {
            var calendarDate = new calendarDates_1.default(data);
            calendarDate.save(function (err) {
                if (err) {
                    console.log(err);
                }
            });
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZENhbGVuZGFyRGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInV0aWxzL3JlYWRDYWxlbmRhckRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDL0MsMkVBQXFEO0FBQ3JELGlDQUFpQztBQUV0QixRQUFBLG9CQUFvQixHQUFHO0lBQ2hDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxjQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDakQsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDO1NBQzFCLEVBQUUsQ0FBQyxVQUFVLEVBQUU7UUFDZCxJQUFJLElBQUksQ0FBQztRQUNULE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxZQUFZLEdBQUcsSUFBSSx1QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO2dCQUN6QixJQUFJLEdBQUcsRUFBRTtvQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNsQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyJ9