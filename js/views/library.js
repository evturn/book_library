var app = app || {};

app.LibraryView = Backbone.View.extend({
	el: '#books',
	initialize: function(initialBooks){
		this.collection = new app.Library(initiaBooks);
		this.render();
	},
});