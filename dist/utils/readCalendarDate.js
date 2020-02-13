"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readCsv = require("gtfs-utils/read-csv");
var calendarDates_1 = __importDefault(require("./../model/calendarDates"));
var const_1 = require("./const");
function onSave(err) {
    if (err) {
        console.log(err);
    }
}
function loadCalendarFromFile() {
    readCsv(const_1.folder.concat("calendar_dates.txt"))
        .on("error", console.error)
        .on("readable", function () {
        var data;
        while ((data = this.read())) {
            var calendarDates = new calendarDates_1.default(data);
            calendarDates.save(onSave);
        }
    });
}
exports.loadCalendarFromFile = loadCalendarFromFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZENhbGVuZGFyRGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInV0aWxzL3JlYWRDYWxlbmRhckRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUMvQywyRUFBcUQ7QUFDckQsaUNBQWlDO0FBRWpDLFNBQVMsTUFBTSxDQUFDLEdBQVE7SUFDdEIsSUFBSSxHQUFHLEVBQUU7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xCO0FBQ0gsQ0FBQztBQUVELFNBQWdCLG9CQUFvQjtJQUNsQyxPQUFPLENBQUMsY0FBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3pDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUMxQixFQUFFLENBQUMsVUFBVSxFQUFFO1FBQ2QsSUFBSSxJQUFJLENBQUM7UUFDVCxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQzNCLElBQUksYUFBYSxHQUFHLElBQUksdUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBVkQsb0RBVUMifQ==