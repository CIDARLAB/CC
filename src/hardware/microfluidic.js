export default class Microfluidic {

    /**
     * Default constructor for the microfluidic. Accepts the microfluidic json.
     * @param json
     */
    constructor(json) {
        console.log("new microfluidic instance");
        this.__json = json;
        this.__createValves();
    }

    /**
     * Returns the json of the device
     * @returns {*}
     * @constructor
     */
    get JSON(){
        return this.__json;
    }

    /**
     * Sets the name
     * @param value
     */
    set Name(value) {
        this.__name = value;
    }

    /**
     * Returns the name
     * @returns {*}
     */
    get Name() {
        return this.__name;
    }

    /**
     * Returns the number valves on the device
     * @returns {number}
     */
    getValveCount() {
        return this.__valves;
    }

    /**
     * This method creates valves from JSON
     * @private
     */
    __createValves(){

        //First check for the version !!!!
        if(__json.version >= 1){
            console.log("Valid Format for the input file found to be parsed");
        }else{
            alert("Invalid format of the input file. Only supports interchange version 1");
            return;
        }

        let componentcollection = __json.components;
        let connectioncollection = __json.connections;
        let valves = [];
        let ports = [];
        //Step 1: Identify the valves
        for(var i in componentcollection){
            if(componentcollection[i].entity == "VALVE" || componentcollection[i].entity == "VALVE3D"){
                valves.push(componentcollection[i].id);
            }
        }
        //Step 2: Traverse the connections and components to see what PORT type components are connected to these components
        for(var i in connectioncollection){
            let connection = connectioncollection[i];

            //Check sources
            if(valves.includes(connection.source.component)){
                //Source is the component
                //TODO: Begin traversal to find terminating port
            }else{
                //Check sinks
                for(var j in connection.sinks){
                    if(valves.includes(connection.sinks[j].component)){
                        //Target is the component
                        //TODO: Begin traversal to find terminating port
                    }
                }
            }
        }

        console.log("Warning ! We still need to implement full netlist traversal to identify valves and ports for the microfluidic");
        this.__valves = valves;
        this.__ports = ports;
    }


    /**
     * Returns some kind of an object
     * @returns [{},{},{}]
     */
    getValves(){
        return [{},{},{}];
    }

    /**
     * Creates a Microfluidic Device object from the json
     * @param json
     * @returns {Microfluidic}
     */
    static createMicrofluidic(json) {
        return new Microfluidic(json);
        //TODO: We need to parse through the entire json, find valves and create valve assignments

    }
}