define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone) {

    'use strict';

    // Create Category View
    var CategoryView = Backbone.View.extend({

        tagName: 'tr',

        template: _.template($('.category-template').html()),

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
        /*,

        addOne: function(event) {
            event.preventDefault();
            this.model.addOne();
        }*/

    });

    return CategoryView;
});