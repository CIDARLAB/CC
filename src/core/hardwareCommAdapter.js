import io from 'socket.io-client';

export default class HardwareCommAdapter {

    constructor(){
        this.__socketIOClient = null
        this.__name = null
    }

    createConnection(name, address="http://localhost:3000"){
        this.__name = name;
        this.__socketIOClient = io(address);
        console.log(this.__socketIOClient);
    }

    sendMessage(message){
        this.__socketIOClient.emit(
            "send-raw", {
                "name": this.__name,
                "payload": HardwareCommAdapter.str2ab_newline(message)
            }
        );
    }

    static str2ab_newline(str) {
        str = str + '\n';
        let buf = new ArrayBuffer(str.length); // 2 bytes for each char
        let bufView = new Uint8Array(buf);
        for (let i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        };
        return buf;
    };
}