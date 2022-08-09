
const body = document.getElementsByTagName('body');


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
//-------------------------------------------------------------------------------
jsarray = sessionStorage.getItem("jsArray");
list = JSON.parse(jsarray);
console.log(list);
console.log(list[0]);
 let index = 0;

        for(i=0 ; i < list.length ; i++)
        {
          index = list[i];
          let row_2 = document.createElement('tr');
          for (const property in index) {            
          let heading_1 = document.createElement('th');
          row_2.appendChild(heading_1);     
           heading_1.textContent = index[property];
           if (property == "Price")
          break;
          }
          thead.appendChild(row_2);
  
        }


         

       
