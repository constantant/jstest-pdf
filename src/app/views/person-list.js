let Backbone = require('backbone');

let $ = require('jquery');
let _ = require('lodash');
let template = require('./person-list.hbs');

export default Backbone.View.extend({
    template: template,

    initialize: function(parent, list){
        this.setElement(parent);
        this.persons = list;
        this.itemIdPrefix_ = _.uniqueId('test-item-') + '-';
    },

    render: function() {
        this.$el.html(
            this.template({
                items: this.persons.toJSON(),
                idPrefix: this.itemIdPrefix_
            })
        );
    },

    setPerson: function(id){
        var currentClass = 'current';
        $('.' + currentClass, this.$el).removeClass(currentClass);
        $('#' + this.itemIdPrefix_ + id).addClass(currentClass);
    }
});