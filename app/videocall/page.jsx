import Link from "next/link";

const VideoCall = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Video Call with Your Doctor
      </h1>
      <div className="max-w-md">
        <p className="text-base sm:text-lg text-gray-700 mb-8 text-center font-semibold">
          Experience the convenience of virtual consultations. Video calls with
          your doctor allow for easy communication and access to medical advice
          from the comfort of your home.
        </p>
      </div>
      <Link href="https://localhost-agora.vercel.app/">
        <button className="py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md font-semibold animate-bounce">
          Go To Video Call
        </button>
      </Link>
    </div>
  );
};

export default VideoCall;
