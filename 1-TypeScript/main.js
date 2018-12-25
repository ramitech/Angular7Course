var str = "hello";
console.log(str);
var x = 5;
x = 4;
var cons = "constant";
;
// let f:food;
// f.name = "pitza";
// f.calor = 123;
var f = { name: "pitzz", calor: 123 };
console.log(f.name);
function rest() {
    var parms = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parms[_i] = arguments[_i];
    }
}
rest(1, 2, 3);
var std1 = { name: "aa", age: 123, marks: [40, 50, 60], total: 0 };
var std2 = { name: "bb", age: 456, marks: [60, 70, 80], total: 0 };
var std3 = { name: "cc", age: 789, marks: [20, 30, 40], total: 0 };
console.log("Student 1 Total Mark: " + calcMarks(std1).total);
console.log("Student 2 Total Mark: " + calcMarks(std2).total);
console.log("Student 3 Total Mark: " + calcMarks(std3).total);
function calcMarks(std) {
    var sum = 0;
    for (var _i = 0, _a = std.marks; _i < _a.length; _i++) {
        var mark = _a[_i];
        sum += mark;
    }
    std.total = sum / std.marks.length;
    return std;
}
var car = /** @class */ (function () {
    function car(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }
    car.prototype.PrintData = function () {
        console.log("Model: " + this.model + " color: " + this.color + " year: " + this.year);
    };
    return car;
}());
var c = new car("BMW", "red", "2014");
c.PrintData();
