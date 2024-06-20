import Head from "next/head";
import Image from "next/image";
import medicine_bot from "/public/assets/images/medicine_bot.jpeg";
import { GiMedicines } from "react-icons/gi";

const DiseasePrescription = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Disease Prescription</title>
      </Head>

      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md sm:max-w-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
          Disease Prescription Bot
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          Our MedDevs Medicine Chatbot provides personalized suggestions and
          guidance for managing your health conditions.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <Image
            src={medicine_bot}
            alt="Medicine Chatbot"
            width={400}
            height={300}
            className="rounded-xl mb-4 w-full sm:w-auto"
          />

          <div className="mt-4 mb-6 w-full sm:w-auto">
            <a
              href="https://mediafiles.botpress.cloud/095c535a-391e-4084-a086-23352e919782/webchat/bot.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-rose-600 p-4 rounded-xl text-white font-semibold w-full sm:w-auto"
            >
              <span>Visit our MedDevs medicine Bot</span>
              <GiMedicines className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseasePrescription;
