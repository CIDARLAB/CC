import Microfluidic from '../hardware/microfluidic';
import Pump from '../hardware/valvepump';

export default class Setup{

    /**
     * The constructor takes a json, then dynamically creates the microfluidic object from that
     * @param json
     */
    constructor(json){
        //Initialize everything !!!!!
        let chip = new Microfluidic(json);
        this.__chip = chip;
        this.__pumps = [];
        this.__peripherals = [];
        this.__hardwaremap = new Map();

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
        let openvalue = pump.getOpen
        pump.setState();
    }

}