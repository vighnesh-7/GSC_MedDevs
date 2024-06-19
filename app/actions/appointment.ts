import { db } from "../../lib/db";


export const createAppointment = async ({userId , diagnosis, category, date, priority, notes, status } :{
    userId: string,
    diagnosis: string,
    category: any,
    date: Date,
    priority: string,
    notes: string,
    status: any

}) => {
      try {
        const user = await db.user.findUnique({
          where: {
            id: userId,
          },
        });

        if (!user) {
          throw new Error("User not found");
        }

        const appointment = await db.scheduler.create({
          data: {
            userId: userId,
            diagnosis : diagnosis,
            category: category,
            date: date,
            priority: Number(priority),
            notes: notes,
            status: status,
          }
        });


        return appointment;
      } catch (error) {
        console.error("Error creating appointment:", error);
        throw error;
      }
}

export const getAppointments = async (userId: string) => {
  try {
    const appointments = await db.scheduler.findMany({
      where: {
        userId: userId,
      },
    });

    return appointments;
  } catch (error) {
    console.error("Error getting appointments:", error);
    throw error;
  }
};

export const deleteAppointment = async (id: string,userId : string) => {
  try {
    
    const appointment = await db.scheduler.delete({
      where: {
        id: id,
      },
    });

    if(!appointment){
      throw new Error("Appointment not found");
    }

    const appointments = await getAppointments(userId);
    
    return appointments;
  } catch (error) {
    console.error("Error deleting appointment:", error);
    throw error;
  }
};

export const updateAppointment = async ({id, userId, diagnosis, category, date, priority, notes, status } :{
  id: string,
  userId: string,
  diagnosis: string,
  category: any,
  date: Date,
  priority: string,
  notes: string,
  status: any
}) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const appointment = await db.scheduler.update({
      where: {
        id: id,
      },
      data: {
        category: category,
        date: date,
        diagnosis: diagnosis,
        priority: Number(priority),
        notes: notes,
        status: status,
      }
    });

    return appointment;
  } catch (error) {
    console.error("Error updating appointment:", error);
    throw error;
  }
};