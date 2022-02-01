import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import useTableCheck from "../CustomHook/useTableCheck";
import { LOAD_PFIWS } from "../../GraphQL/Queries";
import PFIW from "./PFIW";

const PFIWTable = () => {
  const { loading, error, data } = useQuery(LOAD_PFIWS);
  const { inputRef, handleCheck } = useTableCheck();

  const [pfiws, setPfiws] = useState([])

  useEffect(() => {
    if (data) {
      setPfiws(data.offer_trade)
    }
  }, [data]);

  return (
    <>
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
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {pfiws.map((pfiw, i) => <PFIW key={i} pfiw={pfiw} />)}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default PFIWTable;
