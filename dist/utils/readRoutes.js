"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readCsv = require("gtfs-utils/read-csv");
var route_1 = __importDefault(require("./../model/route"));
exports.loadRoutesFromFile = function () {
    var a = readCsv("../files/rome_static_gtfs/routes.txt")
        .on("error", console.error)
        .on("readable", function () {
        var data;
        while ((data = this.read())) {
            var route = new route_1.default(data);
            route.save(function (err) {
                if (err) {
                    console.log(err);
                }
            });
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZFJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInV0aWxzL3JlYWRSb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDL0MsMkRBQXFDO0FBRTFCLFFBQUEsa0JBQWtCLEdBQUc7SUFDOUIsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLHNDQUFzQyxDQUFDO1NBQ3BELEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUMxQixFQUFFLENBQUMsVUFBVSxFQUFFO1FBQ2QsSUFBSSxJQUFJLENBQUM7UUFDVCxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQzNCLElBQUksS0FBSyxHQUFHLElBQUksZUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO2dCQUNsQixJQUFJLEdBQUcsRUFBRTtvQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNsQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyJ9