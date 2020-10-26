"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var blogZone = [];
var Blog = /** @class */ (function () {
    //
    /**
     * class is like the template   // create two child classes
     *
     */
    function Blog(Location, Address, img) {
        this.Location = Location;
        this.Address = Address;
        this.img = img;
        blogZone.push(this);
    }
    Blog.prototype.render = function () {
        return "<div class = \"col-lg-3 col-md-6 col-sm-12 mt-4 mb-5\"> \n        <p>" + this.Location + "</p>\n        <p>" + this.Address + "</p> \n        <img class=\"img-fluid mb-2 d-none d-md-block d-lg-block\" style=\"width: 40rem; height: 30rem;\" src=\"" + this.img + "\">\n        </div>";
    };
    return Blog;
}());
//firstChild 
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(Location, Address, img, web) {
        var _this = _super.call(this, Location, Address, img) || this;
        _this.web = web;
        return _this;
    }
    Restaurant.prototype.render = function () {
        return "<div class = \"col-lg-3 col-md-6 col-sm-12 mt-4 mb-5\"> \n        <p>" + this.Location + "</p>\n        <p>" + this.Address + "</p> \n        <p><a target=\"_blank\" href=\"https://" + this.web + "\">" + this.web + "</a></p> \n        <img class=\"img-fluid mb-2 d-none d-md-block d-lg-block\" style=\"width: 40rem; height: 30rem;\" src=\"" + this.img + "\">\n        </div>";
    };
    return Restaurant;
}(Blog)); //end of Child number one
var Celeb = /** @class */ (function (_super) {
    __extends(Celeb, _super);
    function Celeb(Location, Address, img, price, web) {
        var _this = _super.call(this, Location, Address, img) || this;
        _this.price = price;
        _this.web = web;
        return _this;
    }
    Celeb.prototype.render = function () {
        return "<div class = \"col-lg-3 col-md-6 col-sm-12 mt-4 mb-5\"> \n        <p>" + this.Location + "</p>\n        <p>" + this.Address + "</p> \n        <p>" + this.price + "</p>\n        <p><a target=\"_blank\" href=\"https://" + this.web + "\">" + this.web + "</a></p> \n        <img class=\"img-fluid mb-2 d-none d-md-block d-lg-block\" style=\"width: 40rem; height: 30rem;\" src=\"" + this.img + "\">\n        </div>";
    };
    return Celeb;
}(Blog)); // child number two ends here
/** declaring a var (var is a like a functionScope) */
var stCharles = new Blog("St Charles", "Karlsplatz 1, 1010 Vienna", "image/img1.jpg");
var mainZoo = new Blog("St Charles", "Maxingstraße 13b, 1130 Vienna", "image/zoo.jpg");
var mainRestaurant = new Restaurant("Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19", "image/lemonLeaf.png", "www.example.com");
var staurant = new Restaurant("Viennese Restaurant", "Kettenbrückengasse 19", "image/brunerRes.png", "https://www.codefactory.wien/");
var Len = new Celeb("Lemon Leaf Thai Restaurant", "everygadsse 19", "image/lenny.jpg", "$200", "https://www.google.com/");
var Dre = new Celeb("Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19", "image/dread.jpg", "$87", "https://www.codefactory.wien/");
/**creating a loop */
for (var i in blogZone) {
    document.getElementById("result").innerHTML += blogZone[i].render();
}
