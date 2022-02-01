import useModal from "../CustomHook/useModal";
import NeedQC from "./NeedQC";
import dateFormate from "../Helpers/dateFormate";

const Receive = ({ receive }) => {
  const { offer_id, trade_id, trade, offer: { offer_payment_receiveds } } = receive;
  const { show, handleClose, handleShow } = useModal();
  return (
    <>
      <tr>
        <td>
          <input type="checkbox" className="table-check" />
          <label></label>
        </td>
        <td><span className="order-id">{offer_id}</span></td>
        <td><span className="tread-id">{trade_id}</span></td>
        <td><span className="order-date">{dateFormate(trade.created_at)}</span></td>
        <td>{trade.user.name}</td>
        <td><span onClick={handleShow} className="status">{trade.trade_status.title}</span></td>
        <td><span className="price">${offer_payment_receiveds[0].offer_payment?.total_amount}</span></td>
        {/* <td>
          <ul className="d-flex justify-content-center table-action">
            <li><a href="void:;"><img src={deleteIcon} alt="delete icon" /></a>
            </li>
            <li><a href="void:;"><img src={dots} alt="dots" /></a></li>
          </ul>
        </td> */}
      </tr>
      <NeedQC show={show} handleClose={handleClose} receive={receive} />
    </>
  )
}

export default Receive;
