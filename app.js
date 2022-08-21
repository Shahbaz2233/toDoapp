var getul = document.getElementById("ulData");
function addtodo(){
    var inpData = document.getElementById("inpData");
    // console.log(inpData);
    var liText = document.createTextNode(inpData.value);
    var heading = document.createElement("h3")
    heading.appendChild(liText);
    // console.log(heading);
    var createData = document.createElement("li");
       createData.appendChild(heading);
       getul.appendChild(createData);


var createBtn = document.createElement("button");
var addBtn = document.createTextNode("Edit");
createBtn.setAttribute("onclick","createFunction(this)")
createBtn.appendChild(addBtn);
createData.appendChild(createBtn);

console.log(createData);


var delBtn = document.createElement("button")
var btnTxt = document.createTextNode("Delete");
var addBtn = document.createTextNode("Edit");
delBtn.setAttribute("onclick","delFunction(this)")
delBtn.appendChild(btnTxt);
createData.appendChild(delBtn);

console.log(delBtn);



inpData.value = "";
} 
//edit button function
function createFunction(e){
    e.parentNode.firstChild.firstChild.nodeValue = prompt("Enter your value","abcd");
}

//del button function
function delFunction(e){
    e.parentNode.remove();

}