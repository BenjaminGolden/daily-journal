import { EntryListComponent } from './JournalEntryList.js';
import { getEntry } from "./DataManager.js"
import { NavBar } from "./nav/NavBar.js"
import { Footer } from "./nav/Footer.js"


const applicationElement = document.querySelector(".dailyJournal");//application element stores the place on the dom we are listening.
//adding an event listener to the date box
applicationElement.addEventListener("change", event =>{
    if(event.target.id === "journalDate"){
        console.log("what day is it?")
    }
})

//adding an event listener to the mood box
applicationElement.addEventListener("change", event =>{
    if(event.target.id === "mood"){
        console.log("How ya feelin'?")
    }
})

//adding an event listener to the concepts box
applicationElement.addEventListener("click", event => {
    if (event.target.id === "concepts"){
        console.log("check out this concept")
    }
})

//adding an event listener to the journal entry box
applicationElement.addEventListener("click", event => {
    if (event.target.id === "jEntry"){
        console.log("whatcha thinkin'?")
    }
})
//attempting to track any click on main...Not Working...
applicationElement.addEventListener("click", (event) =>{
    if(event.target.id === "main"){
        console.log("clicked on main")
    }
})

//listening for record journal entry button
applicationElement.addEventListener("click", event =>{
    if(event.target.id === "recordEntry"){
        console.log("store my thoughts")
    }
})

//listening for entry search in nav bar
applicationElement.addEventListener("click", event =>{
    if(event.target.id === "journalSearch"){
        console.log("show me entries")
    }
})

//
applicationElement.addEventListener("click", event =>{
    if(event.target.id === "logout"){
        console.log("Bye 'Felicia!")
    }
})



const startDailyJournal = () => {
    const journalElement = document.querySelector(".journalList");//setting journalElement = to where I want to put the HTML on the Dom
	getEntry().then((entryData) => {//getEntry contains fetched data from json server. .then-uses the data stored in () 
    journalElement.innerHTML = EntryListComponent(entryData);//trying to grab the fetched data and display it through the HTML rep created in journalFetch
    //I am trying to set the information that I receive from the fetched data call equal to my HTML rep on the Dom.
    }) 
    
}

const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}

const showFooter = () => {
    const footerElement = document.querySelector("footer");
    footerElement.innerHTML = Footer();
}

startDailyJournal();
showNavBar();
showFooter();


// getUsers()
// .then(data => {
//     console.log("User Data", data)
// })

