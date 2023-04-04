//**************UNTOUCHED FROM SAVED FILE************

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let done = document.querySelectorAll("li"); //gets all lis


function inputLength() {return input.value.length;}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	})
	let buttonDelete = document.createElement("button");
	//name button...what text in the button
	buttonDelete.appendChild(document.createTextNode("Delete"));
	//append to the original li of the list
	li.appendChild(buttonDelete);
	//add event listener
	buttonDelete.addEventListener("click", function() {
		//find out how to delete a li using dom
		li.remove();
	})
	input.value = ""; }


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();}
}
function deleteTheLi() {
	console.log("delete test")
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//**************MY CODE************

done.forEach(function(li, i) {
	// console.log("for each li", li)
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	})
			//make a button
	let buttonDelete = document.createElement("button");
	//name button...what text in the button
	buttonDelete.appendChild(document.createTextNode("Delete"));
	//append to the original li of the list
	li.appendChild(buttonDelete);
	//add event listener
	buttonDelete.addEventListener("click", function() {
		//find out how to delete a li using dom
		li.remove();
	})
	// console.log(buttonDelete)
	
})

// done.forEach(function(liDelete, i) {
// 	//make a button
// 	let buttonDelete = document.createElement("button");
// 	//name button...what text in the button
// 	buttonDelete.appendChild(document.createTextNode("Delete"));
// 	//append to the original li of the list
// 	liDelete.appendChild(buttonDelete);
// 	//add event listener
// 	buttonDelete.addEventListener("click", deleteTheLi)
// 	console.log(buttonDelete)
// })

///********************WRONG*******************

// let done = document.querySelectorAll("li"); //gets all lis
//tried making into a normal array when I noticed querySelectorAll("li") produces a nodeList
// let doneArray = Array.from(done);
// console.log("done", done)
// console.log("doneArray", doneArray)

// function toggleDoneAfterClick() {	
// doneArray[1].classList.toggle("done");
// console.log("strike2")
// }

// function toggleDoneAfterClick() {
// 	doneArray.forEach(function(li) {
// 		li.classList.toggle("done")
// 		console.log("strike3")
// 	})
// }
// callback function does not work because each li needs event listener and each li need toggle
// so both event listener and toggle need to be in forEach

// doneArray.addEventListener("click", toggleDoneAfterClick);

// document.querySelector("li").classList.toggle("done");