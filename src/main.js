/**
 * This File is the glue javascript that ties together the entire application.
 */

import Pump from './hardware/valvepump';
import io from 'socket.io-client';
import * as setup from './control/setup';

//let io = require('../lib/socket')
//const socket = io('http://localhost');
const socket = io('http://localhost');
var p1 = new Pump('test');

console.log(p1.id);


if (localStorage.firstVisit == true || localStorage.firstVisit == undefined )
{
    //      DECLARING PUMP VALVE STATE

    localStorage.pumpData = [];
    localStorage.MasterData = [];
    localStorage.unsavedData = [];
    localStorage.oldPumpData = [];
    localStorage.pumps =  0;
    localStorage.settings_X_pos = 200;
    localStorage.settings_Y_pos= 200;



    // Valve Control
    localStorage.pumpData = setup.clearPumpData();
    localStorage.valveData = setup.initiateValveData();
    localStorage.firstVisit = false;
    localStorage.pumpInitial = "TRUE";  //  keeps track if this is the first time pump data is being displayed (so that its not cleared on page reload)
    localStorage.valveClusters = "{}";

    // Dispenser Control
    localStorage.Dispensers = 0;
    localStorage.dispenserData = setup.clearDispenserData();
    localStorage.dispenserToControl;
    localStorage.dispenserInitial == "TRUE";    //  keeps track if this is the first time dispenser data is being displayed (so that its not cleared on page reload)




}

/*
This is the actual inital code used by becca to start everything
 */


// SET JSON TO LOAD TO 3DuF AND VALVES/DISPENSERS
if (localStorage.JSONloaded != "true") {
    var defaultJSON = {"name":"My Device","params":{"width":75800,"height":51000},"layers":[{"name":"flow","color":"indigo","params":{"z_offset":0,"flip":false},"features":{}},{"name":"control","color":"red","params":{"z_offset":1200,"flip":true},"features":{}}],"groups":[]};
    $(document).ready(function() {
        //document.getElementById("json_in").value = localStorage.JSON_CONTROL;-->
        $('#findJSON').modal('show');
    });
    // Reference for the html input element
    var inputElement = document.getElementById("JSONinput");
    // on change run the 'handleFiles' method
    inputElement.addEventListener("change", handleFiles, false);
    function handleFiles() {
        var file = this.files[0];
        reader.readAsText(file);
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        defaultJSON = reader.result;
        localStorage.setItem('JSONtoLoad', defaultJSON);
        localStorage.setItem('JSONloaded', 'true');
        localStorage.setItem('loadControls', 'true');
    }
}
else {
    var defaultJSON = JSON.parse(localStorage.getItem('JSONtoLoad'));
}





