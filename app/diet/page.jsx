import Head from 'next/head';
import Image from 'next/image';
import medicine_bot from '/public/assets/images/diet_bot.jpeg';

const DiseasePrescription = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Head>
                <title>Diet Precription</title>
            </Head>

            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md sm:max-w-lg">
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">Diet Precription Bot</h1>
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                    Our MedDevs Diet Precription Chatbot provides personalized suggestions and guidance for managing your health conditions.
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
                            href="https://mediafiles.botpress.cloud/ae1e43b4-aeb3-425a-a1de-5bd1ad34bfff/webchat/bot.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center bg-rose-600 p-4 rounded-xl text-white font-semibold block w-full sm:w-auto"
                        >
                            Visit our MedDevs Diet Precription Bot
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiseasePrescription;