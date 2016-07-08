define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    
    'use strict';

    // Category model
    var Category = Backbone.Model.extend({
        defaults: {
            category_id: 0,
            category_name: '',
            category_color: '#cccccc'
        }
    });

    return Category;
});