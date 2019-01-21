/**
 * This File is the glue javascript that ties together the entire application.
 */
import {Examples, Registry} from "ThreeDuF";
import ControlViewManager from "./controlViewManager";
import Setup from "./core/setup";
import * as Singleton from './core/singleton';


// console.log(Examples);

// window.onload = function() {
//
//     let controlViewManager = new ControlViewManager();
//
//     console.log("View Manager", controlViewManager);
//
//
//     // let view = new PaperView(document.getElementById("c"));
//     // viewManager = new ViewManager(view);
//     // grid = new AdaptiveGrid();
//     // grid.setColor(Colors.BLUE_500);
//     //
//     //
//     // Registry.viewManager = viewManager;
//     //
    console.log("Examples",Examples);


//     // Registry.currentDevice.updateView();
//     //
//     // window.dev = Registry.currentDevice;
//     // window.Registry = Registry;
//     //
//     // window.view = Registry.viewManager.view;
//     //
//     // // Registry.threeRenderer = new ThreeDeviceRenderer(document.getElementById("renderContainer"));
//     // PageSetup.setupAppPage();
//     //
//     // if(false != getQueryVariable("file")){
//     //     //Download the json
//     //     var url = decodeURIComponent(getQueryVariable("file"));
//     //     fetch(url) // Call the fetch function passing the url of the API as a parameter
//     //         .then((resp) => resp.json())
//     //         .then(function(data) {
//     //             // Create and append the li's to the ul
//     //             //alert(data);
//     //             console.log(data);
//     //             viewManager.loadDeviceFromJSON(data);
//     //             viewManager.updateGrid();
//     //             Registry.currentDevice.updateView();
//     //
//     //             window.dev = Registry.currentDevice;
//     //             window.Registry = Registry;
//     //
//     //             window.view = Registry.viewManager.view;
//     //
//     //             Registry.threeRenderer = new ThreeDeviceRenderer(document.getElementById("renderContainer"));
//     //             PageSetup.setupAppPage();
//     //
//     //         })
//     //         .catch(function(err) {
//     //             // This is where you run code if the server returns any errors
//     //             alert("Error fetching the json");
//     //             alert(err)
//     //         });
//     // }
//     //
//     // Registry.viewManager.setupToolBars();
//     // Registry.viewManager.generateBorder();
// };


// import ControlViewManager from "./controlViewManager";
//
// require('./ui/uploadModal');
// const singleton = require('./core/singleton');
//
// import Setup from './core/setup';
//
//
//
// //Initialize the setup object and then keep changing it later on
//
// //ThreeDuF.setup("c");
//
// //Setup the 3DuF UI
//
//
// // import Pump from './hardware/valvepump';
// // import io from 'socket.io-client';
//
//
//
// //let io = require('../lib/socket')
// //const socket = io('http://localhost');
// //const socket = io('http://localhost');
//
//
// // if (localStorage.firstVisit == true || localStorage.firstVisit == undefined )
// // {
// //     //      DECLARING PUMP VALVE STATE
// //
// //     localStorage.pumpData = [];
// //     localStorage.MasterData = [];
// //     localStorage.unsavedData = [];
// //     localStorage.oldPumpData = [];
// //     localStorage.pumps =  0;
// //     localStorage.settings_X_pos = 200;
// //     localStorage.settings_Y_pos= 200;
// //
// //
// //
// //     // Valve Control
// //     localStorage.pumpData = setup.clearPumpData();
// //     localStorage.valveData = setup.initiateValveData();
// //     localStorage.firstVisit = false;
// //     localStorage.pumpInitial = "TRUE";  //  keeps track if this is the first time pump data is being displayed (so that its not cleared on page reload)
// //     localStorage.valveClusters = "{}";
// //
// //     // Dispenser Control
// //     localStorage.Dispensers = 0;
// //     localStorage.dispenserData = setup.clearDispenserData();
// //     localStorage.dispenserToControl;
// //     localStorage.dispenserInitial == "TRUE";    //  keeps track if this is the first time dispenser data is being displayed (so that its not cleared on page reload)
// //
// //
// //
// //
// // }

/*
This is the actual inital code used by becca to start everything
 */
let reader = new FileReader();

function handleFiles() {
    let file = this.files[0];
    reader.readAsText(file);
}


window.onload = function () {
    let setup = new Setup();
    Singleton.defaultSetup = setup;
    let viewManager = new ControlViewManager();
    viewManager.loadDeviceFromJSON(JSON.parse(Examples["example2"]));
    viewManager.updateGrid();

    Singleton.viewManager = viewManager;

    if (localStorage.JSONloaded != "true") {
        // var defaultJSON = {"name":"My Device","params":{"width":75800,"height":51000},"layers":[{"name":"flow","color":"indigo","params":{"z_offset":0,"flip":false},"features":{}},{"name":"control","color":"red","params":{"z_offset":1200,"flip":true},"features":{}}],"groups":[]};
        $(document).ready(function() {
            //document.getElementById("json_in").value = localStorage.JSON_CONTROL;-->
            $('#findJSON').modal('show');
        });
        // Reference for the html input element
        let inputElement = document.getElementById("json_in");
        // on change run the 'handleFiles' method
        inputElement.addEventListener("change", handleFiles, false);


        reader.onload = function (e) {
            var defaultJSON = reader.result;
            viewManager.loadDeviceFromJSON(JSON.parse(reader.result));
            // console.log(viewManager.currentDevice);
            setup.initialize(viewManager.currentDevice);
            // localStorage.setItem('JSONtoLoad', defaultJSON);
            // localStorage.setItem('JSONloaded', 'true');
            // localStorage.setItem('loadControls', 'true');
        }
    }
    else {
        let defaultJSON = JSON.parse(localStorage.getItem('JSONtoLoad'));
    }

};



// SET JSON TO LOAD TO 3DuF AND VALVES/DISPENSERS
//
//
//
//
//
