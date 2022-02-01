
const Tasks = () => {

  return (
    <div className="col-md-12">
      <div className="theme-card task-card">
        <div className="task-card-header">
          <h4>Tasks</h4>
          <a href="void:;">View all</a>
        </div>
        <span className="task-day">Today</span>
        <div className="task-area">
          <form>
            <div className="create-task">
              <input type="text" placeholder="Create new task" className="form-control" />
              <button className="btn"><i className="bi bi-plus"></i></button>
            </div>
            <div className="task-list">

              <div className="list">
                <div className="left">
                  <input type="checkbox" id="list1" />
                  <label htmlFor="list1">Finish ticket update</label>
                </div>
                <div className="right">
                  <span className="badge urgent-badge">Urgent</span>
                </div>
              </div>

              <div className="list">
                <div className="left">
                  <input type="checkbox" id="list2" />
                  <label htmlFor="list2">Create new ticket example</label>
                </div>
                <div className="right">
                  <span className="badge new-badge">New</span>
                </div>
              </div>

              <div className="list">
                <div className="left">
                  <input type="checkbox" id="list3" />
                  <label htmlFor="list3">Update ticket report</label>
                </div>
                <div className="right">
                  <span className="badge default-badge">Default</span>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Tasks;
