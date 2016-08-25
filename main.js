/*
var operations = require("./vehicleModel");
var http = require("http");

console.log(operations.add());
*/

function getData() {
    var emp = db.query("select* from emp");

    console.log(emp);
}

function getNonBlockingData() {
    db.query("select * from emp", function (err, data) {
        console.log(data);
    });
    console.log("I am done")

}
