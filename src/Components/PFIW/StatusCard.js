import pfiw1 from '../../assets/images/icons/pfiw/1.svg';
import pfiw2 from '../../assets/images/icons/pfiw/2.svg';
import pfiw3 from '../../assets/images/icons/pfiw/3.svg';
import pfiw4 from '../../assets/images/icons/pfiw/4.svg';

const StatusCard = () => {
  return (
    <div className="pfiw-status">
      <div className="row">

        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
          <div className="theme-card pfiw-card">
            <div className="icon icon-primary">
              <img src={pfiw1} className="img-fluid" alt="" />
            </div>
            <div className="content content-primary">
              <span>UNRESOLVED</span>
              <p>60</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
          <div className="theme-card pfiw-card">
            <div className="icon icon-info">
              <img src={pfiw2} className="img-fluid" alt="" />
            </div>
            <div className="content content-info">
              <span>Open</span>
              <p>12</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
          <div className="theme-card pfiw-card">
            <div className="icon icon-success">
              <img src={pfiw3} className="img-fluid" alt="" />
            </div>
            <div className="content content-success">
              <span>Resolved</span>
              <p>32</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
          <div className="theme-card pfiw-card">
            <div className="icon icon-danger">
              <img src={pfiw4} className="img-fluid" alt="" />
            </div>
            <div className="content content-danger">
              <span>Failed</span>
              <p>04</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StatusCard;
