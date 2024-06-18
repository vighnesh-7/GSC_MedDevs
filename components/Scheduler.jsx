"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import img from "/public/assets/images/img.jpg";
import toast from "react-hot-toast";
import axios from "axios"; // Import axios
import { useRouter } from "next/navigation";

const Scheduler = (username) => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    date: selectedDate,
    status: "ACTIVE",
    category: "GENERAL",
    priority: 0,
    diagnosis: user.diagnosis || "",
    notes: "",
  });

  const getCurrentUser = async () => {
    try {
      const response = await axios.post("/apis/user/getUser", {
        username: username,
      });
      if (response.data.message === "Success") {
        setUser(response.data.payload);
        setFormData({
          ...formData,
          userId: response.data.payload.id,
          diagnosis: response.data.payload.diagnosis || "",
        });
      }

      getAppointments(response.data.payload.id);
    } catch (e) {
      console.log(e);
    }
  };

  const getAppointments = async (id) => {
    try {
      const response = await axios.post("/apis/appointments/get", {
        userId: id,
      });
      if (response.data.message === "Success") {
        setAppointments(response.data.payload);
        console.log(response.data.payload);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData({
      ...formData,
      date: date,
    });
  };

  const addAppointment = () => {
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/apis/appointments/create", formData);
      if (response.data.message === "Success") {
        setAppointments([...appointments, response.data.appointment]);
        setShowModal(false);
        toast.success("Appointment added successfully!");
        router.refresh();
      } else {
        console.log(response);
        toast.error("Failed to add appointment.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the appointment.");
    } finally {
      router.refresh();
    }
  };

  const deleteAppointment = (index) => {
    try {
      const response = axios.post("/apis/appointments/delete", {
        id: appointments[index].id,
      });

      console.log(response.data.payload,"deleted appointments data from the database");
      toast.success("Appointment deleted successfully!");
      setAppointments(response.data.payload);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="scheduler-container mt-5">
      <h2 className="text-center font-bold text-3xl mb-3">Scheduler</h2>
      <hr style={{ height: "1.5px" }} className="bg-black  opacity-15" />
      <div className="mt-4 calendar-container flex justify-between">
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="p-2 ps-4 bg-stone-200 rounded-xl me-2"
          />
        </div>
        <div>
          <button
            onClick={addAppointment}
            className="ms-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Appointment
          </button>
        </div>
      </div>
      <div className="appointments">
        {appointments?.length === 0 ? (
          <div>
            <div className="text-center bg-cover flex items-center justify-center ">
              <Image src={img} className=" text-center " alt="" />
            </div>
            <hr
              className="mb-3 px-3 mx-4 bg-black opacity-20"
              style={{ height: "1.3px" }}
            />
            <h6 className=" font-normal text-lg mt-2 indent-7">
              Plan your future appointments and take charge of your health
              journey today!
            </h6>
          </div>
        ) : appointments?.length > 0 ? (
          appointments?.map((appointment, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 mb-8 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer hover:scale-105"
            >
              <div>
                <div className=" w-full flex items-center justify-between">
                  <div>
                    <p className="text-gray-800 font-bold text-lg">
                      Appointment {index + 1}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`text-gray-600 relative px-2 py-1 rounded-lg text-xs font-semibold text-gray-900 ${
                        appointment?.status === "ACTIVE"
                          ? " bg-red-300  animate-pulse"
                          : " bg-sky-600 "
                      } `}
                    >
                      {appointment?.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600">
                  <span className="font-semibold">Category:</span>{" "}
                  {appointment?.category}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Date:</span>{" "}
                  {new Date(appointment?.date).toLocaleString()}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Diagnosis:</span>{" "}
                  {appointment?.diagnosis || "N/A"}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Priority:</span>{" "}
                  {appointment?.priority}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Notes:</span>{" "}
                  {appointment?.notes || "N/A"}
                </p>
              </div>
              <div className="mt-1 w-full flex justify-end">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                  onClick={() => deleteAppointment(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <div className="text-center bg-cover flex items-center justify-center">
              <Image src={img} className="text-center" alt="" />
            </div>
            <hr
              className="mb-3 px-3 mx-4 bg-black opacity-20"
              style={{ height: "1.3px" }}
            />
            <h6 className="font-normal text-lg mt-2 indent-7">
              Plan your future appointments and take charge of your health
              journey today!
            </h6>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-bold mb-4">Add Appointment</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="diagnosis" className="block font-bold mb-2">
                  Diagnosis
                </label>
                <input
                  type="text"
                  id="diagnosis"
                  name="diagnosis"
                  value={formData.diagnosis}
                  disabled={user.role !== "ADMIN"}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 bg-slate-300 rounded-lg py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block font-bold mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-3"
                >
                  <option value="GENERAL">General</option>
                  <option value="APPOINTMENT">Appointment</option>
                  <option value="MEDICATION">Medication</option>
                  <option value="CHECKUP">CheckUp</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="priority" className="block font-bold mb-2">
                  Priority
                </label>
                <input
                  type="number"
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="notes" className="block font-bold mb-2">
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-3"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scheduler;
