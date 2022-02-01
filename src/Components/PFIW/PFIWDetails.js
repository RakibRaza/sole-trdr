
import { Modal } from "react-bootstrap";
import fileupload from '../../assets/images/fileuplod.png';

const PFIWDetails = ({ show, handleClose, pfiw }) => {
  const { offer_id, trade_id, trade, offer } = pfiw;
  const handleSelect = (e) => {
    if (e.target.value === "resolved") {
      e.target.classList.add("green")
      console.log('hello')
    } else {
      e.target.classList.remove("green")
      console.log('hello2')
    }
  }
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
                    <h2>Order {trade.id}</h2>
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
                          <p>Customer Address</p>
                          <h5>{trade.user.user_addresses[0].city} {trade.user.user_addresses[0].country} || {trade.user.user_addresses[0].state} {trade.user.user_addresses[0].zipcode}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row product-details-status">
                <div className="col-md-6 mb-md-0 mb-4">
                  <div className="card product-status-card">
                    <div className="card-header">
                      <div className="row align-items-center">
                        <div className="col-lg-7 col-6">
                          <h5>Product Status</h5>
                        </div>
                        <div className="col-lg-5 col-6">
                          <select className={`resolved-status`} onChange={handleSelect}>
                            <option value="unresolved">unresolved</option>
                            <option value="resolved">resolved</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-6">
                          <ul>
                            <li>
                              <label htmlFor="quality-checkmark1_1">
                                <input type="checkbox" id="quality-checkmark1_1" className="quality-checkmark" defaultChecked />
                                Color & Shape
                              </label>
                            </li>
                            <li>
                              <label htmlFor="quality-checkmark2_2">
                                <input type="checkbox" id="quality-checkmark2_2" className="quality-checkmark" defaultChecked />
                                Material
                              </label>
                            </li>
                            <li>
                              <label htmlFor="quality-checkmark3_3">
                                <input type="checkbox" id="quality-checkmark3_3" className="quality-checkmark" defaultChecked />
                                Stitching
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6">
                          <ul>
                            <li>
                              <label htmlFor="quality-checkmark4_4">
                                <input type="checkbox" id="quality-checkmark4_4" className="quality-checkmark" defaultChecked />
                                Sole
                              </label>
                            </li>
                            <li>
                              <label htmlFor="quality-checkmark5_5">
                                <input type="checkbox" id="quality-checkmark5_5" className="quality-checkmark" defaultChecked />
                                Box Label
                              </label>
                            </li>
                            <li>
                              <label htmlFor="quality-checkmark6_6">
                                <input type="checkbox" id="quality-checkmark6_6" className="quality-checkmark" defaultChecked />
                                Shoe Tag
                              </label>
                            </li>
                          </ul>
                        </div>

                      </div>

                      <div className="row mt-3">
                        <div className="col-sm-6 mb-sm-0 mb-3">
                          <a href={`mailto:${trade.user.email}`} className="btn">Contact User</a>
                        </div>
                        <div className="col-sm-6">
                          <a href="https://dashboard.stripe.com/login" className="btn" target="_blank">Open Paypal</a>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card issue-details-card">
                    <div className="card-header">
                      <h5>Issue Details</h5>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-12">
                            <textarea className="form-control" rows="5" placeholder="Type here..."></textarea>
                          </div>
                        </div>
                        <div className="row justify-content-center mt-3">

                          <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                            <label htmlFor="image-upload">
                              <input type="file" id="image-upload" className="d-none" />
                              <img src={fileupload} className="img-fluid" alt="" />
                            </label>
                          </div>

                          <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                            <label htmlFor="image-upload2">
                              <input type="file" id="image-upload2" className="d-none" />
                              <img src={fileupload} className="img-fluid" alt="" />
                            </label>
                          </div>

                          <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                            <label htmlFor="image-upload3">
                              <input type="file" id="image-upload3" className="d-none" />
                              <img src={fileupload} className="img-fluid" alt="" />
                            </label>
                          </div>

                          <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                            <label htmlFor="image-upload4">
                              <input type="file" id="image-upload4" className="d-none" />
                              <img src={fileupload} className="img-fluid" alt="" />
                            </label>
                          </div>

                        </div>
                      </form>
                    </div>
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
              <button className="btn issue-btn">Save Changes</button>
            </div>
            <div className="col-sm-6 col-12 mb-sm-0 mb-3 mt-3">
              <button className="btn modal-close-btn">Send to Shipping "Pass"</button>
            </div>
            <div className="col-sm-6 col-12 mt-3">
              <button className="btn issue-btn">Send to Shipping "Return"</button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default PFIWDetails;