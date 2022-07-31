//Create a DOM form which consits of following details
//1.firstname
//2.lastname
//3.email
//4.phonenumber

var firstname = createlabel ("label", "for", "firstname", "firstname");
var b1=linebreak("br")
var inputfirstname=inputfield("input","type","firstname", "id", "firstname");
var b2=linebreak("br");
var lastname=createlabel ("label", "for", "lastname", "lastname");
var b3=linebreak("br")
var inputlastname=inputfield("input", "type", "lastname","id", "lastname");
var b4=linebreak("br");
var email= createlabel ("label", "for", "email", "email");
var b5=linebreak("br")
var inputemail=inputfield("input","type","email", "id", "email");
var b6=linebreak("br");
var phonenumber = createlabel ("label", "for", "phonenumber", "phonenumber");
var b7=linebreak("br")
var inputphonenumber=inputfield("input","type","phonenumber", "id", "phonenumber");
var b8=linebreak("br");

document.body.append (firstname,b1, inputfirstname,b2, lastname,b3,inputlastname,b4, email,b5,inputemail,b6,phonenumber,b7,inputphonenumber,b8);



//to create labels

function createlabel (tagname, attrname, attrvalue, content) {
     var element=document.createElement (tagname);
    element.setAttribute(attrname,attrvalue);
    element.innerHTML=content;
    return element;
}
//to create input 

function inputfield(tagname,attrname,attrvalue,attrnamel,attrvaluel){
var input=document.createElement(tagname);
input.setAttribute(attrname,attrvalue);
input.setAttribute(attrnamel,attrvaluel);
return input;
 }
//to create line breaks

function linebreak(breaker){
var b1=document.createElement(breaker);
return b1;
}