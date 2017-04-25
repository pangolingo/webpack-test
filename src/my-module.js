class MyModule {
    sayHello(name){
        let str = `Greetings, ${name}`;
        // document.write(str);
        console.log(str);
    }
    sayGoodbye(){
        let str = `Goodbye.`;
        // document.write(str);
        console.log(str);
    }
}

export default MyModule;