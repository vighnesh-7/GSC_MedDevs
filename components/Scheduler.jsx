"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import img from "/public/assets/images/img.jpg";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useUserStore from "../hooks/useUserStore";

const Scheduler = ({ username }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState({});
  const {setStoreUser} = useUserStore();
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(null);
  const [formData, setFormData] = useState({
    userId: "",
    date: selectedDate,
    status: "ACTIVE",
    category: "GENERAL",
    priority: 0,
    diagnosis: "",
    notes: "",
  });
  const router = useRouter();

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    try {
      const response = await axios.post("/apis/user/getUser", {
        username: username,
      });
      if (response.data.message === "Success") {
        setUser(response.data.payload);
        setStoreUser(response.data.payload);
        setFormData({
          ...formData,
          userId: response.data.payload.id,
          diagnosis: response.data.payload.diagnosis || "",
        });
        await getAppointments(response.data.payload.id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAppointments = async (id) => {
    try {
      const response = await axios.post("/apis/appointments/get", {
        userId: id,
      });
      if (response.data.message === "Success") {
        setAppointments(response.data.payload);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        toast.success("Appointment added successfully!");
        setShowModal(false);
      } else {
        toast.error("Failed to add appointment.");
      }
      e.target.reset();
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the appointment.");
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/apis/appointments/edit",
        currentAppointment
      );
      if (response.data.message === "Success") {
        const updatedAppointments = appointments.map((appointment) =>
          appointment.id === currentAppointment.id
            ? currentAppointment
            : appointment
        );
        setAppointments(updatedAppointments);
        setShowEditModal(false);
        toast("Appointment updated!", {
          icon: <FaEdit className="w-5 h-5 ms-7" />,
          style: {
            borderRadius: "10px",
            background: "#1c83ba",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          },
        });
      } else {
        toast.error("Failed to update appointment.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating the appointment.");
    }
  };

  const deleteAppointment = async (index) => {
    try {
      const response = await axios.post("/apis/appointments/delete", {
        id: sortedAppointments[index].id,
      });

      toast("Appointment deleted!", {
        icon: "🗑️",
        style: {
          borderRadius: "10px",
          background: "#bb2828",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "1.1rem",
        },
      });
      setAppointments(response.data.payload);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      router.refresh();
    }
  };

  const sortedAppointments = appointments
    ?.slice()
    .sort((a, b) => a.priority - b.priority);

  const statusColors = {
    PENDING: "bg-yellow-500",
    UPCOMING: "bg-blue-500",
    ACTIVE: "bg-red-500  animate-pulse",
    COMPLETED: "bg-green-500",
    DAILY: "bg-purple-500 ",
    WEEKLY: "bg-pink-500",
  };

  const openEditModal = (appointment) => {
    setCurrentAppointment(appointment);
    setShowEditModal(true);
  };

  return (
    <div className="scheduler-container max-sm:w-full mt-5 p-5 bg-gray-100">
      <h2 className="text-center font-bold text-3xl mb-3">Scheduler</h2>
      <hr className="my-3" />
      <div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-center mx-5  ">
        <div className="mb-8 sm:mb-0 ">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="p-2 ps-4 bg-stone-200 rounded-xl me-2 max-sm:w-60  "
          />
        </div>
        <div>
          <button
            onClick={addAppointment}
            className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded max-sm:mb-5"
          >
            Add Appointment
          </button>
        </div>
      </div>
      <div className="appointments mt-4">
        {appointments?.length === 0 ? (
          <div className="text-center">
            <div className="bg-cover flex items-center justify-center">
              <Image src={img} className="text-center" alt="" />
            </div>
            <hr className="my-3" />
            <h6 className="font-normal text-lg mt-2">
              Plan your future appointments and take charge of your health
              journey today!
            </h6>
          </div>
        ) : (
          sortedAppointments?.map((appointment, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 mb-8 hover:shadow-xl transition duration-300 ease-in-out hover:scale-105"
            >
              <div className="w-full flex flex-col sm:flex-row items-center justify-between">
                <div className="mb-2 sm:mb-0">
                  <p className="text-gray-800 font-bold text-lg">
                    Schedule {index + 1}
                  </p>
                </div>
                <div>
                  <span
                    className={`relative px-2 py-1 max-sm:mb-16 rounded-lg text-xs font-semibold text-black cursor-pointer ${
                      statusColors[appointment?.status]
                    }`}
                    onClick={() => openEditModal(appointment)}
                  >
                    {appointment?.status}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 max-sm:mt-5">
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
              <p className="text-gray-600 break-words text-balance">
                <span className="font-semibold">Notes:</span>{" "}
                {appointment?.notes || "N/A"}
              </p>
              <div className="mt-1 w-full flex justify-end">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold p-1.5 rounded"
                  onClick={() => deleteAppointment(index)}
                >
                  <MdDelete className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))
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
              <div className="mb-4">
                <label htmlFor="status" className="block font-bold mb-2">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-3"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="UPCOMING">UPCOMING</option>
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="COMPLETED">COMPLETED</option>
                  <option value="DAILY">DAILY</option>
                  <option value="WEEKLY">WEEKLY</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-lg mr-2"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 font-semibold text-white px-4 py-2 rounded-lg"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showEditModal && currentAppointment && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-bold mb-4">Edit Appointment</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label htmlFor="diagnosis" className="block font-bold mb-2">
                  Diagnosis
                </label>
                <input
                  type="text"
                  id="diagnosis"
                  name="diagnosis"
                  value={currentAppointment.diagnosis}
                  disabled={user.role !== "ADMIN"}
                  onChange={(e) =>
                    setCurrentAppointment({
                      ...currentAppointment,
                      diagnosis: e.target.value,
                    })
                  }
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
                  value={currentAppointment.category}
                  onChange={(e) =>
                    setCurrentAppointment({
                      ...currentAppointment,
                      category: e.target.value,
                    })
                  }
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
                  value={currentAppointment.priority}
                  onChange={(e) =>
                    setCurrentAppointment({
                      ...currentAppointment,
                      priority: e.target.value,
                    })
                  }
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
                  value={currentAppointment.notes}
                  onChange={(e) =>
                    setCurrentAppointment({
                      ...currentAppointment,
                      notes: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg py-2 px-3"
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="status" className="block font-bold mb-2">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={currentAppointment.status}
                  onChange={(e) =>
                    setCurrentAppointment({
                      ...currentAppointment,
                      status: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg py-2 px-3"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="UPCOMING">UPCOMING</option>
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="COMPLETED">COMPLETED</option>
                  <option value="DAILY">DAILY</option>
                  <option value="WEEKLY">WEEKLY</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
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
