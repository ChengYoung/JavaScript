/* var message;
var age = null;
alert(typeof message);
alert(typeof null);
alert(message == age); */
// var num = 10.0;
// alert(parseInt("0xAF",16));
/* var num = 10;
alert(num.toString());
alert(num.toString(2));
alert(num.toString(8));
alert(num.toString(16)); */
/* var num = NaN;
alert(num.toString()); */
// var num = -64;
// alert("5" === 5);
/* var num1 = 6;
var num2 = 7;
var num = (num1 <= num2) ? num1:num2;
alert(num); */
/* var num = 0;
for(var i = 1;i < 10;i++){
    if(i % 5== 0){
        continue;
    }
    num++;
}

alert(num);
 */
/* function sum(num1,num2){
    ss = arguments[0]+arguments[1];
    alert(ss);
    alert(num1 + num2);
}
sum(2,3); */
/* function setName(obj){
    obj.name = "Cheng";
    obj = new Object();
    obj.name = "Qian";
}

var person = new Object();
setName(person);
alert(person.name);
alert(person instanceof Object); */
/* 
function displayInfo(args){
    var output = "";
    if(typeof args.name =="string"){
        output += "Name:"+ args.name +"\n";
    }

    if (typeof args.age == "number"){
        output +="Age:" +args.age + "\n"; 
    }

    alert(output);
}

displayInfo({
    name:"Nicholas",
    age:29
});

displayInfo({
    name:"Greg"
}); */

// var colors = new Array();
// var colors = ["red","blur","green"];
// var names = [];
/* colors.length = 2;
alert(colors[2]); */
/* var colors =["red","blue","black"];
// alert(colors.toString());
// alert(colors.valueOf());
alert(colors.join("||"));


function compare(value1,value2){
    return value2 - value1; 
} */
/* function panduan(item,index,array){
    return (item > 2);
}
var num = [1,2,3,4,5,7,6,8,9];
var result = num.every(panduan);
alert(result);

var result2 = num.some(panduan);
alert(result2); */

/* var numbers = [1,2,3,4,5,6,7,8,9];
numbers.forEach(function(item,index,array){
    //
});

reduce(){
    alert (yyyy-mm-ss )
}

map(){

} */

/* var values = [1,2,3,4,5];
var sum = values.reduce(function(prev,cur,index,array){
    return prev + cur;
})
alert(sum); */

/* var color = "blue";

function changecolor(){
    if (color == "blue"){
        color = "red";
    }
    else{
        color = "green";
    }
}

changecolor();
alert(color); */

function createPerson(name){
    var location = new Object();
    location.name = name;
    return location;
}
var globalPerson = createPerson("Cheng");
alert(globalPerson.name);