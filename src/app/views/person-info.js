let Backbone = require('backbone');

let $ = require('jquery');
//let _ = require('lodash');
let templateView = require('./person-info.hbs');
let templateAside = require('./person-info-aside.hbs');
let templateContent = require('./person-info-content.hbs');

export default Backbone.View.extend({
    template: templateView,
    templateData: templateAside,
    templateContent: templateContent,

    initialize: function(parent){
        this.setElement(parent);
    },

    render: function() {
        this.$el.html(
            this.template()
        );

        this.$aside = $('.test-person-info-aside', this.$el);
        this.$content = $('.test-person-info-content', this.$el);
    },

    setPerson: function(model){

        this.$aside.html(
            this.templateData(model.attributes)
        );

        this.$content.html(
            this.templateContent(model.attributes)
        );
    }
});