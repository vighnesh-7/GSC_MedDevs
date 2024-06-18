import { db } from "../../lib/db";

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
    throw new Error("User already exists");
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

export const getUser = async (username: string) => {
  
  const user = await db.user.findUnique({
    where: {
      username: username,
    },
    
  });


  return user;
};


export const updateUser = async (user: {
  username: string;
  firstName: string;
  lastName?: string;
  phoneNumber?: string;
  diagnosis?: string;
  assignedDoctor?: string;
}) => {
  const existingUser = await db.user.findUnique({
    where: {
      username: user.username,
    },
  });

  if (!existingUser) {
    throw new Error("User does not exist");
  }

  const updatedUser = await db.user.update({
    where: {
      username: user.username,
    },
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      diagnosis: user.diagnosis,
      assignedDoctor: user.assignedDoctor,
    },
  });

  return updatedUser;
}

export const getAllUserSchedules = async (id: string) => {
  console.log(id, "id");
  
  
  const user = await db.user.findUnique({
    where: {
      id: id,
    },
    include: {
      userScheduler: true,
    },
  });


  
  
  return user?.userScheduler;
}