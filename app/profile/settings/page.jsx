import UserDashboard from "../../../components/UserDashboard";
import { currentUser } from "@clerk/nextjs";

const Profile = async () => {
  const user = await currentUser();

  const userInfo = {
    username: user?.username,
    firstName: user.firstName,
    lastName: user.lastName,
    image: user?.imageUrl,
    email: user.emailAddresses[0]?.emailAddress,
    phoneNumber: user?.phoneNumbers[0]?.phoneNumber,
    passwordEnabled: user?.passwordEnabled,
    banned: user?.banned,
    emailVerified: user?.emailAddresses[0]?.verification.status,
    phoneNumberVerified: user?.phoneNumbers[0]?.verification.status,
  };

  return (
    <div className="flex justify-between p-4 sm:p-8 md:p-12 lg:p-16">
      <UserDashboard myuser={userInfo} />
    </div>
  );
};

export default Profile;
