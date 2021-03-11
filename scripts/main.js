import { EntryListComponent } from './JournalEntryList.js';
import { getEntry, useEntryCollection, createEntry } from "./DataManager.js"
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
//attempting to track any click on main
applicationElement.addEventListener("click", (event) =>{
    if(event.target.id === ""){
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

//logout button listener
applicationElement.addEventListener("click", event =>{
    if(event.target.id === "logout"){
        console.log("Bye 'Felicia!")
    }
})

//edit button listener...the id returns undefined...
applicationElement.addEventListener("click", event =>{
    if(event.target.id.startsWith ("edit")){
        console.log("entry clicked", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
    }
})
        
    const showFilteredEntries = (year) => {
        //get a copy of the post collection
        const epoch = Date.parse(`01/01/${year}`);
        console.log(epoch);
        //filter the data
        debugger
        const dataArray = useEntryCollection()
        const filteredData = dataArray.filter(singleEntry => {
        if (singleEntry.timestamp >= epoch) {
            return singleEntry
        }
     });
        const entryElement = document.querySelector(".entryList");
        entryElement.innerHTML = EntryListComponent(filteredData);
    }

applicationElement.addEventListener("change", event => {
  if (event.target.id === "yearSelection") {
    const yearAsNumber = parseInt(event.target.value)
    console.log(`User wants to see posts since ${yearAsNumber}`)
    //invoke a filter function passing the year as an argument
    showFilteredEntries(yearAsNumber);
  }
})



applicationElement.addEventListener("click", event => {
    event.preventDefault();//means don't refresh the page
    if (event.target.id === "newPost__submit") {
    //collect the input values into an object to post to the DB
      const title = document.querySelector("input[name='postTitle']").value
      const url = document.querySelector("input[name='postURL']").value
      const description = document.querySelector("textarea[name='postDescription']").value
      //we have not created a user yet - for now, we will hard code `1`.
      //we can add the current time as well
      const postObject = {
          title: title,
          imageURL: url,
          description: description,
          userId: getLoggedInUser().id,
          timestamp: Date.now()
      }
  
    // be sure to import from the DataManager
        createPost(postObject)
        .then(response => {
            console.log("what is the new post", response);
            showPostList();
        })
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

