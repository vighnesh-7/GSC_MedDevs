import { db } from "../../lib/db";


export const createFaq = async (userId: string,username :string, userRole:any, q: string,a?:string) => {
  try {
    console.log("createFaq at faqs actions",userId,username, userRole, q,a);
    
    const faq = await db.faqs.create({
      data: {
        q: q,
        a: a,
        userId: userId,
        username : username,
        userRole : userRole
      }
    });


    return faq;
  } catch (error) {
    console.error("Error creating faq:", error);
    throw error;
  }
}