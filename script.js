let inp1=document.getElementById("input");
let btn1=document.getElementById("btn1");
let display=document.getElementById('display')
let data=[];
// let data2=[1,2,3]

// let data3=JSON.stringify(data2)
// window.localStorage.setItem("value",data3)
// let data4=localStorage.getItem("value")
// console.log(JSON.parse(data4))
// let datax={s:"k"}
// datax.s.remove
// console.log(datax)

//creataing a function which stringify and parse the data to use in localhost;
function localstorage_output(key){
  if(localStorage.getItem(key)!=null&& typeof(localStorage.getItem(key))!="string"){
    return JSON.parse(localStorage.getItem(key))
  }
  else if(localStorage.getItem(key)!=null){
  return localStorage.getItem(key)
 }
  else if(localStorage.getItem(key)===null){
  return "key data is not persent"
 }
}

function localstorage_input(key,data){
  const data1=JSON.stringify(data)
 localStorage.setItem(key,data1)
 return localstorage_output(key)
}

// console.log(localstorage_input("a1","[4568]"))

// localStorage.setItem("key","jell")
// console.log(localstorage_output("value"))
// console.log(localStorage.getItem("key"))
// console.log(localstorage_output("key1"))
// console.log(typeof("hello"))
// try- cursor in irect to input field
inp1.addEventListener("load",(e)=>{
  console.log(e.target.selectionStart)
  console.log("input has loaded")
})
// console.log(e.target.selectionStart,"jj")df


// data feeder
//data inputing
function data_add(key,data){
  if(localStorage.getItem(key)!=null&&typeof(JSON.parse(localStorage.getItem(key)))!="string"){
  let previous_data_array=JSON.parse(localStorage.getItem(key));
  let new_data=previous_data_array.push(data)
  let new_data_json=JSON.stringify(previous_data_array)
  localStorage.setItem(key,new_data_json)
  // console.log(new_data,new_data_json,previous_data_array)
  }
  else if(localStorage.getItem(key)===null){
    localStorage.setItem(key,"[]");
    let previous_data_array=JSON.parse(localStorage.getItem(key));
  let new_data=previous_data_array.push(data)
  let new_data_json=JSON.stringify(previous_data_array)
  localStorage.setItem(key,new_data_json)
  }
}







function array_loader(data){
for(let a in data ){
loader()
}
}











btn1.addEventListener("click",function loader(data){


  //note  key for is val1
  const localstorage_key="val1"
  let inp2=inp1.value
 
let div1=document.createElement("div");
display.appendChild(div1)


data=JSON.parse(localStorage.getItem(localstorage_key))





console.log(data);



let in_value=document.createElement("p");
div1.appendChild(in_value)
data.push(inp1.value);
data_add("val1",inp1.value)
in_value.innerText=data[data.length-1]

div1.id="D" + (data.length-1)
in_value.id="h"+(data.length-1)
console.log(div1.id)
console.log(data)

/////// delete
//function to delet in local storage
function data_delete(index,key){
const data=JSON.parse(localStorage.getItem(key));
data[index]="null";
  localStorage.setItem(key,JSON.stringify(data))
}
////////////////////////////////////////////////////////
let delete1=document.createElement("button");
div1.appendChild(delete1)
delete1.innerText="Delete"
delete1.addEventListener("click",(e)=>{
let delete_id=e.target.id.slice(1);



data_delete(delete_id,"val1")


console.log(e.target.id.slice(1))
//deleting div of this button
document.getElementById("D"+e.target.id.slice(1)).remove()



})
delete1.id="b"+(data.length-1);
/////////////edit in local storage


function edit_data(index,data1,key){
 
  const data=JSON.parse(localStorage.getItem(key));
        data[index]=data1;
        localStorage.setItem(key,JSON.stringify(data))
    

}

let edit1=document.createElement("button");
div1.appendChild(edit1);
edit1.innerText="Edit"
edit1.id="e"+(data.length-1);
inp1.value="";
edit1.addEventListener("click",(e)=>{
  let edit_item=document.getElementById("h"+e.target.id.slice(1))
  let edit_id=e.target.id.slice(1);
 
if(edit1.innerText=="Done"){
  edit1.innerText="Edit"
  edit_item.setAttribute("contentEditable","false");
  edit_item.style.border="none"
}
else{
  edit_data(edit_data,edit_item.innerHTML,"val1")
  edit_item.setAttribute("contentEditable","true");
  edit_item.style.border="2px solid red";
  edit1.innerText="Done"
}



})

console.log(in_value.id,div1.id,edit1.id,delete1.id,)

})
/**
 * The toUpperCase() 

The toLocaleLowerCase() 

The toLocaleUpperCase() 
 * 
 * 
 */