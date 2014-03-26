$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
      if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
      } else {
          o[this.name] = this.value || '';
      }
  });
  return o;
};

var EditUser = Backbone.View.extend({
	el: '.page',
	render: function(){
		var template = _.template($('#edit-user-template').html(), {});
		this.$el.html(template);
	},

	events: {
		'click .btn': 'saveUser'
	},
	saveUser: function(event){
		event.preventDefault();
		var x = $ ('input #user-first-name').serializeObject();
		console.log(x);
	}
});

console.log('Rendering Edit User');
var editUser = new EditUser();