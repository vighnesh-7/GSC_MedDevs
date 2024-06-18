import { currentUser } from "@clerk/nextjs";
import Scheduler from "../../components/Scheduler";

const Schedular = async () => {

      const user = await currentUser();

    return ( 
        <div className="my-16">
            <Scheduler username = {user.username} />
        </div>
     );
}
 
export default Schedular;