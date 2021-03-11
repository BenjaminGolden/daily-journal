export const NavBar = () => {
    return `
        <nav class="navigation">
            <div class="navigation__item navigation__icon">
                <img src="./images/brain.png" alt="brains" />
            </div>
            <div class="navigation__item navigation__name">
                The Golden Journal
            </div>
            <div class="navigation__item navigation__search">
                <input type="text" id="journalSearch" placeholder="Search entries..." />
            </div>
            <div class="navigation__item navigation__message">
                <img id="directMessageIcon" src="" alt="" />
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logout" class="fakeLink">Logout</button>
            </div>
        </nav>
    `
}