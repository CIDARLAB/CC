export default class ValvePump {

    /**
     * Default constructor for the Pump object
     * @param id
     */
    constructor(component) {
        this.__componentReference = component;
    }


    /**
     * Sets the id of the Pump object
     * @param value
     */
    set ID(value) {
        this.__id = value;
    }

    /**
     * Returns the id of the Pump object
     * @returns {*}
     */
    get ID() {
        return this.__id;
    }

    /**
     * Returns the HW shield value
     * @returns {number}
     */
    get HW_Shield() {
        return this.__hwshield;
    }

    /**
     * Sets the HW Shield value
     * @param value
     */    // set HW_Shield(value) {
    //     this.__hwshield = value;
    // }

    /**
     * Returns the component reference
     * @returns {}
     */
    get Reference(){
        this.__componentReference;
    }

    
    set Precision(value) {
        this.__Precision = value;
    }

    get Precision() {
        return this.__Precision;
    }

    set Close(value) {
        this.__close = value;
    }

    get Close() {
        return this.__close;
    }

    set Open(value) {
        this.__open = value;
    }

    get Open() {
        return this.__open;
    }

    set Current_State(value) {
        this.__Current_State = value;
    }

    get Current_State() {
        return this.__Current_State;
    }

    set Orientation(value) {
        this.__orientation = value;
    }

    get Orientation() {
        return this.__orientation;
    }

    set Device_Index(value) {
        this.__deviceindex = value;
    }

    get Device_Index() {
        return this.__deviceindex;
    }

}

