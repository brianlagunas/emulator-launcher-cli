#!/usr/bin/env node

const EmulatorService = require("./emulator-service");
const program = require("commander");

program
.command("list")
.description("Gets a list of available Android emulators")
.action(function(){       
    console.log("Available Android Emulators:")
    let service = new EmulatorService();    
    service.list();    
});

program
.command("start [name]")
.description("Starts the Android emulator")
.action(function(name){
    let service = new EmulatorService();

    if (name == undefined){
        console.log("ERROR: No emulator name provided.");
        return;
    }
    else if(name == "default"){
        //TODO: change your default emulator before installing
        name = "Android_Accelerated_Nougat";  
    }
    
    service.start(name);
});

program.parse(process.argv);

