import Microfluidic from '../hardware/microfluidic';
import Pump from '../hardware/valvepump';
import * as Singleton from "./singleton";

export default class Setup{

    /**
     * The constructor takes a json, then dynamically creates the microfluidic object from that
     * @param json
     */
    constructor(device){
        //Initialize everything !!!!!
        // let chip = new Microfluidic(json);
        this.__chip = null;
        this.__pumps = [];
        this.__peripherals = [];
        this.__hardwaremap = new Map();

    }

    /**
     * Returns the Inline pumps used in the setup
     * @return {Array}
     * @constructor
     */
    get Pumps(){
        return this.__pumps;
    }

    /**
     * Returns the peripherals used in the setup
     * @return {Array}
     * @constructor
     */
    get Peripherals(){
        return this.__peripherals;
    }

    /**
     * Returns the microfluidic used in the design
     * @returns {*}
     * @constructor
     */
    get Chip(){
        return this.__chip;
    }

    /**
     * Attaches the pump to a given valve
     * @param valve id
     * @param pump object
     */
    attachPump(valve, pump){
        this.__pumps.push(pump);
        this.__hardwaremap.set(valve, pump);
    }

    toggleValve(valveid){
        let pump = this.__hardwaremap.get(valveid);
        let openvalue = pump.Open;
        let closevalue = pump.Close;
        pump.setState();
    }

    getValves(){
        if(this.__chip == null){
            alert("Error: Microfluidic device object has not been initiated in the device");
        }
        return this.__chip.getValves();
    }

    initialize(device){
        let chip = new Microfluidic(device);
        this.__chip = chip;
    }

    sendCommand(componentname, setvalue) {
        console.log("Command", componentname, setvalue);
    }

}