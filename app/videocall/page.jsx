const VideoCall = () => {
    return ( 
        <div className="flex flex-col justify-center items-center p-36 " style={{height:'500px'}} >
            <h1 className="text-4xl font-bold mb-8 text-center">Video Call with Your Doctor</h1>
            <p className="text-lg text-gray-700 mb-10 text-center">Experience the convenience of virtual consultations. Video calls with your doctor allow for easy communication and access to medical advice from the comfort of your home.</p>
            <button className="py-4 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md">
                <a href="http://localhost:9000" target="_blank" rel="noopener noreferrer">Go To Video Call</a>
            </button>
        </div>
     );
}

export default VideoCall;
