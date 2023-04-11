// Q1 
function add(x) {
    return function () {
        return x + 5;
    }
}
let addNumber = add(5)()
console.log(addNumber)

// Q2
let arr = ["apple", "mango", "orange", "banana", "pineapple", "strawberry"]
let SearchValue = prompt("Enter a Fruit which is present or not");
for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(SearchValue) !== -1) {
        console.log(true)
        break;
    }
    else {
        console.log(false)
        break;
    }
}

// Q3 
function para(str) {
    let para = document.getElementById('para');
    para.textContent = str;
}
let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
para(str)


// Q4 
function List(itemData) {
    let Items = document.getElementById('list');
    Items.textContent = itemData;
}
List("abc");


// Q5 
function BgColor(ref, color) {
    ref.style.backgroundColor = color;
}

let refernce = document.getElementById("text");
let bgcolor = "red";
BgColor(refernce, bgcolor)



// Q6 

function DataSaved(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
}
let keyObj = "Data"
let ObjData = { name: "Abc", age: 32 }
DataSaved(keyObj, ObjData)


// Q7

function retriveData(key) {
    let retriveData = localStorage.getItem(key)
    console.log(retriveData)
}
retriveData(keyObj);


// Q8 
function saveGet(obj) {
    localStorage.setItem("NewObj", JSON.stringify(obj))
    let retriveData = localStorage.getItem("NewObj")
    console.log(retriveData)
}
let newObj = { name: "xyz", age: 21 }

saveGet(newObj)







