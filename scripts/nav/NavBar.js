export const NavBar = () => {
    return `
        <nav class="navigation">
            <div class="navigation__item navigation__icon">
                <img src="./images/pb.png" alt="" />
            </div>
            <div class="navigation__item navigation__name">
                JournalEntry
            </div>
            <div class="navigation__item navigation__search">
                <input type="text" id="postSearch" placeholder="Search posts..." />
            </div>
            <div class="navigation__item navigation__message">
                <img id="directMessageIcon" src="./images/fountain-pen.svg" alt="" />
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logout" class="fakeLink">Logout</button>
            </div>
        </nav>
    `
}