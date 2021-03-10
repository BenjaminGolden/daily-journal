import { EntryListComponent } from './JournalEntryList.js';
import { getEntry } from "./DataManager.js"
import { NavBar } from "./nav/NavBar.js"
import { Footer } from "./nav/Footer.js"

const startDailyJournal = () => {
    const journalElement = document.querySelector(".journalList");//setting journalElement = to where I want to put the HTML on the Dom
	getEntry().then((entryData) => {//getEntry contains fetched data from json server. .then-uses the data stored in () 
    journalElement.innerHTML = EntryListComponent(entryData);//trying to grab the fetched data and display it through the HTML rep created in journalFetch
    //I am trying to set the information that I receive from the fetched data call equal to my HTML rep on the Dom.
    console.log(getEntry);
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

