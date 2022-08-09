'use strict';
const body = document.getElementsByTagName('body');
var ID = 1000;
var allfood = [];
var newID = 0;
var list = [];
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
    saveData(allfood);   
};

function saveData(data) {
    let stringObj = JSON.stringify(data);
    localStorage.setItem("MenuList", stringObj);
  }

  function getData() {
    let retrievedData = localStorage.getItem("MenuList");
    let arrayData = JSON.parse(retrievedData);
    console.log(arrayData);
    return arrayData;
};

list = getData();

sessionStorage.setItem("jsArray", JSON.stringify(list));