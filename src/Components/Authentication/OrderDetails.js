import { useState } from "react";
import { Modal } from "react-bootstrap";

import fileuplod from '../../assets/images/fileuplod.png';

const OrderDetails = ({ show, handleClose, auth }) => {
  const { offer_id, trade_id, trade, offer: { offer_payment_authentications } } = auth;
  const [showIssue, setShowIssue] = useState(false);
  const handleCheck = (e) => {
    e.preventDefault();
    const checkBox = document.getElementsByClassName("quality-checkmark");
    const allCheckBox = [...checkBox];

    allCheckBox.forEach(i => i.checked = true);

  }
  return (
    <Modal show={show} onHide={handleClose} className="details-modal" dialogClassName="modal-dialog-centered modal-lg">
      <Modal.Header>
        <div className="header-left">
          <p>Orders <span>/ Order Details</span></p>
          <h2>Order {offer_id}</h2>
          <span>Trade ID : {trade_id}</span>
        </div>
        <div className="header-right">
          <button type="button" className="btn-close" onClick={handleClose} ></button>
          <input className="tracking-id" type="text" />
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="product-details-area">
          <div className="product-details">
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="product-img">
                  <img src={trade.sneaker.thumb_url} className="img-fluid"
                    alt="Nike Air Max 2021" />
                </div>
              </div>
              <div className="col-md-9 col-sm-8">
                <div className="product-details-info">
                  <div className="title">
                    <h3>{trade.sneaker.name}</h3>
                    {/* <span className="price">$320</span> */}
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
                          <li>SKU : {trade.sneaker.style_id}</li>
                          <li>UPC : 85176738342</li>
                        </ul>
                      </div>
                      <div className="col-md-4 mt-md-0 mt-4">
                        {/* <p className="receive-amount">Receives: $20</p> */}
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
                      <p>Customer Address</p>
                      <h5>{trade.user.user_addresses[0].city} {trade.user.user_addresses[0].country} || {trade.user.user_addresses[0].state} {trade.user.user_addresses[0].zipcode}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="quality-control-area">
          <div className="row">
            <div className="col-md-6 col-sm-6 mb-sm-0 mb-4">
              <div className="row mb-4">
                <div className="col-md-6 mb-md-0 mb-2">
                  <h4>Authentication</h4>
                </div>
                <div className="col-md-6">
                  <a href="#" onClick={handleCheck} className="all-mark">Mark All</a>
                </div>
              </div>
              <div className="row">

                <div className="col-md-6 mb-md-0 mb-3">
                  <ul>
                    <li>
                      <label htmlFor="quality-checkmark1">
                        <input type="checkbox" id="quality-checkmark1" className="quality-checkmark" defaultChecked={offer_payment_authentications[0].qc_color_shape ? true : false} />
                        Color & Shape
                      </label>
                    </li>
                    <li>
                      <label htmlFor="quality-checkmark2">
                        <input type="checkbox" id="quality-checkmark2" className="quality-checkmark" defaultChecked={offer_payment_authentications[0].qc_material ? true : false} />
                        Material
                      </label>
                    </li>
                    <li>
                      <label htmlFor="quality-checkmark3">
                        <input type="checkbox" id="quality-checkmark3" className="quality-checkmark" defaultChecked={offer_payment_authentications[0].qc_stitching ? true : false} />
                        Stitching
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6">
                  <ul>
                    <li>
                      <label htmlFor="quality-checkmark4">
                        <input type="checkbox" id="quality-checkmark4" className="quality-checkmark" defaultChecked={offer_payment_authentications[0].qc_sole ? true : false} />
                        Sole
                      </label>
                    </li>
                    <li>
                      <label htmlFor="quality-checkmark5">
                        <input type="checkbox" id="quality-checkmark5" className="quality-checkmark" defaultChecked={offer_payment_authentications[0].qc_box_label ? true : false} />
                        Box Label
                      </label>
                    </li>
                    <li>
                      <label htmlFor="quality-checkmark6">
                        <input type="checkbox" id="quality-checkmark6" className="quality-checkmark" defaultChecked={offer_payment_authentications[0].qc_shoe_tag ? true : false} />
                        Shoe Tag
                      </label>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              {showIssue ? <div className="issue-details">
                <h4 className="mb-4">Issue Details</h4>
                <form>
                  <div className="row">
                    <div className="col-12">
                      <textarea className="form-control" rows="5" placeholder="Type here..."></textarea>
                    </div>
                  </div>
                  <div className="row justify-content-center mt-3">

                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                      <label htmlFor="image-upload1">
                        <input type="file" id="image-upload1" className="d-none" />
                        <img src={fileuplod} className="img-fluid" alt="" />
                      </label>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                      <label htmlFor="image-upload2">
                        <input type="file" id="image-upload2" className="d-none" />
                        <img src={fileuplod} className="img-fluid" alt="" />
                      </label>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                      <label htmlFor="image-upload3">
                        <input type="file" id="image-upload3" className="d-none" />
                        <img src={fileuplod} className="img-fluid" alt="" />
                      </label>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                      <label htmlFor="image-upload4">
                        <input type="file" id="image-upload4" className="d-none" />
                        <img src={fileuplod} className="img-fluid" alt="" />
                      </label>
                    </div>

                  </div>
                </form>
              </div> : <div className="quality-control-btn-group">
                <button className="btn btn-success">Pass</button>
                <button className="btn btn-danger">Fail</button>
                <button onClick={() => setShowIssue(true)} className="btn btn-warning">Issues</button>
              </div>}
            </div>
          </div>
        </div>
        {showIssue && <div className="buttons-area">
          <div className="row">
            <div className="col-sm-6 col-12 mb-sm-0 mb-3">
              <button onClick={handleClose} className="btn modal-close-btn">close</button>
            </div>
            <div className="col-sm-6 col-12">
              <button onClick={() => setShowIssue(false)} className="btn issue-btn">Submit Issue</button>
            </div>
          </div>
        </div>}
      </Modal.Body>
    </Modal>
  )
}

export default OrderDetails;
