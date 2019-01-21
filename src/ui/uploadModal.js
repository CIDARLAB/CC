let singleton = require('../core/singleton');

// let threeduf = require('../../3DuF/src/app/controlAppSetup');


/**
 * UI elements that are expected by this code. Ensure that the HTML UI has
 * elements with these IDs.
 */

let uploadButton = document.getElementById("loadJSON");
let inputElement = document.getElementById("JSONinput");

let devicejson = null;

function handleFiles() {
    let file = this.files[0]; /* now you can work with the file list */

    console.log(file.name); /* logged the filename */
    console.log(file.size); /* logged the filesize  */
    reader.readAsText(file); /* this will make sense in a bit */

}

let reader = new FileReader();

reader.onload = function (e) {
    // console.log(reader.result);
    /* Do something with the read reader.result */
    try{
        devicejson = JSON.parse(reader.result);
    }catch (err) {
        console.log('Parsing Error: ' + err);
    }
};

// on change run the 'handleFiles' method
inputElement.addEventListener("change", handleFiles, false);

uploadButton.addEventListener('click', function(e) {
    e.preventDefault();
    // TODO event handler logic
    let setup = singleton.defaultSetup;
    console.log("User Event: Load JSON button clicked");
    setup.initialize(devicejson);
    threeduf.loadJSON(devicejson);
    threeduf.drawValves(setup.getValves(), callback);
});

function callback(id){
    console.log("id of valve clicked: " + id);
    let setup = singleton.defaultSetup;
    setup.toggleValve(id);
}
