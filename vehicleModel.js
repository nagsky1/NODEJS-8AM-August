var vehicle ={};

vehicle.add= function(){
    console.log("vehicle Addede");
};

vehicle.delete= function(){
    console.log("vehicle deleted");
};
vehicle.update= function(data){
    console.log("vehicle updated");
};

vehicle.getAllVehicles= function(data){
    console.log("will show the vehicles later");
};

module.exports =vehicle;

