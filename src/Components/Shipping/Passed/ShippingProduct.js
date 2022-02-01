import useModal from "../../CustomHook/useModal";
import dateFormate from "../../Helpers/dateFormate";
import ShippingDetails from "./ShippingDetails";

const ShippingProduct = ({ product }) => {
  const { offer_id, trade_id, trade } = product;
  const { show, handleClose, handleShow } = useModal();

  return (
    <>
      <tr onClick={handleShow}>
        <td>
          <input type="checkbox" className="table-check" />
          <label></label>
        </td>
        <td><span className="order-id">{offer_id}</span></td>
        <td><span className="tread-id">{trade_id}</span></td>
        <td><span className="order-date">{dateFormate(trade.created_at)}</span></td>
        <td>{trade.user.name}</td>
        <td><span className="price">{trade.sneaker.retail_price}</span></td>
        <td><span className="status-warning">{trade.trade_status.title}</span></td>
      </tr>

      <ShippingDetails show={show} handleClose={handleClose} product={product} />
    </>
  )
}

export default ShippingProduct;
