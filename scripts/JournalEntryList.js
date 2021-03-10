import { getJournalEntries } from "./JournalData.js"  //importing the getJournalEntries function from JournalData.js
import { JournalEntryComponent } from "./JournalEntry.js"  //importing the JournalEntryComponent function from JournalEntry.js
import { journalFetch } from "./Journal.js"

export const EntryListComponent = (allEntries) => {  //exporting the result of calling the function EntryListComponent
   
  //  const entries = getJournalEntries()     //saving the result of the getJournalEntries function to a new variable called entries
   // const entryLog = document.querySelector("#entryLog")    //document.querySelector is saying go to the document, "querySelector" means "go find this", at the location of #entryLog. 
    let journalHTML = "";                                                    //saving the result to a new variable called entryLog
    for (const entry of allEntries) {                          //for..of loop accessing the entries paramater of getJournalEntries by way of new variable entry.
      
        journalHTML += JournalEntryComponent(entry);    //.innerhtml is going to put the desired information between the opening and closing element tags of entryLog.
                                                               //which will then be added on to the JournalEntryComponent(entry);
        
    }
    return journalHTML;
};



export const journalList = (allEntries) => {
    let journalHTML = "";
    for (const fetchObj of allEntries){
        journalHTML += journalFetch(fetchObj)
    }
    return journalHTML;
}