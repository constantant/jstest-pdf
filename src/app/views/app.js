import settings from '../settings';

let $ = require('jquery');
let _ = require('lodash');
let Backbone = require('backbone');
let template = require('./app.hbs');

import PersonInfo from './person-info';
import PersonList from './person-list';

export default Backbone.View.extend({
    el: $('.test'),

    template: template,

    initialize: function(persons){
        this.persons = persons;

        this.persons.fetch({
            success: _.bind(this.render, this)
        });
    },

    render: function() {
        this.$el.html(
            this.template()
        );

        this.$prev = $('.test-person-nav-prev', this.$el);
        this.$next = $('.test-person-nav-next', this.$el);
        this.$current = $('.test-person-nav-current', this.$el);

        this.info = new PersonInfo(
            $('.test-person-info', this.$el)
        );
        this.list = new PersonList(
            $('.test-person-list', this.$el),
            this.persons
        );

        this.info.render();
        this.list.render();

        Backbone.history.start();
    },

    setPersonById: function(id){
        var model = this.persons.get(id);

        if(model){

            this.info.setPerson(model);
            this.list.setPerson(id);

            this.changeNav(model);
        } else {
            alert('Ощибка 404...');
        }

    },

    changeNav: function(model){
        var currentIndex = this.persons.indexOf(model),
            len = this.persons.length,
            prevIndex, nextIndex;

        if(currentIndex == 0){
            prevIndex = this.getPersonIdByModelIndex(len - 1);
            nextIndex = this.getPersonIdByModelIndex(currentIndex + 1);
        }else if(currentIndex == (len - 1)){
            prevIndex = this.getPersonIdByModelIndex(currentIndex - 1);
            nextIndex = this.getPersonIdByModelIndex(0);
        }else{
            prevIndex = this.getPersonIdByModelIndex(currentIndex - 1);
            nextIndex = this.getPersonIdByModelIndex(currentIndex + 1);
        }

        this.$prev.get(0).href = '#/' + prevIndex;
        this.$next.get(0).href = '#/' + nextIndex;
        this.$current.text(currentIndex + 1);

    },

    getPersonIdByModelIndex: function(index){
        return this.persons.at(index).get('id');
    }

});