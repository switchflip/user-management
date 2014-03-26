// Describing the UserList
var UserList = Backbone.View.extend({
	 // page element we're listening on for any changes or events
	 el: '.page',

	 //each page needs to be rendered, so the render function handles that
	 render: function(){
	 	var that = this;
	 	users.fetch({
	 		// on success pass the users collection into the function
	 		success: function(users){
	 			var template = _.template($('#user-list-template').html(), {users: users.models});
	 			that.$el.html(template);
	 		}
	 	})
	 	
	 }
});

// Creating an instance of it, which will then be available to the router and other stuffs.
console.log('rendering UserList...');
var userList = new UserList();