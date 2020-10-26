"use strict";

var blogZone = [];

var Blog =
/** @class */
function () {
  //

  /**
   * class is like the template   // create two child classes
   *
   */
  function Blog(Location, Address, img, price, web) {
    this.Location = Location;
    this.Address = Address;
    this.img = img;
    this.price = price;
    this.web = web;
    blogZone.push(this);
  }

  Blog.prototype.render = function () {
    return "<div class = \"col-lg-3 col-md-6 col-sm-12 mt-4 mb-5\"> <p>" + this.Location + "</p><p>" + this.Address + "</p> </p><p>" + this.price + "</p><p><a target=\"_blank\" href=\"https://" + this.web + "\">" + this.web + "</a></p><img class=\"img-fluid mb-2 d-none d-md-block d-lg-block\" style=\"width: 40rem; height: 30rem;\" src=\"" + this.img + "\"> </div>";
  };

  return Blog;
}();
/** declaring a var (var is a like a functionScope) */


var stCharles = new Blog("St Charles", "Karlsplatz 1, 1010 Vienna", "image/img1.jpg", " ", " ");
var mainZoo = new Blog("St Charles", "Maxingstraße 13b, 1130 Vienna", "image/zoo.jpg", " ", " ");
var mainRestaurant = new Blog("Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19, 1050 Vienna", "image/lemonLeaf.png", " ", "www.example.com");
var restau = new Blog("Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19, 1050 Vienna", "image/brunerRes.png", " ", "www.google.com");
var Len = new Blog("Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19, 1050 Vienna", "image/lenny.jpg", "€30 ", "www.google.com");
var Dre = new Blog("Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19, 1050 Vienna", "image/dread.jpg", "€700 ", "www.google.com");
/**creating a loop */

for (var _i = 0, _blogZone = blogZone; _i < _blogZone.length; _i++) {
  var i = _blogZone[_i];
  document.getElementById("result").innerHTML += blogZone[i].render();
}