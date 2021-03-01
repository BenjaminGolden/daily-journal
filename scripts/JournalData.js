// Journal data for Daily Journal application
// *
// *      Holds the raw data about each entry and exports
// *      functions that other modules can use to filter
// *      the entries for different purposes.
// */

// This is the original data.
const journal = [
   {
       id: 1,
       date: "07/24/2025",
       concept: "HTML & CSS",
       entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
       mood: "Ok"
   },
   {
    id: 2,
    date: 02/25/21,
    concept: "javascript"
    entry: "we discussed functions and arrays and the corresponding syntax",
    mood: "lost" 
   },
   {
    id: 3,
    date: "02/26/21",
    concept: "further expanding on javascript"
    entry: "we explored the import and export elements of javascript",
    mood: "confused"
   },
   {
    id: 4,
    date: "02/28/21",
    concept: "daily journal",
    entry: "trying to catch up on my daily journal work",
    mood: "sad"
   }
];

/*
   You export a function that provides a version of the
   raw data in the format that you want
*/
export const getJournalEntries = () => {
   const sortedByDate = journal.sort(
       (currentEntry, nextEntry) =>
           Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
   )
   return sortedByDate
}