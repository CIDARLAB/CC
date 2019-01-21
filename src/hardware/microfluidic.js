export default class Microfluidic {

    /**
     * Default constructor for the microfluidic. Accepts the microfluidic json.
     * @param json
     */
    constructor(device) {
        console.log("new microfluidic instance");
        this.__device = device;

        this.__inlinePumps = null;
        this.__valves = null;
        this.__ports = null;


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
     * This method creates valves from JSON
     * @private
     */
    __createValves(){

        if(this.__device == null){
            return;
        }

        // //First check for the version !!!!
        // if(this.__json.version >= 1){
        //     console.log("Valid Format for the input file found to be parsed");
        // }else{
        //     alert("Invalid format of the input file. Only supports interchange version 1");
        //     return;
        // }
        //
        // let componentcollection = this.__json.components;
        // let connectioncollection = this.__json.connections;
        // let valves = [];
        // let pumps = [];
        // let ports = [];
        // //Step 1: Identify the valves
        // for(let i in componentcollection){
        //     if(componentcollection[i].entity == "VALVE" || componentcollection[i].entity == "VALVE3D"){
        //         valves.push(componentcollection[i].id);
        //     }else if(componentcollection[i].entity == "PUMP" || componentcollection[i].entity == "PUMP3D"){
        //         pumps.push(componentcollection[i].id);
        //     }
        // }
        // //Step 2: Traverse the connections and components to see what PORT type components are connected to these components
        // for(let i in connectioncollection){
        //     let connection = connectioncollection[i];
        //
        //     //Check sources
        //     if(valves.includes(connection.source.component)){
        //         //Source is the component
        //         //TODO: Begin traversal to find terminating port
        //     }else{
        //         //Check sinks
        //         for(let j in connection.sinks){
        //             if(valves.includes(connection.sinks[j].component)){
        //                 //Target is the component
        //                 //TODO: Begin traversal to find terminating port
        //             }
        //         }
        //     }
        // }


        console.log("Components:", this.__device.getComponents());

        console.log("Warning ! We still need to implement full netlist traversal to identify valves and ports for the microfluidic");
        // this.__valves = valves;
        // this.__ports = ports;
        // this.__inlinePumps = pumps
    }

    getValves(){
        //TODO: Change this with the actual code to return the valves
        return [
            {
                id: "v1",
                xpos: 1000,
                ypos: 1000
            },
            {
                id: "v2",
                xpos: 2000,
                ypos: 2000
            },
            {
                id: "v3",
                xpos: 3000,
                ypos: 3000
            },
            {
                id: "v4",
                xpos: 4000,
                ypos: 4000
            },
            {
                id: "v5",
                xpos: 5000,
                ypos: 5000
            }
        ]
    }
}