var Users = Backbone.Collection.extend({
	url: 'http://backbonejs-beginner.herokuapp.com/users'
});

var users = new Users();