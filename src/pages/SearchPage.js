import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTableCheck from "../Components/CustomHook/useTableCheck";
import SearchTable from "../Components/SearchPage/SearchTable";
import { LOAD_ORDERS_BYID } from "../GraphQL/Queries";

const SearchPage = () => {
  let params = useParams();
  const [orders, setOrders] = useState([]);
  const { inputRef, handleCheck } = useTableCheck();
  const { data } = useQuery(LOAD_ORDERS_BYID, { variables: { orderId: params.id } });

  useEffect(() => {
    if (data) {
      setOrders(data.offer_trade)
    }
  }, [data]);
  return (
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => <SearchTable key={i} order={order} />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SearchPage
