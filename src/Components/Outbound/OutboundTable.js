import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { LOAD_OUTBOUNDS } from "../../GraphQL/Queries";

import useTableCheck from "../CustomHook/useTableCheck";
import OutboundProduct from "./OutboundProduct";
import search from '../../assets/images/icons/search-icon.svg';
import reset from '../../assets/images/icons/reset-btn.svg';
import download from '../../assets/images/icons/download-btn.svg';
import CsvDownload from 'react-json-to-csv'
const OutboundTable = () => {
  const { loading, error, data } = useQuery(LOAD_OUTBOUNDS);
  const { inputRef, handleCheck } = useTableCheck();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data.offer_trade)
    }
  }, [data]);
  return (
    <>
      <div className="option-bar">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-3">
            <div className="title">
              <h2>Outbound</h2>
              <span>({products.length})</span>
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
                      <option value="pickup">Pickup</option>
                      <option value="en-route">En Route</option>
                      <option value="Delivered">Delivered</option>
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
                <CsvDownload data={products} className="btn download-btn" >
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
                <th>Price</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => <OutboundProduct key={i} product={product} />)}
            </tbody>
          </table>
        </div>
      </div>


      <div className="buttons-area outbound-btns">
        <div className="row justify-content-end">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-sm-0 mb-3">
            <button className="btn close-btn">close</button>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <button className="btn send-btn">Confirm Delivery</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OutboundTable
