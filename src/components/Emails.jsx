import Email from "./Email"
import EmailView from "./EmailView"
import "../styles/App.css"

function Emails({ emails, toggleRead, toggleStar, selectedEmail, onSelectEmail, onBack }) {
  if (selectedEmail) {
    return <EmailView email={selectedEmail} onBack={onBack} />
  }

  return (
    <main className="emails">
      <ul>
        {emails.map((email) => (
          <Email
            key={email.id}
            email={email}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
            onSelect={onSelectEmail}
          />
        ))}
      </ul>
    </main>
  )
}

export default Emails 