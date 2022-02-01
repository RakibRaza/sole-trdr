import OrderDetails from './OrderDetails';
import useModal from '../CustomHook/useModal';
import dateFormate from '../Helpers/dateFormate';

const Auth = ({ auth }) => {
  const { offer_id, trade_id, trade, offer: { offer_payment_authentications } } = auth;
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
        <td><span className="auth-status" onClick={handleShow}>{trade.trade_status.title}</span></td>
        <td><span className="price">${offer_payment_authentications[0].offer_payment?.total_amount}</span></td>
      </tr>
      <OrderDetails show={show} handleClose={handleClose} auth={auth} />
    </>
  )
}

export default Auth;
