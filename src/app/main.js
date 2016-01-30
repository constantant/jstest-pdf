//let $ = require('jquery');
//let Backbone = require('backbone');

import Persons from './collections/persons';
import App from './views/app';
import Router from './router';


const persons = new Persons();
const app = new App(persons);
/*const router = */new Router(app);
