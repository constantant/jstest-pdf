let Backbone = require('backbone');
import settings from '../settings';
import Person from '../models/person';

export default Backbone.Collection.extend({
    model: Person,
    url: settings.src
});
