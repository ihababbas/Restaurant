'use strict';
const body = document.getElementsByTagName('body');
var ID = 1000;
var allfood = [];
var newID = 0;
function add() {
    ID = ID + 1;
    return ID ;  
  };

function Menu(FoodID ,FoodName, Type, Price ) {
    this.FoodID = FoodID;
    this.Name = FoodName;
    this.Type= Type;
    this.Price = Price;    
    this.add = function (ID)
    {
      this.FoodID =ID;  
    };
   
    allfood.push(this);
};


let form = document.getElementById("form");
//submit(form);
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let Type = event.target.types.value;
    let price = event.target.price.value;
    console.log(name, price, Type);
    newID = add();
    const newType =  new Menu(newID,name,Type,price)    
    console.log(allfood);
    newType.printMenu(newType);    
};


const table = document.createElement('table');
body[0].childNodes[3].appendChild(table);

let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

const heads = ["Food ID","Food Name", "Type","Price"];
let row_1 = document.createElement('tr');
for (let i= 0; i < heads.length ; i++)
{
    let heading_1 = document.createElement('th');
        heading_1.textContent = heads[i];
        row_1.appendChild(heading_1);
};
thead.appendChild(row_1);



Menu.prototype.printMenu = function (newType) {
        let row_1 = document.createElement('tr');
        for (const property in newType) {            
        let heading_1 = document.createElement('th');
       row_1.appendChild(heading_1);     
        heading_1.textContent = newType[property];
            if (property == "Price")
            break;
        }
        thead.appendChild(row_1);
    };


//    let liEl = document.createElement('li');
  //  ulEl.appendChild(liEl);
   // liEl.textContent = this.ingredients[i];
