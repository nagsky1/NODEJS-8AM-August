//Closures.


function bookMyTicket(mode) {
    console.log("outer function");
    if (mode == "Flight") {
        return function bookFlightTicket(source, desitantion) {
            console.log(source);
            console.log(desitantion);
            console.log(mode);
        };
    }
    if (mode == "Cruise") {
        return function bookCruise(source, destination) {
            console.log(source);
            console.log(desitantion);
            console.log(mode);
        };
    }

}





var flight = bookMyTicket("Flight");
var cruise = bookMyTicket("Cruise");

flight("Hyderabad", "USA");
cruise("Chennai","Andaman");
