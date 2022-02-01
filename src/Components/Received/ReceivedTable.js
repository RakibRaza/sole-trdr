import search from '../../assets/images/icons/search-icon.svg';
import reset from '../../assets/images/icons/reset-btn.svg';
import download from '../../assets/images/icons/download-btn.svg';
import CsvDownload from 'react-json-to-csv'
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import useTableCheck from '../CustomHook/useTableCheck';
import Receive from "./Receive";
import { LOAD_RECEIVES } from "../../GraphQL/Queries";

const ReceivedTable = () => {
  const { loading, error, data } = useQuery(LOAD_RECEIVES);
  const { inputRef, handleCheck } = useTableCheck();
  const [receives, setReceives] = useState([]);

  useEffect(() => {
    if (data) {
      setReceives(data.offer_trade)
    }
  }, [data]);

  return (
    <>
      <div className="option-bar">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-3">
            <div className="title">
              <h2>Received</h2>
              <span>({receives.length})</span>
            </div>
          </div>
          <div className="col-xl-7 col-lg-9 mt-lg-0 mt-4">
            <ul className="options-list">
              <li className="mb-sm-0 mb-3">
                <form className="search-form">
                  <input type="text" className="form-control" placeholder="Search orders.." />
                  <button className="btn" type="submit">
                    <img src={search} className="img-fluid" alt="" />
                  </button>
                </form>
              </li>
              <li>
                <div className="short-btn">
                  <div className="btn-text">
                    <span>Sort by: </span>  <select>
                      <option value="default">Default</option>
                      <option value="ascending">Ascending</option>
                      <option value="descending">Descending</option>
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
                <CsvDownload data={receives} className="btn download-btn" >
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
                <th>Status</th>
                <th>Price</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {receives.map((receive, i) => <Receive key={i} receive={receive} />)}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ReceivedTable;
