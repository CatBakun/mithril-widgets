var button = require('./button');
var navbar = require('./navbar');
var m = require('mithril');

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

var Component = {
	controller: function(){

	},
	view: function(ctrl){
		return <div>Hello</div>;
	}
}

m.mount(document.getElementById('app'), Component);

console.log(new Polygon(5,4));
console.log(navbar, button);