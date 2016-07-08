define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone) {

    'use strict';

    var AppRouter = Backbone.Router.extend({

        routes: {
            ''              : 'homepage',
            'operations'    : 'operations',
            'categories'    : 'categories',
            'summary'       : 'summary',
            'settings'      : 'settings'
        },

        homepage: function() {
            $('.the-title').html('Homepage');
        },

        operations: function() {
            $('.the-title').html('Operations');
        },

        categories: function() {
            $('.the-title').html('Categories');
        },

        summary: function() {
            $('.the-title').html('Summary');
        },

        settings: function() {
            $('.the-title').html('Settings');
        }

    });

    //Initialize the Router
    var Router = new AppRouter();

    // Navigation
    $('a').not('.static').click(function(event) {
        event.preventDefault();
        Router.navigate($(this).attr('href'), {
            trigger: true
        });
    });

    // Activate Backbone history
    Backbone.history.start({
        pushState: true
    });

    return Router;

});