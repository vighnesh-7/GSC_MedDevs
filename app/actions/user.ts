import { db } from "../../lib/db"

export const createUser = async (user: {
  username: string;
  firstName: string;
  lastName?: string;
  email: string;
  image?: string;
  phoneNumber?: string;
  emailVerified?: boolean;
  phoneNumberVerified?: boolean;
  banned?: boolean;
}) => {
  const existingUser = await db.user.findUnique({
    where: {
      username: user.username,
    },
  });

  if (existingUser) {
    throw new Error(`User with username '${user.username}' already exists.`);
  }
  const newUser = await db.user.create({
    data: {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email.toLowerCase(),
      image: user.image,
      phoneNumber: user.phoneNumber,
      emailVerified: user.emailVerified,
      phoneNumberVerified: user.phoneNumberVerified,
      banned: user.banned,
    },
  });

  return newUser;
};
