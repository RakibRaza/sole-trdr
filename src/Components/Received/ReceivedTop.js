import search from '../../assets/images/icons/search-icon.svg';
import reset from '../../assets/images/icons/reset-btn.svg';
import download from '../../assets/images/icons/download-btn.svg';

const ReceivedTop = () => {
  return (
    <div className="option-bar">
      <div className="row align-items-center">
        <div className="col-xl-5 col-lg-3">
          <div className="title">
            <h2>Received</h2>
            <span>(56)</span>
          </div>
        </div>
        <div className="col-xl-7 col-lg-9 mt-lg-0 mt-4">
          <ul className="options-list">
            <li className="mb-sm-0 mb-3">
              <form className="search-form">
                <input type="text" className="form-control" placeholder="Search orders.." />
                <button className="btn" type="submit">
                  <img src={search} className="img-fluid" alt="" />
                </button>
              </form>
            </li>
            <li>
              <div className="short-btn">
                <div className="btn-text">
                  <span>Sort by: </span>  <select>
                    <option value="default">Default</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </div>
            </li>
            <li>
              <button className="btn reset-btn" type="reset">
                <img src={reset} className="" alt="" />
              </button>
            </li>
            <li>
              <button className="btn download-btn">
                <img src={download} className="" alt="" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ReceivedTop
