// Describing/Defing router
var Router = Backbone.Router.extend({
	routes: {
		''     : 'home',
		'new'  : 'editUser' 
	}
});

// Creating instance of the router
var router = new Router();

// Home route - tells router what to render
router.on('route:home', function(){
	userList.render();
});

// EDIT ROUTE
router.on('route:editUser', function(){
	console.log('Edit User Form');
	editUser.render();
});

//Basically turns the router on... not sure what it does really?
Backbone.history.start();