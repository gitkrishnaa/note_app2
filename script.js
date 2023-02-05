let inp1=document.getElementById("input");
let btn1=document.getElementById("btn1");
let display=document.getElementById('display')
let data=[];

// try- cursor in irect to input field
inp1.addEventListener("load",(e)=>{
  console.log(e.target.selectionStart)
  console.log("input has loaded")
})
// console.log(e.target.selectionStart,"jj")df







btn1.addEventListener("click",()=>{

  let inp2=inp1.value
 
let div1=document.createElement("div");
display.appendChild(div1)












let in_value=document.createElement("p");
div1.appendChild(in_value)
data.push(inp1.value);
in_value.innerText=data[data.length-1]

div1.id="D" + (data.length-1)
in_value.id="h"+(data.length-1)
console.log(div1.id)
console.log(data)


let delete1=document.createElement("button");
div1.appendChild(delete1)
delete1.innerText="Delete"
delete1.addEventListener("click",(e)=>{


console.log(e.target.id.slice(1))
//deleting div of this button
document.getElementById("D"+e.target.id.slice(1)).remove()



})
delete1.id="b"+(data.length-1);


let edit1=document.createElement("button");
div1.appendChild(edit1)
edit1.innerText="Edit"
edit1.id="e"+(data.length-1);
inp1.value="";
edit1.addEventListener("click",(e)=>{
  let edit_item=document.getElementById("h"+e.target.id.slice(1))
 
 
if(edit1.innerText=="Done"){
  edit1.innerText="Edit"
  edit_item.setAttribute("contentEditable","false");
  edit_item.style.border="none"
}
else{
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