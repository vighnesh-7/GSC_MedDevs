'use client'

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
import img from '/public/assets/images/img.jpg';
import toast from "react-hot-toast";


const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const addAppointment = () => {
    let appointmentName = prompt('Enter appointment name:');
    if(appointmentName === null)
      return;
    if (appointmentName.trim() === '') {
      appointmentName = 'Doctor';
    }

    const newAppointment = {
      date: selectedDate,
      name: appointmentName
    };

    const updatedAppointments = [...appointments, newAppointment].sort((a, b) => a.date - b.date);
    setAppointments(updatedAppointments);

    try{
        toast.success("Appointment is added successfully!")
    }catch{
        toast.error("Something went wrong.")
    }
  };

  const deleteAppointment = index => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="scheduler-container mt-5">
      <h2 className='text-center font-bold text-3xl mb-3'>Scheduler</h2>
      <hr style={{height:'1.5px'}} className='bg-black  opacity-15' />
      <div className="mt-4 calendar-container flex justify-between">
        <div>
          <DatePicker  selected={selectedDate} onChange={handleDateChange} className='p-2 ps-4 bg-stone-200 rounded-xl me-2' />
        </div>
        <div>
          <button onClick={addAppointment} className='ms-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Appointment</button>
        </div>
      </div>
      <div className="appointments">
        {!appointments.length ? (
          <div>
            <div className='text-center bg-cover flex items-center justify-center '>
              <Image src={img} className=' text-center ' alt="" />
            </div>
              <hr className='mb-3 px-3 mx-4 bg-black opacity-20' style={{height:'1.3px'}} />
              <h6 className=' font-normal text-lg mt-2 indent-7'>Plan your future appointments and take charge of your health journey today!</h6>
          </div>
        ) : (
          appointments.map((appointment, index) => (
            <div key={index} className="appointment-item">
              <div className="appointment-details">
                <span className="appointment-name">{appointment.name}</span>
                <span className="appointment-date">{appointment.date.toDateString()}</span>
              </div>
              <div className="appointment-actions">
                <button className=' bg-red-600 hover:bg-red-500' onClick={() => deleteAppointment(index)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Scheduler;
