import "../styles/App.css"

function Navigation({ currentTab, setCurrentTab, hideRead, setHideRead, unreadCount, starredCount }) {
  return (

    <nav className="left-menu">
      <ul className="inbox-list">
        <li
          className={`item ${currentTab === "inbox" ? "active" : ""}`}
          onClick={() => setCurrentTab("inbox")}
        >
          <span className="label">Inbox</span>
          <span className="count">{unreadCount}</span>
        </li>
        <li
          className={`item ${currentTab === "starred" ? "active" : ""}`}
          onClick={() => setCurrentTab("starred")}
        >
          <span className="label">Starred</span>
          <span className="count">{starredCount}</span>
        </li>

        <li className="item toggle">
          <label htmlFor="hide-read">Hide read</label>
          <input
            id="hide-read"
            type="checkbox"
            checked={hideRead}
            onChange={e => setHideRead(e.target.checked)}
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation 