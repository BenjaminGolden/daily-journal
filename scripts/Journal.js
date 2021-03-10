export const journalFetch = (fetchObj) => {
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${fetchObj.concept}</h2>
        </header>
        <div>${fetchObj.id}</div>
        <p>${fetchObj.mood}</p>
        <p>${fetchObj.date}</p>
        <p>${fetchObj.journalEntry}</p>
      </section>
    `
  }