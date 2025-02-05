import { useState } from 'react'
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Emails from "./components/Emails"
import initialEmails from './data/emails'
import './styles/App.css'

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)
  if (currentTab === "starred") filteredEmails = getStarredEmails(filteredEmails)

  if (searchTerm) {
    filteredEmails = filteredEmails.filter(email => 
      email.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  const handleSelectEmail = email => {
    setSelectedEmail(email)
    if (!email.read) {
      const updatedEmails = emails.map(e =>
        e.id === email.id ? { ...e, read: true } : e
      )
      setEmails(updatedEmails)
    }
  }

  const handleBack = () => {
    setSelectedEmail(null)
  }

  return (
    <div className="app">
      <Header onSearch={setSearchTerm} />
      <Navigation
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
        unreadCount={unreadEmails.length}
        starredCount={starredEmails.length}
      />
      <Emails
        emails={filteredEmails}
        toggleRead={toggleRead}
        toggleStar={toggleStar}
        selectedEmail={selectedEmail}
        onSelectEmail={handleSelectEmail}
        onBack={handleBack}
      />
    </div>
  )
}

export default App
