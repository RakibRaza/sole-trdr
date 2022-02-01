import search from '../../../assets/images/icons/search-normal.svg';
import notification from '../../../assets/images/icons/notification.svg';
import view from '../../../assets/images/icons/fullscreen-view.svg';
import author from '../../../assets/images/author-image.png';
import { useEffect, useState } from 'react';
import { LOAD_NOTIFICATIONS } from '../../../GraphQL/Queries';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const Header = ({ handleSidebar }) => {
  const navigate = useNavigate()
  const { loading, error, data } = useQuery(LOAD_NOTIFICATIONS);
  const [showNotification, setShowNotification] = useState(false);
  const [notifications, setNotifications] = useState([])
  const handleNotification = () => {
    setShowNotification(!showNotification)
  }
  useEffect(() => {
    if (data) {
      setNotifications(data.notification)
    }
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = document.getElementById("search").value;
    document.getElementById("search").value = ""
    navigate(`/search/${search}`)
  }
  return (
    <header id="header">
      <div onClick={handleSidebar} className="menu-toggler">
        <i className="bi bi-filter"></i>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 order-md-0 order-1">
            <form className="order-search-form">
              <input type="text" className="form-control" id='search' placeholder="Search orders.." />
              <button type="submit" className="btn order-search-btn" onClick={handleSubmit}>
                <img src={search} className="img-fluid" alt="Search Icon" />
              </button>
            </form>
          </div>
          <div className="col-lg-6 col-md-6 mb-md-0 mb-4 order-md-0">
            <ul className="header-right">
              <li className="notification">
                <div onClick={handleNotification} className="notification-icon">
                  <img src={notification} className="img-fluid" alt="Notification Bell" />
                  <span className="notification-light"></span>
                  <div className={`notification-box ${showNotification ? "" : "toggled"}`}>
                    {notifications.map(({ id, title }) => {
                      return <p key={id}>{title}</p>
                    })}
                  </div>
                </div>

              </li>
              {/* <li className="fulllscreen-view">
                <img src={view} className="img-fluid" alt="" />
              </li> */}
              <li className="author-profile">
                <div className="author-info">
                  <div className="author-img">
                    <img src={author} className="img-fluid" alt="Author" />
                  </div>
                  <div className="author-info-content">
                    <p>Elvira Blair</p>
                    <span>Sales Manager</span>
                  </div>
                </div>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
