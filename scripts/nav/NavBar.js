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
            <div> 
            <h3><b>Post Year:  </b></h3>
                <select id="yearSelection">
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                </select>
                <span id="postCount">0</span>
            </div>
            <div>
                <h3>Mood:</h3>
                <select id="moodSelection">
                    <option value="all entries">all entries</option>
                    <option value="happy">happy</option>
                    <option value="sad">sad</option>
                    <option value="confused">confused</option>
                    <option value="lost">lost</option>
                </select>
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logout" class="fakeLink">Logout</button>
            </div>
        </nav>
    `
}