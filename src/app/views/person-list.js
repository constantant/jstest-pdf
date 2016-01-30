let Backbone = require('backbone');

let $ = require('jquery');
//let _ = require('lodash');
let template = require('./person-list.hbs');

export default Backbone.View.extend({
    template: template,

    initialize: function(parent, list){
        this.setElement(parent);
        this.persons = list;
    },

    render: function() {
        this.$el.html(
            this.template(this.persons.toJSON())
        );
    },

    setPerson: function(id){
        var currentClass = 'current';
        $('.' + currentClass, this.$el).removeClass(currentClass);
        $('#test-item-' + id).addClass(currentClass);
    }
});