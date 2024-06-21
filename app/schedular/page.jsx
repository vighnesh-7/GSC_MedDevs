import { currentUser } from "@clerk/nextjs";
import Scheduler from "../../components/Scheduler";
import { Suspense } from "react";
import Loading from "../../components/loading";

const Schedular = async () => {
  const user = await currentUser();

  return (
    <div className="my-16 max-sm:px-4 sm:w-3/5 mx-auto ">
      <Suspense fallback={<Loading/>}>
        <Scheduler username={user.username} />
      </Suspense>
    </div>
  );
};

export default Schedular;
