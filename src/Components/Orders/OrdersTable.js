import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import useTableCheck from '../CustomHook/useTableCheck';
import { LOAD_ORDERS, LOAD_ORDERS_ASC, LOAD_ORDERS_BYID } from "../../GraphQL/Queries";
import Order from "./Order";
import search from '../../assets/images/icons/search-icon.svg';
import reset from '../../assets/images/icons/reset-btn.svg';
import download from '../../assets/images/icons/download-btn.svg';
import CsvDownload from 'react-json-to-csv'
const OrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showMore, setShowMore] = useState(9);
  const [loadQuery, setLoadQuery] = useState(LOAD_ORDERS)
  const [orders, setOrders] = useState([]);
  const { loading, error, data } = useQuery(loadQuery);
  const { data: variabledata } = useQuery(LOAD_ORDERS_BYID, { variables: { orderId: searchTerm } });
  const { inputRef, handleCheck } = useTableCheck();

  useEffect(() => {
    if (data) {
      setOrders(data.offer_trade)
    }
  }, [data]);
  useEffect(() => {
    if (variabledata) {
      setOrders(variabledata.offer_trade)
    }
  }, [variabledata]);
  const handleChange = (e) => {
    if (e.target.value === "oldest") {
      setLoadQuery(LOAD_ORDERS_ASC)
    } else {
      setLoadQuery(LOAD_ORDERS)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(document.getElementById("search1").value)
    document.getElementById("search1").value = ""
  }
  console.log(orders)
  return (
    <>
      <div className="option-bar">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-3">
            <div className="title">
              <h2>orders</h2>
              <span>({orders.length})</span>
            </div>
          </div>
          <div className="col-xl-7 col-lg-9 mt-lg-0 mt-4">
            <ul className="options-list">
              <li className="mb-sm-0 mb-3">
                <form className="search-form">
                  <input type="text" className="form-control" id="search1" placeholder="Search orders.." />
                  <button className="btn" type="submit" onClick={handleSubmit}>
                    <img src={search} className="img-fluid" alt="" />
                  </button>
                </form>
              </li>
              <li>
                <div className="short-btn">
                  <div className="btn-text">
                    <span>Sort by: </span>  <select onChange={handleChange}>
                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                      <option value="need-track">Need Track</option>
                      <option value="en-route">En Route</option>
                    </select>
                  </div>
                </div>
              </li>
              {/* <li>
                <button className="btn reset-btn" type="reset">
                  <img src={reset} className="" alt="" />
                </button>
              </li> */}
              <li>
                <CsvDownload data={orders} className="btn download-btn" >
                  <img src={download} className="" alt="" />
                </CsvDownload>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="theme-card">
        <div className="table-responsive">
          <table className="order-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" className="check-all" onClick={handleCheck} ref={inputRef} />
                  <label></label>
                </th>
                <th>#Order ID</th>
                <th>Trade ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Tracking ID</th>
                <th>Status</th>
                <th>Price</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, showMore).map((order, i) => <Order key={i} order={order} />)}
            </tbody>
          </table>
        </div>
        <div className="load-more text-center">
          {showMore === 9 ? <a href="#0" onClick={(e) => {
            e.preventDefault();
            setShowMore(orders.length);
          }}>Load More</a> :
            <a href="#0" onClick={(e) => {
              e.preventDefault();
              setShowMore(9);
            }}>Show Less</a>}
        </div>
      </div>
    </>
  )
}

export default OrdersTable;
