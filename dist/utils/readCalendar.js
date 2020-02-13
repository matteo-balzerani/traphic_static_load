"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readCsv = require("gtfs-utils/read-csv");
var calendar_1 = __importDefault(require("./../model/calendar"));
var const_1 = require("./const");
function onSave(err) {
    if (err) {
        console.log(err);
    }
}
function loadCalendarFromFile() {
    readCsv(const_1.folder.concat("calendar.txt"))
        .on("error", console.error)
        .on("readable", function () {
        var data;
        while ((data = this.read())) {
            var calendar = new calendar_1.default(data);
            calendar.save(onSave);
        }
    });
}
exports.loadCalendarFromFile = loadCalendarFromFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZENhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsidXRpbHMvcmVhZENhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDL0MsaUVBQTJDO0FBQzNDLGlDQUFpQztBQUVqQyxTQUFTLE1BQU0sQ0FBQyxHQUFRO0lBQ3RCLElBQUksR0FBRyxFQUFFO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQjtBQUNILENBQUM7QUFFRCxTQUFnQixvQkFBb0I7SUFDbEMsT0FBTyxDQUFDLGNBQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDbkMsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDO1NBQzFCLEVBQUUsQ0FBQyxVQUFVLEVBQUU7UUFDZCxJQUFJLElBQUksQ0FBQztRQUNULE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxrQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFWRCxvREFVQyJ9