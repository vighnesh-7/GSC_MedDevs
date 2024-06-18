
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import medicine_bot from '/public/assets/images/medicine_bot.jpeg'
import { GiMedicines } from "react-icons/gi";


const DiseasePrescription = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Head>
            <title>Disease Prescription</title>
        </Head>

        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Disease Prescription Bot</h1>
            <p className="text-lg text-gray-700 mb-6">
            Our MedDevs Medicine Chatbot provides personalized suggestions and guidance for managing your health conditions.
            </p>

            <div className="mb-6">
                <Image
                    src={medicine_bot}
                    alt="Medicine Chatbot"
                    width={400}
                    height={300}
                    className=' rounded-xl'
                />

            <div className="mt-5 mb-6  " >
                <button className=" text-center flex items-center justify-between bg-rose-600 p-4 rounded-xl text-white  font-semibold"  >
                    <a href="https://mediafiles.botpress.cloud/095c535a-391e-4084-a086-23352e919782/webchat/bot.html" target="_blank" rel="noopener noreferrer">Visit our MedDevs medicine Bot</a>
                    <GiMedicines className='ms-2 w-5 h-5' />
                </button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default DiseasePrescription;
