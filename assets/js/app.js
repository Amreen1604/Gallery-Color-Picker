//alert('hello');
"use strict";
let cl = console.log;
//title >> Gallary Color Picker


// 1.get element
const selectColor = document.getElementById('selectColor');
cl(selectColor);

const all = Array.from(document.querySelectorAll('.all'));
cl(all);


//if getting element by selecting ,using js
// const heading = document.getElementById('heading');
// cl('heading');

// cl(heading.innerText='pick the color from the list given below')
// cl(heading.style.border='2px solid #ffffff');
// cl(heading.style.color='#ffffff');
// cl(heading.style.padding='2px');
// cl(heading.style.textAlign='center');


// if we add the element by using prepend
const info = document.getElementById('info');
const addheadingElement = document.createElement('h3');


// let infotext = document.createTextNode('pick the color from the list given below'); 
// cl(infotext);
// addheadingElement.append(infotext);
//addheadingElement.innerHTML = 'infotext';                        //we can not add obj as an innerHTML or innerText
//info.prepend(addheadingElement);


addheadingElement.className='col-sm-12';
addheadingElement.id="heading";
addheadingElement.innerHTML='Pick the color from the list given below';
cl(addheadingElement);


info.prepend(addheadingElement);


//cl(addheadingElement.style.border='2px solid #ffffff');
cl(addheadingElement.style.color='#ffffff');
cl(addheadingElement.style.padding='2px'); //instead of this style property we added class below >> (can use any one either .style or .classList.add())
//cl(addheadingElement.style.textAlign='center');

// addheadingElement.classList.add('p-2'); // >> (can use any one either .style or .classList.add())



//2. function

// const onChangeColor = (eve)=> {
//     let getClass =  eve.target.value;       
//      // why using eve.target.value why not selectColor.value? >> bcz the declartion name selectColor may get change
//     cl(getClass); // here getting the value in string thats why we used "."
//     all.forEach(div => div.classList.add('d-none')); //dont know which color user will select thats why we add the class d-none & hide all the divs

//     let getdivs = Array.from(document.querySelectorAll("." + getClass));
//     getdivs.forEach(div => div.classList.remove('d-none')); // for displaying the particular selected value we remove the class d-none
   
// }

//3.bind event
// selectColor.addEventListener('change', onChangeColor);




//or

//2. function
const onChangeColor = eve => {
    let getClass = "." + eve.target.value;
    cl(getClass);

    all.forEach(div => div.classList.add('d-none'));

    let getdivs = [...document.querySelectorAll(getClass)];
    getdivs.forEach(div => div.classList.remove('d-none'));
    
}

//3.bind event
selectColor.addEventListener('change', onChangeColor);