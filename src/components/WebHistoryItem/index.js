import './index.css'

const WebHistoryItem = props => {
  const {historyDetails, deleteWebHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    deleteWebHistory(id)
  }

  return (
    <li className="history-item">
      <div className="hist-container">
        <p className="time-accessed">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="history-image" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>

      <div>
        <button type="button" onClick={onDeleteHistory} className="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default WebHistoryItem
