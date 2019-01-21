import {BareViewManager, Registry} from "ThreeDuF";
import CodeEditor from "./ui/codeEditor";


export default class ControlViewManager extends BareViewManager {
    constructor(){
        super();
        Registry.viewManager = this;
        this.__codeEditor = new CodeEditor(document.getElementById("code-container"));
        console.log("TEST");
    }
}