define([
    'underscore',
    'backbone',
    'model/category'
], function(_, Backbone, Category) {
    
    'use strict';

    // Create Categories Collection
    var CategoriesCollection = Backbone.Collection.extend({
        model: Category,
        url: 'http://api.myexpenses.dt/v1/categories'
    });

    return CategoriesCollection;

});