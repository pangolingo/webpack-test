import React from 'react';
import ReactDOM from 'react-dom';

import CustomModule from "./custom-module.js";
import PageHeadline from "./components/page-headline"

let customModule = new CustomModule();

customModule.sayHello("Jim");
customModule.sayGoodbye();


ReactDOM.render(
    <PageHeadline text="Hello" />,
    document.getElementById('app')
);
