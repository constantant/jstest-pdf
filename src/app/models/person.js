import settings from '../settings';
let Backbone = require('backbone');

export default Backbone.Model.extend({
    idAttribute: settings.idAttribute
});