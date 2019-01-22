// import monaco from 'monaco-editor/esm/vs/editor/editor.main'

import * as Singleton from "../core/singleton";

export default class CodeEditor{
    constructor(element){
        //Get all the elements

        // monaco.editor.create(element, {
        //     value: "function hello() {\n\talert('Hello world!');\n}",
        //     language: "javascript"
        // });
        this.__playButton = document.getElementById("play-button");
        this.__pauseButton = document.getElementById("pause-button");
        this.__stopButton = document.getElementById("stop-button");

        let ref = this;

        this.__playButton.addEventListener('click', function (el, ev) {
            ref.startExecution();

        });

        this.__pauseButton.addEventListener('click', function (el, ev) {
            ref.pauseExecution();

        });

        this.__stopButton.addEventListener('click', function (el, ev) {
            ref.stopExecution();

        });

    }

    startExecution() {
        console.log("TEST");
        Singleton.defaultExecutionEnvironment.start();
    }

    pauseExecution() {
        console.log("TEST");
        Singleton.defaultExecutionEnvironment.pause();

    }

    stopExecution() {
        console.log("TEST");
        Singleton.defaultExecutionEnvironment.stop();
    }
}