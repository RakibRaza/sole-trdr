import EmailPlug from "../Components/PFIW/EmailPlug";
import PFIWTable from "../Components/PFIW/PFIWTable";
import PFIWTop from "../Components/PFIW/PFIWTop";
import StatusCard from "../Components/PFIW/StatusCard";
import Tasks from "../Components/PFIW/Tasks";

const PFIW = () => {
  return (
    <>
      <PFIWTop />
      <StatusCard />
      <PFIWTable />
      <div className="row">
        {/* <EmailPlug /> */}
        <Tasks />
      </div>
    </>
  )
}

export default PFIW;
