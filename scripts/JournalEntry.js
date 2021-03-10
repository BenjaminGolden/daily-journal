export const JournalEntryComponent = (entryObj) => {       //exporting the result of calling the JournalEntryComponent function with the parameter of (entry), which renders html on the DOM. 
    return `
    <section class="">
      <header>
          <h2 class="">${entryObj.concept}</h2>
      </header>
      <div>${entryObj.id}</div>
      <p>${entryObj.mood}</p>
      <p>${entryObj.date}</p>
      <p>${entryObj.journalEntry}</p>
    </section>
  `
};