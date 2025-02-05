function EmailView({ email, onBack }) {
  return (
    <div className="email-view">
      <button className="back-button" onClick={onBack}>
        ← Back to Inbox
      </button>
      <div className="email-details">
        <h2>{email.title}</h2>
        <div className="email-info">
          <span className="sender">From: {email.sender}</span>
          <span className="status">
            {email.starred && '⭐'} {email.read ? "Read" : "Unread"}
          </span>
        </div>
        <div className="email-content">
          <p>*super duper important email content*</p>
        </div>
      </div>
    </div>
  )
}

export default EmailView 