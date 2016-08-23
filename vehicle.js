function vehicle(){
    //private property
    var vehilceName="Mercedez";
    
    //public properties and children can inherit
    this.fuelType="";
    this.numberOfTyres=0;
    this.engineCC="";
    this.getVehicleDetails=function(){
         this.type="BMW";
        console.log(vehilceName);
    };  
}

var car = new vehicle();
car.numberOfTyres =4;
car.engineCC=4000;

var bike = new vehicle();
bike.numberOfTyres =2;
bike.engineCC =250;

//bike.autoGear =true;

vehicle.prototype.autoGear=true;

console.log(car);
console.log(bike);

