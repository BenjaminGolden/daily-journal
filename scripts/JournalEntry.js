export const JournalEntryComponent = (entryObj) => {       //exporting the result of calling the JournalEntryComponent function with the parameter of (entry), which renders html on the DOM. 
    return `
    <section class="">
      <header>
          <h2 class="">Concept: ${entryObj.concept}</h2>
      </header>
      <div>User Id: ${entryObj.id}</div>
      <p>Mood: ${entryObj.mood}</p>
      <p>Date: ${entryObj.date}</p>
      <p>Entry: ${entryObj.journalEntry}</p>
    </section>
  `
};