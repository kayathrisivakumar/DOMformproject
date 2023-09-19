var formsubmission = document.getElementById('formsubmission')
var fname = document.getElementById('fname')
var lname = document.getElementById('lname')
var address = document.getElementById('address')
var pincode = document.getElementById('pincode')
var state = document.getElementById('state')
var country = document.getElementById('country')

var fname1 = document.getElementById('fname1')
var lname1 = document.getElementById('lname1')
var address1 = document.getElementById('address1')
var pincode1 = document.getElementById('pincode1')
var state1 = document.getElementById('state1')
var country1 = document.getElementById('country1')
var form=document.getElementById('form')

var  displaytable=document.getElementById('displaytable')

formsubmission.addEventListener('click', (event) => {
    event.preventDefault();

    fname1.innerHTML = fname.value
    lname1.innerHTML = lname.value
    address1.innerHTML = address.value
    pincode1.innerHTML = pincode.value
    state1.innerHTML = state.value
    country1.innerHTML = country.value

    displaytable.style.display="block"
    form.reset()



})

var male = document.getElementById('male')
var female = document.getElementById('female')

male.addEventListener('click', () => {
    gender1.innerHTML = male.value
})

female.addEventListener('click', () => {
    gender1.innerHTML = female.value
})

var veg = document.getElementById('veg')
var Nonveg = document.getElementById('Nonveg')
var chinese = document.getElementById('chinese')
var continental = document.getElementById('continental')
var Japanese = document.getElementById('Japanese')

var food1=document.getElementById('food1')
var food2=document.getElementById('food2')
var food3=document.getElementById('food3')
var food4=document.getElementById('food4')
var food5=document.getElementById('food5')

veg.addEventListener("click", (event) => {

    console.log(event.srcElement.value)
   food1.innerHTML=event.srcElement.value
    
})

Nonveg.addEventListener("click", (event) => {

    console.log(event.srcElement.value)
    food2.innerHTML=event.srcElement.value

})
chinese.addEventListener("click", (event) => {

    console.log(event.srcElement.value)
    food3.innerHTML=event.srcElement.value

})
continental.addEventListener("click", (event) => {

    console.log(event.srcElement.value)
    food4.innerHTML=event.srcElement.value

})
Japanese.addEventListener("click", (event) => {

    console.log(event.srcElement.value)
    food5.innerHTML=event.srcElement.value

})

