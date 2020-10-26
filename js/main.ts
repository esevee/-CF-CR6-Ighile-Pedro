"use strict";
const blogZone: Array<any> = [];

class Blog{
    Location: string;
    Address: any;
    img: string;
    
  //

    /**
     * class is like the template   // create two child classes
     *
     */
    constructor(Location, Address, img ) {
        
        this.Location = Location;
        this.Address = Address;
        this.img = img;
        blogZone.push(this);
    }

    render(){
        return `<div class = "col-lg-3 col-md-6 col-sm-12 mt-4 mb-5"> 
        <p>${this.Location}</p>
        <p>${this.Address}</p> 
        <img class="img-fluid mb-2 d-none d-md-block d-lg-block" style="width: 40rem; height: 30rem;" src="${this.img}">
        </div>`
    }

    
    
}

//firstChild 
class Restaurant extends Blog {
    web: string;
    constructor(Location:string, Address: any, img: string, web:string ){
        super (Location, Address, img);
        this.web = web;
    }
    render(){
        return `<div class = "col-lg-3 col-md-6 col-sm-12 mt-4 mb-5"> 
        <p>${this.Location}</p>
        <p>${this.Address}</p> 
        <p><a target="_blank" href="https://${this.web}">${this.web}</a></p> 
        <img class="img-fluid mb-2 d-none d-md-block d-lg-block" style="width: 40rem; height: 30rem;" src="${this.img}">
        </div>`
    }
    
} //end of Child number one

class Celeb extends Blog {   // child number two starts here
    price: string;
    web: string;
    constructor (Location: string, Address: any, img: string, price: string, web: string){
        super(Location, Address, img);
        this.price = price;
        this.web = web;
    }
    render(){
        return `<div class = "col-lg-3 col-md-6 col-sm-12 mt-4 mb-5"> 
        <p>${this.Location}</p>
        <p>${this.Address}</p> 
        <p>${this.price}</p>
        <p><a target="_blank" href="https://${this.web}">${this.web}</a></p> 
        <img class="img-fluid mb-2 d-none d-md-block d-lg-block" style="width: 40rem; height: 30rem;" src="${this.img}">
        </div>`
    }
}// child number two ends here


    /** declaring a var (var is a like a functionScope) */
    var stCharles = new Blog("St Charles", "Karlsplatz 1, 1010 Vienna","image/img1.jpg");
    var mainZoo = new Blog("St Charles", "Maxingstraße 13b, 1130 Vienna", "image/zoo.jpg");
    var mainRestaurant = new Restaurant("Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19", "image/lemonLeaf.png", "www.example.com");
    var staurant = new Restaurant("Viennese Restaurant", "Kettenbrückengasse 19" , "image/brunerRes.png", "https://www.codefactory.wien/");
    var Len = new Celeb("Lemon Leaf Thai Restaurant", "everygadsse 19" , "image/lenny.jpg", "$200", "https://www.google.com/");
    var Dre = new Celeb("Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19" , "image/dread.jpg", "$87", "https://www.codefactory.wien/");

    
/**creating a loop */
for(let i in blogZone){
    document.getElementById("result").innerHTML += blogZone[i].render();
}
