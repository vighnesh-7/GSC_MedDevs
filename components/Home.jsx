import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

function HomePage() {
  return (
    <div className="home-container container mt-5">
      <div className="row">
        <div className="col-md-8  grid-cols-3 md:grid-cols-2 gap-2 flex ">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2" >
            <Link  href= "/videocall" className="col-md-6 mb-3">
              <Card className="p-2">
                <Image src="/assets/images/doctor.jpg" className='card-image' alt="" width={500} height={500} />
                <div className="card-overlay">Video Chat With Doctor</div>
              </Card>
            </Link>
            <Link href="/schedular" className="col-md-6 mb-3">
              <Card className="p-2">
                <Image src="/assets/images/calender.jpg" className='card-image' alt="" width={500} height={500} />
                <div className="card-overlay">Appointments Scheduler</div>
              </Card>
            </Link>
            <Link href="/diet" className="col-md-6 mb-3">
              <Card className="p-2">
                <Image src="/assets/images/diet.jpg" className='card-image' alt="" width={500} height={500} />
                <div className="card-overlay">Check Diet Plans</div>
              </Card>
            </Link>
            <Link href="/medicine" className="col-md-6 mb-3">
              <Card className="p-2">
                <Image src="/assets/images/Medicine.jpg" className='card-image' alt="" width={500} height={500} />
                <div className="card-overlay">Check your Medicines</div>
              </Card>
            </Link>
          </div>
        <div className="col-md-4 grid grid-col-1">
          <Image src="/assets/images/mainDoctor.avif" className='main-doctor-image ' alt="" width={500} height={500} />
        </div>
        </div>
        <div className='p-5 '>
          <p className =' text-xl text-gray-600 font-medium p-5 indent-7 leading-8' >
            Our vision is a world where every individual has the knowledge, tools, and support they need to thrive physically, mentally, and emotionally. We envision a future where preventive care is prioritized, where healthcare is holistic and inclusive, and where technology is leveraged to enhance wellness and quality of life.
          </p>
        </div>
        <div >
          <div className="bottom-lines mb-4">
            <p className="stylish-line leading-8"><FaQuoteLeft className='ml-96' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Empowering Healthcare Through Innovation and Expertise.</p>
            <p className="stylish-line leading-8">Your Partner in Medical Solutions and Development.</p>
            <p className="stylish-line leading-8">Transforming Healthcare with Cutting-Edge Technology.</p>
            <p className="stylish-line leading-8">Elevating Medical Services through Tech Excellence.<FaQuoteRight className='ml-auto mr-96' /></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
