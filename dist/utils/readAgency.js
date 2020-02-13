"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readCsv = require("gtfs-utils/read-csv");
var agency_1 = __importDefault(require("./../model/agency"));
var const_1 = require("./const");
function onSave(err) {
    if (err) {
        console.log(err);
    }
}
function loadAgencyFromFile() {
    readCsv(const_1.folder.concat("agency.txt"))
        .on("error", console.error)
        .on("readable", function () {
        var data;
        while ((data = this.read())) {
            var agency = new agency_1.default(data);
            agency.save(onSave);
        }
    });
}
exports.loadAgencyFromFile = loadAgencyFromFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZEFnZW5jeS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInV0aWxzL3JlYWRBZ2VuY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUMvQyw2REFBdUM7QUFDdkMsaUNBQWlDO0FBRWpDLFNBQVMsTUFBTSxDQUFDLEdBQVE7SUFDdEIsSUFBSSxHQUFHLEVBQUU7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xCO0FBQ0gsQ0FBQztBQUVELFNBQWdCLGtCQUFrQjtJQUNoQyxPQUFPLENBQUMsY0FBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNqQyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDMUIsRUFBRSxDQUFDLFVBQVUsRUFBRTtRQUNkLElBQUksSUFBSSxDQUFDO1FBQ1QsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUMzQixJQUFJLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVZELGdEQVVDIn0=