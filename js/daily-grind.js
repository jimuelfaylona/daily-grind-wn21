/*
Day of the Week - day
Coffee Name - name
Coffee Pic - pic
Alt Tag - alt
Coffee Description -desc
Color for Coffee - color
*/

let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('day')) {// use query string
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);
} else {// use date object
    myDay = myDate.getDay();
}

function coffeeTemplate(coffee) {
    let myReturn = "";

    myReturn = `
    <p>
    <img src="${coffee.pic}" alt="Our Pumpkin Spice Latte tastes great on a Fall Day!"
        id="coffee" />
    <strong id="coffee-highlight" class="feature">${coffee.day} Coffee Special:</strong> ${coffee.day} daily coffee special is <strong>${coffee.name}</strong>, ${coffee.desc}
    </p>`;

    return myReturn;
}

switch (myDay) {

    case 1:
        today = "Monday";
        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of a bubble tea",
            day: "Monday",
            desc: `I love bubble tea!`
        }
        break;

    case 2:
        today = "Tuesday";
        coffee = {
            color: "chocolate",
            name: "Frappuccino",
            pic: "images/frappaccino.jpg",
            alt: "A pic of a frappuccino",
            day: "Tuesday",
            desc: `Frappuccino for your basic peeps!`
        }
        break;

    case 3:
        today = "Wednesday";
        coffee = {
            color: "brown",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A pic of a drip coffee",
            day: "Wednesday",
            desc: `Some days you just need the drip!`
        }
        break;
    case 4:
        today = "Thursday";
        coffee = {
            color: "red",
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A pic of a pumpkin spice latte",
            day: "Thursday",
            desc: `It's Winter and it's pumpkin spice latte time!`
        }
        break;
    case 5:
        today = "Friday";
        coffee = {
            color: "blue",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A pic of a cold brew coffee",
            day: "Friday",
            desc: `It's the last day of the week! Drink some cold brew coffee to push through before the weekend!`
        }
        break;
    case 6:
        today = "Saturday";
        coffee = {
            color: "gray",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A pic of a mocha",
            day: "Saturday",
            desc: `Relax and drink some mocha!`
        }
        break;
    case 7:
        today = "Sunday";
        coffee = {
            color: "turquoise",
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A pic of a caramel-latte",
            day: "Sunday",
            desc: `End your week with a caramel latte before starting your new week!`
        }
        break;
}
console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;
//alert("Hi, it's " + today + ", I'm in another file now!");