import { currentUser } from "@clerk/nextjs";
import Scheduler from "../../components/Scheduler";
import { Suspense } from "react";
import Loading from "../../components/loading";

const Schedular = async () => {
  const user = await currentUser();

  return (
    <div className="my-16">
      <Suspense fallback={<Loading/>}>
        <Scheduler username={user.username} />
      </Suspense>
    </div>
  );
};

export default Schedular;
