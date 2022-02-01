import { Modal } from "react-bootstrap";

const OrderOverview = ({ show, handleClose, order }) => {
  const { offer_id, trade_id, trade, offer } = order;
  return (
    <Modal show={show} onHide={handleClose} className="details-modal" dialogClassName="modal-dialog-centered modal-lg">
      <Modal.Header>
        <div className="header-left">
          <p>Orders <span>/ Order Overview</span></p>
          <h2>Order {offer_id}</h2>
          <span>Trade ID : {trade_id}</span>
        </div>
        <div className="header-right">
          <button onClick={handleClose} type="button" className="btn-close"></button>
          <input className="tracking-id" type="text" />
        </div>
      </Modal.Header>
      <Modal.Body>
        {offer.offer_trades.map(({ trade }, i) => {
          return (
            <div key={i} className="product-details-area">
              {i > 0 && (<div className="order-id-area">
                <h2>Order {offer_id}</h2>
                <input className="tracking-id" type="text" />
              </div>)}

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
                        <span className="price">${trade.offer_trades[0].offer.offer_payments[0]?.total_amount}</span>
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
                            {offer.cash_add && <p className="receive-amount">Receives: {offer.cash_add}</p>}
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
              <div className="product-status">
                <h5>Product Status</h5>
                <ul className="status-title">
                  <li>Picked Up</li>
                  <li>En Route</li>
                  <li>Needs QC</li>
                  <li>Need Tracking</li>
                  <li>Issue Found</li>
                  <li>Ressolved</li>
                  <li>Waiting</li>
                </ul>
                <ul className="status-icon">
                  <li><i className="fa fa-check"></i></li>
                  <li><i className="fa fa-check"></i></li>
                  <li><i className="fa fa-check"></i></li>
                  <li><i className="fa fa-check"></i></li>
                  <li><i className="fa fa-check"></i></li>
                  <li><i className="fa fa-check"></i></li>
                  <li><i className="fa fa-circle"></i></li>
                </ul>
              </div>
            </div>
          )
        })}
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn delete-btn">delete</button>
        <button onClick={handleClose} type="button" className="btn close-btn">Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default OrderOverview;


const checkStatus = (status) => {
  let check;
  if (status == 'pickup') {
    check = <>
      <li><i className="fa fa-check"></i></li>
      <li><i className="fa fa-circle"></i></li>
      <li><i className="fa fa-circle"></i></li>
      <li><i className="fa fa-circle"></i></li>
      <li><i className="fa fa-circle"></i></li>
      <li><i className="fa fa-circle"></i></li>
      <li><i className="fa fa-circle"></i></li>
    </>
  }
  else if (status == 'en_route') {
    check = <>
      <li><i className="fa fa-check"></i></li>
      <li><i className="fa fa-check"></i></li>
      <li><i className="fa fa-circle"></i></li>
      <li><i className="fa fa-circle"></i></li>
      <li><i className="fa fa-circle"></i></li>
      <li><i className="fa fa-circle"></i></li>
      <li><i className="fa fa-circle"></i></li>
    </>
  }
  else if (status == 'needsqc') {
    check = <>
      <li><i className="fa fa-check"></i></li>
      <li><i className="fa fa-check"></i></li>
      <li><i className="fa fa-check"></i></li>
      <li><i className="fa fa-circle"></i></li>
      <li><i className="fa fa-circle"></i></li>
      <li><i className="fa fa-circle"></i></li>
      <li><i className="fa fa-circle"></i></li>
    </>
  }
  return check;
}
