'use strict'
var terminal = require("child_process");
var path = require("path");
var util = require("util");

//WindowsOS
var userName = process.env.USERPROFILE.split(path.sep)[2];
var exePath = util.format("C:/Users/%s/AppData/Local/Android/Sdk/emulator/emulator.exe", userName);

//TODO: Support MacOS
//TODO: Support launching iOS emulators

class EmulatorService{

    list()
    {
        let cmd = terminal.execFile(exePath, ["-list-avds"]);

        cmd.stdout.on('data', (data) => {
            console.log(data.toString());
        });

        cmd.stderr.on('data', (data) => {
            console.log(data.toString());
        });
    }

    start(emulatorName){

        let cmd = terminal.execFile(exePath, ["-avd", emulatorName]);
    }
}

module.exports = EmulatorService;