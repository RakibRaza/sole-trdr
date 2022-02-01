import dateFormate from "../Helpers/dateFormate";
import deleteIcon from '../../assets/images/icons/delete-icon.svg';
import dots from '../../assets/images/icons/dots.svg';
import OrderOverview from "./OrderOverview";
import useModal from "../CustomHook/useModal";

const Order = ({ order }) => {
  const { offer_id, trade_id, trade, offer: { offer_payments } } = order;
  const { show, handleClose, handleShow } = useModal();
  return (
    <>
      <tr>
        <td>
          <input type="checkbox" className="table-check" />
          <label></label>
        </td>
        <td><span className="order-id" onClick={handleShow}>{offer_id}</span></td>
        <td><span className="tread-id">{trade_id}</span></td>
        <td><span className="order-date">{dateFormate(trade.created_at)}</span></td>
        <td>{trade.user.name}</td>
        <td>
          <input className="tracking-id" type="text" defaultValue={offer_payments[0]?.offer_tracking_status_id} />
          {/* <span className="tracking-id">UA-54982342-4</span> */}
        </td>
        <td><span className="status">{trade.trade_status.title}</span> </td>
        <td> {offer_payments[0] && <span className="price">${offer_payments[0].total_amount}</span>} </td>
        {/* <td>
          <ul className="d-flex justify-content-center table-action">
            <li><a href="void:;"><img src={deleteIcon} alt="delete icon" /></a>
            </li>
            <li><a href="void:;"><img src={dots} alt="dots" /></a></li>
          </ul>
        </td> */}
      </tr>
      <OrderOverview show={show} handleClose={handleClose} order={order} />
    </>
  )
}

export default Order;
