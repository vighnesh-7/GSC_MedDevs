import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const AboutUs = () => {
  return (
    <div className="min-h-80 p-4 sm:p-10 sm:pt-10 w-full">
      <h1 className="aboutus mb-2 text-2xl sm:text-4xl font-bold font-sans">
        <span>About&nbsp;</span>
        <span>us</span>
      </h1>
      <p className="text-base sm:text-xl font-normal">
        Welcome to our website, where we are dedicated to revolutionizing
        healthcare and promoting global well-being through innovative technology
        solutions.
      </p>
      <div className="p-2 sm:p-7 sm:pt-4">
        <h2 className="text-lg sm:text-xl font-semibold underline underline-offset-2 mb-2 sm:mb-4">
          Our Mission
        </h2>
        <p className="leading-5 sm:leading-7 text-sm sm:text-lg font-normal">
          At our website, our mission is to break down barriers to healthcare
          access and empower individuals to take control of their well-being. We
          believe that everyone deserves access to quality healthcare,
          regardless of their location or resources. Through our comprehensive
          online platform, we aim to revolutionize remote healthcare and improve
          health outcomes worldwide.
        </p>
      </div>

      <div className="px-4 sm:px-60 pt-4 sm:pt-5">
        <RiDoubleQuotesL className="mr-auto w-5 sm:w-7 h-5 sm:h-7" />
        <p className="px-2 sm:px-10 leading-6 sm:leading-10 font-serif font-medium text-sm sm:text-lg text-wrap">
          Join us on our mission to revolutionize healthcare and promote global
          well-being! Whether you are a patient seeking accessible healthcare
          services, a healthcare professional interested in leveraging
          technology to improve patient care, or a partner looking to
          collaborate on innovative healthcare solutions, we welcome you to
          MedDevs. Together, we can create a healthier, happier world for all.
        </p>
        <RiDoubleQuotesR className="ml-auto w-5 sm:w-7 h-5 sm:h-7" />
      </div>
    </div>
  );
};

export default AboutUs;
