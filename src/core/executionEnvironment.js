import * as Singleton from "./singleton";
import HardwareCommAdapter from "./hardwareCommAdapter";



export default class ExecutionEnvironment {
    constructor(){
        this.__state = "STOPPED";
        this.__instructions = [];
        this.__executor = null;
        this.__socketioAdaptor = new HardwareCommAdapter();
        this.__socketioAdaptor.createConnection();
        this.__executionRegister = null;
        this.__waitFLAG = false;
    }

    get Executor(){
        return this.__executor;
    }

    get IntervalRegister(){
        return this.__intervalRegister;
    }

    get ExecutionRegister(){
        return this.__executionRegister;
    }

    get Instructions(){
        return this.__instructions;
    }

    get WaitRegister(){
        return this.__waitRegister;
    }

    get WaitFLAG(){
        return this.__waitFLAG;
    }

    get State(){
        return this.__state;
    }

    set IntervalRegister(value){
        this.__intervalRegister = value;
    }

    set ExecutionRegister(value){
        this.__executionRegister = value;
    }

    set Instructions(value){
        this.__instructions = value;
    }

    set WaitRegister(value){
        this.__waitRegister = value;
    }

    set WaitFLAG(value){
        this.__waitFLAG = value;
    }

    set State(value){
        this.__state = value;
    }

    start(){
        this.__state = "RUNNING";
        this.__loadInstructionsFromUI();
        if(null == this.__executionRegister){
            this.__executionRegister = this.__instructions.pop();
        }
        this.__executor = window.setInterval(this.intervalWorker, 1);
    }

    stop(){
        this.__state = "STOPPED";
        window.clearInterval(this.__executor);
    }

    pause(){
        this.__state = "PAUSED";
    }

    clearInstructions(){
        this.__instructions = [];
    }

    __loadInstructionsFromUI() {
        let textarea = document.getElementById("text-area-code");
        let lines = (textarea.value).split("\n");
        let temp_instructions = [];
        //Compute each line
        for(let i in lines){
            let line = lines[i].trim();
            temp_instructions.push(line);
        }

        this.__instructions = temp_instructions.reverse();
    }

    intervalWorker(){

        /*
        TODO: Change the way the timer works, right now its useless beyond a couple of seconds
        https://www.sitepoint.com/creating-accurate-timers-in-javascript/
         */
        //
        let env = Singleton.defaultExecutionEnvironment;
        // console.log("STATE", env.State);

        if(true == env.WaitFLAG){
            env.IntervalRegister += 1;

            if(env.IntervalRegister >= env.WaitRegister){
                env.WaitFLAG = false;
                console.log(env.IntervalRegister);
            }else{
                return;
            }
        }

        let instruction = env.ExecutionRegister;

        if("" === instruction || "\n" === instruction || "\r" === instruction){
            env.stop();
        }

        let parts = instruction.split(" ");
        // console.log(parts);

        if("SET" === parts[0]){
            let componentname = parts[1];
            let setvalue = parts[2];
            // console.log("SET command found", componentname, setvalue);
            Singleton.defaultSetup.sendCommand(componentname, setvalue);

        }else if("WAIT" === parts[0]){
            // console.log("WAIT command found");
            let waittime = parts[1];
            env.WaitFLAG = true;
            env.WaitRegister = waittime * 1000; //Assume this is in seconds
            env.IntervalRegister = 0;
        }else{
            console.error("Unknown instruction type", parts[0]);
        }

        //Load next command
        let instructions = env.Instructions;
        instruction = instructions.pop();
        env.Instructions = instructions;
        env.ExecutionRegister = instruction;

    }

}