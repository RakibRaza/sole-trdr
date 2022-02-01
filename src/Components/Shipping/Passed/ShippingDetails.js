import { Modal } from "react-bootstrap";
import dateFormate from "../../Helpers/dateFormate";

const ShippingDetails = ({ show, handleClose, product }) => {
  const { offer_id, trade_id, trade, offer } = product;
  return (
    <Modal show={show} onHide={handleClose} className="details-modal" dialogClassName="modal-dialog-centered modal-lg">
      <Modal.Header>
        <div className="header-left">
          <p>Orders <span>/ Details</span></p>
          <h2>Order {offer_id}</h2>
          <span>Trade ID : {trade_id}</span>
        </div>
        <div className="header-right">
          <button type="button" className="btn-close" onClick={handleClose}></button>
          <input className="tracking-id" type="text" />
        </div>
      </Modal.Header>
      <Modal.Body>
        {offer.offer_trades.map(({ trade }, i) => {
          return (
            <div key={i} className="product-details-area">
              {i > 0 && (
                <div className="header-two">
                  <div className="header-left">
                    <h2>Order {offer_id}</h2>
                  </div>
                  <div className="header-right">
                    <input className="tracking-id" type="text" />
                  </div>
                </div>
              )}
              <div className="product-details">
                <div className="row">
                  <div className="col-md-3 col-sm-4">
                    <div className="product-img">
                      <img src={trade.sneaker.thumb_url} className="img-fluid" alt="Nike Air Max 2021" />
                    </div>
                  </div>
                  <div className="col-md-9 col-sm-8">
                    <div className="product-details-info">
                      <div className="title">
                        <h3>{trade.sneaker.name}</h3>
                        <span className="product-shipping-status">{trade.trade_status.title}</span>
                      </div>
                      <div className="product-info">
                        <div className="row">
                          <div className="col-md-4 col-sm-6">
                            <ul>
                              <li>Size : {trade.sneaker_size.title}</li>
                              <li>Condition : {trade.sneaker_condition.title}</li>
                            </ul>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <ul>
                              <li>SKU : 9256821912-FE</li>
                              <li>UPC : 85176738342</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="customer-info">
                      <div className="row">
                        <div className="col-sm-6 mb-sm-0 mb-4">
                          <p>Customer</p>
                          <h5>{trade.user.name}</h5>
                          <span>{trade.user.email}</span>
                        </div>
                        <div className="col-sm-6">
                          <p>Order Date</p>
                          <h5>{dateFormate(trade.created_at)}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="delevery-address">
                <div className="row align-items-center">
                  <div className="col-sm-2">
                    <div className="icon">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="content">
                      <span>Delivery Address</span>
                      <p>{trade.user.user_addresses[0].city} {trade.user.user_addresses[0].country} || {trade.user.user_addresses[0].state} {trade.user.user_addresses[0].zipcode}</p>
                      <a href="void:;">Edit Direction</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tags-traking">
                <div className="row">
                  <div className="col-sm-6 mb-sm-0 mb-3">
                    <p>Tracking Number</p>
                    <form>
                      <input type="text" placeholder="Eg. #29-90232311" className="form-control"
                        name="traking-number" />
                    </form>
                  </div>
                  <div className="col-sm-6">
                    <p>tags</p>
                    <span className="tag-list">
                      <a href="#" className="tag-color1">Florida</a>
                      <a href="#" className="tag-color2">Digital Accessories</a>
                      <a href="void:;" className="tag-add-btn"><i className="bi bi-plus"></i> New
                        tag</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="option-list">
                <div className="row">
                  <div className="col-md-6 mb-md-0 mb-3">
                    <ul>
                      <li>
                        <label htmlFor="quality-checkmark1_1">
                          <input type="checkbox" id="quality-checkmark1_1" className="quality-checkmark" defaultChecked />
                          Item Packing
                        </label>
                      </li>
                      <li>
                        <label htmlFor="quality-checkmark2_2">
                          <input type="checkbox" id="quality-checkmark2_2" className="quality-checkmark" defaultChecked />
                          Placed In Pickup
                        </label>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-6">
                    <ul>
                      <li>
                        <label htmlFor="quality-checkmark4_4">
                          <input type="checkbox" id="quality-checkmark4_4" className="quality-checkmark" defaultChecked />
                          Release Fund
                        </label>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          )
        })}
        <div className="buttons-area">
          <div className="row">
            <div className="col-sm-6 col-12 mb-sm-0 mb-3">
              <button className="btn modal-close-btn" onClick={handleClose}>close</button>
            </div>
            <div className="col-sm-6 col-12">
              <button className="btn issue-btn">Send to outbound</button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ShippingDetails;
