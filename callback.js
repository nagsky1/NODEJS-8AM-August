function printData(name,printFullName,err){
    
    if(name){
        printFullName(name+"MR.")
    }
    else{
        err();
    }
}

function errorLog(){
    console.log("User details not available");
}

function fullName(data) {
    console.log("My name is" + data);
}

printData("kiran",fullName,errorLog)
printData(undefined€,fullName,errorLog)
