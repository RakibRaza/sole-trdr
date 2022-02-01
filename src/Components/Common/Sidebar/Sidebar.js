import logo from '../../../assets/images/logo.png';
import orderIcon from '../../../assets/images/icons/menu/order-icon.svg';
import receiveSquare from '../../../assets/images/icons/menu/receive-square.svg';
import shieldSecurity from '../../../assets/images/icons/menu/shield-security.svg';
import pfiw from '../../../assets/images/icons/menu/pfiw.svg';
import shipping from '../../../assets/images/icons/menu/shipping.svg';
import outbound from '../../../assets/images/icons/menu/outbound.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { LOAD_ORDERS } from '../../../GraphQL/Queries';
import { useEffect, useState } from 'react';
import { Accordion, Collapse } from 'react-bootstrap';

const links = [
  { id: 1, title: "orders", path: "/orders", img: orderIcon },
  { id: 2, title: "Received", path: "/received", img: receiveSquare },
  { id: 3, title: "Authentication", path: "/authentication", img: shieldSecurity },
  { id: 4, title: "PFIW", path: "/pfiw", img: pfiw },
  { id: 5, title: "Shipping", path: "/shipping", img: shipping },
  { id: 6, title: "Outbound", path: "/outbound", img: outbound },
]

const Sidebar = ({ sidebarOpen, handleSidebar }) => {
  let navigate = useNavigate();
  const { loading, error, data } = useQuery(LOAD_ORDERS);
  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState("")
  useEffect(() => {

    setIsClicked("0")

  }, [isClicked])
  return (
    <aside className={`sidebar ${sidebarOpen ? "sidebar-toggle" : ""}`}>
      <div className="theme-logo">
        <div onClick={handleSidebar} className="siderbar-close">
          <i className="bi bi-x-lg"></i>
        </div>
        <NavLink to="/orders">
          <img src={logo} className="img-fluid" alt="Logo" />
        </NavLink>
      </div>

      <p className="menu-title">Order Management</p>
      <ul id="metismenu" className="metismenu">
        <li className="mm-active">
          <NavLink to="/orders" className={({ isActive }) => isActive ? "active" : ""}>
            <span className="menu-item-icon">
              <img src={orderIcon} className="img-fluid item-icon" id="item-icon1" alt="order-icon" />
            </span>
            <span className="menu-item-title"> orders <span className="badge badge-danger">{data?.offer_trade?.length}</span></span>
          </NavLink>
        </li>
        <li className="mm-active">
          <NavLink to="/received" className={({ isActive }) => isActive ? "active" : ""}>
            <span className="menu-item-icon">
              <img src={receiveSquare} className="img-fluid item-icon" id="item-icon2" alt="receive-square" />
            </span>
            <span className="menu-item-title"> Received</span>
          </NavLink>
        </li>
        <li className="mm-active">
          <NavLink to="/authentication">
            <span className="menu-item-icon">
              <img src={shieldSecurity} className="img-fluid item-icon" id="item-icon3" alt="shield-security" />
            </span>
            <span className="menu-item-title"> Authentication</span>
          </NavLink>
        </li>
        <li className="mm-active">
          <NavLink to="/pfiw">
            <span className="menu-item-icon">
              <img src={pfiw} className="img-fluid item-icon" id="item-icon4" alt="pfiw" />
            </span>
            <span className="menu-item-title"> PFIW</span>
          </NavLink>
        </li>
        {/* <li className="mm-active" >
          <a href="#" onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}>

            <span className="menu-item-icon">
              <img src={shipping} className="img-fluid item-icon" id="item-icon5" alt="shipping" />
            </span>
            <span className="menu-item-title"> Shipping</span>
          </a>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <a href='#' onClick={(e) => {
                e.preventDefault();
                setIsClicked(true)
                navigate("/shipping/passed");
              }}> Passed</a>
              <NavLink to="/shipping"> Returned</NavLink>
            </div>
          </Collapse>
        </li> */}
        <li>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span className="menu-item-icon">
                  <img src={shipping} className="img-fluid item-icon" id="item-icon5" alt="shipping" />
                </span>
                <span className="menu-item-title"> Shipping</span>
              </Accordion.Header>
              <Accordion.Body>
                <NavLink to="/shipping/passed" className={({ isActive }) => isActive ? "active" : ""}> Passed </NavLink>
                <NavLink to="/shipping/returned" className={({ isActive }) => isActive ? "active" : ""}> Returned</NavLink>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </li>
        <li className="mm-active" >
          <NavLink to="/outbound">
            <span className="menu-item-icon">
              <img src={outbound} className="img-fluid item-icon" id="item-icon6" alt="outbound" />
            </span>
            <span className="menu-item-title"> Outbound</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
