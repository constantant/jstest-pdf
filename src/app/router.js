import settings from './settings';

//let $ = require('jquery');
let Backbone = require('backbone');

export default Backbone.Router.extend({

    routes: {
        '': 'start',
        ':id': 'showPersonInfo'
    },

    initialize(app) {
        this.app = app;
    },

    start() {
        var defaultPerson = this.app.persons.at(settings.defaultPersonIndex);

        Backbone.history.navigate(
            '#/' + defaultPerson.get('id'),
            {
                trigger: true,
                replace: false
            }
        );
    },

    showPersonInfo(id) {
        this.app.setPersonById(id);
    }

});
