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
    <div
      style={{ display: "flex", justifyContent: "space-between", padding: 50 }}
    >
      <UserDashboard myuser={userInfo} />
    </div>
  );
};

export default Profile;
