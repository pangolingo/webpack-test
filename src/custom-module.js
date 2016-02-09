import MyModule from "./my-module.js";

class CustomModule extends MyModule {
    sayHello(name){
        let str = `Hello ${name}`;
        document.write(str);
        console.log(str);
    }
    
}

export default CustomModule;