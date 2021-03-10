import { EntryListComponent } from './JournalEntryList.js';
import { getEntry } from "./DataManager.js"
import { journalList } from "./JournalEntryList.js"

const startDailyJournal = () => {
    const journalElement = document.querySelector(".journalList");//setting journalElement = to where I want to put the HTML on the Dom
	getEntry().then((entryData) => {//getEntry contains fetched data from json server. .then-uses the data stored in () 
    journalElement.innerHTML = EntryListComponent(entryData);//trying to grab the fetched data and display it through the HTML rep created in journalFetch
    //I am trying to set the information that I receive from the fetched data call equal to my HTML rep on the Dom.
    console.log(getEntry);
    }) 
    
}


startDailyJournal();


// getUsers()
// .then(data => {
//     console.log("User Data", data)
// })

