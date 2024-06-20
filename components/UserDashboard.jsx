"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";

function UserDashboard({ myuser }) {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [profilePic, setProfilePic] = useState(myuser.image);
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showMedicalInfo, setShowMedicalInfo] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      diagnosis: "",
      doctorName: "",
    },
  });

  const handleCreateUser = async () => {
    try {
      const response = await axios.post("/apis/user/create", { myuser });
      if (response.data.message === "Success") {
        setUser(response.data.payload);
        toast.success("User created Successfully");
      }
    } catch (e) {}
  };

  const getCurrentUser = async () => {
    try {
      const response = await axios.post("/apis/user/getUser", {
        username: myuser.username,
      });
      if (response.data.message === "Success") {
        setUser(response.data.payload);
        reset(response.data.payload); // Reset form with fetched user data
        toast.success("User fetched Successfully");
      }
    } catch (e) {
      toast.error("User fetch failed");
      console.log(e);
    }
  };

  useEffect(() => {
    handleCreateUser();
  }, []);

  const handleCancel = () => {
    setIsEditing(false);
    setShowPersonalInfo(false);
    setShowMedicalInfo(false);
  };

  const showPersonalInfoFunction = async () => {
    await getCurrentUser();
    setShowPersonalInfo(true);
  };

  const showMedicalInfoFunction = async () => {
    await getCurrentUser();
    setShowMedicalInfo(true);
  };

  const handleEditSubmit = async (data) => {
    try {
      const response = await axios.post("/apis/user/edit", { user: data });

      if (response.data.message === "Success") {
        setUser(response.data.payload);
        toast.success("User details updated successfully");
      }
    } catch (e) {
      toast.error("User details updation failed");
    } finally {
      setIsEditing(false);
      setShowPersonalInfo(false);
      setShowMedicalInfo(false);
    }
  };

  return (
    <div className="container mx-auto mt-5 px-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <label htmlFor="profilePicInput">
            <h1 className="mb-5 text-center">
              <strong className="text-xl font-semibold text-gray-800">
                {user?.role}
              </strong>
            </h1>
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-full w-40 h-40 md:w-56 md:h-56 mx-auto cursor-pointer"
            />
          </label>
        </div>
        <div className="w-full md:w-3/4">
          {!showPersonalInfo && !showMedicalInfo && (
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-12">
              <div
                className="w-full md:w-1/2 h-64 md:h-80 rounded-lg mb-4 cursor-pointer border-2 border-gray-300 p-5 hover:shadow-2xl transition duration-500 ease-in-out"
                onClick={showPersonalInfoFunction}
              >
                <h1>
                  <strong className="text-xl font-semibold text-gray-800">
                    Personal Info
                  </strong>
                </h1>
                <img
                  src={"/assets/images/personalinfo.svg"}
                  alt="Personal Info"
                  className="w-full h-48 md:h-64 rounded-lg hover:saturate-150 hover:drop-shadow-2xl transition duration-500 ease-in-out"
                />
              </div>
              <div
                className="w-full md:w-1/2 h-64 md:h-80 rounded-lg mb-4 cursor-pointer border-2 border-gray-300 p-5 hover:shadow-2xl transition duration-500 ease-in-out"
                onClick={showMedicalInfoFunction}
              >
                <h1>
                  <strong className="text-xl font-semibold text-gray-800">
                    Medical Info
                  </strong>
                </h1>
                <img
                  src={"/assets/images/medinfo.svg"}
                  alt="Medical Info"
                  className="w-full h-48 md:h-64 rounded-lg hover:saturate-150 hover:drop-shadow-2xl transition duration-500 ease-in-out"
                />
              </div>
            </div>
          )}

          {showPersonalInfo && (
            <div className="w-full relative">
              <button
                className="absolute -top-3 right-0 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-2 rounded-full"
                onClick={() => setShowPersonalInfo(false)}
              >
                <IoClose className="font-bold w-6 h-6" />
              </button>
              <form onSubmit={handleSubmit(handleEditSubmit)}>
                <div className="mb-4">
                  <h1 className="block text-xl mb-4 font-semibold">
                    Personal Info:
                  </h1>
                  <div className="mb-2">
                    <label className="block">Username:</label>
                    <input
                      type="text"
                      className="form-input py-2 px-3 bg-stone-300 rounded-xl mt-1 block w-full"
                      {...register("username")}
                      defaultValue={user?.username}
                      disabled={user?.role === "PATIENT"}
                    />
                  </div>
                  <div className="mb-2 flex flex-col md:flex-row md:gap-4">
                    <div className="w-full md:w-1/2 mb-2 md:mb-0">
                      <label className="block">First Name:</label>
                      <input
                        type="text"
                        className="form-input py-2 px-3 bg-stone-100 rounded-xl mt-1 block w-full"
                        {...register("firstName")}
                        defaultValue={user?.firstName}
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label className="block">Last Name:</label>
                      <input
                        type="text"
                        className="form-input py-2 px-3 bg-stone-100 rounded-xl mt-1 block w-full"
                        {...register("lastName")}
                        defaultValue={user?.lastName}
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className="block">Email Address:</label>
                    <input
                      type="email"
                      className="form-input py-2 px-3 bg-stone-300 rounded-xl mt-1 block w-full"
                      {...register("email")}
                      defaultValue={user?.email}
                      disabled={user?.role !== "ADMIN"}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block">Phone Number:</label>
                    <input
                      type="text"
                      className="form-input py-2 px-3 bg-stone-100 rounded-xl mt-1 block w-full"
                      {...register("phoneNumber")}
                      defaultValue={user?.phoneNumber}
                    />
                  </div>
                </div>
                {(showPersonalInfo || showMedicalInfo) && (
                  <div className=" mt-8">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-2"
                      onClick={() => setIsEditing(true)}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="bg-gray-500 text-white px-4 py-2 rounded ms-5"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </form>
            </div>
          )}

          {showMedicalInfo && (
            <div className="w-full relative">
              <button
                className="absolute -top-3 right-0 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-2 rounded-full"
                onClick={() => setShowMedicalInfo(false)}
              >
                <IoClose className=" font-bold w-6 h-6" />
              </button>
              <form onSubmit={handleSubmit(handleEditSubmit)}>
                <div className="mb-4">
                  <h1 className="block font-semibold mb-4 text-xl">
                    Medical Info:
                  </h1>
                  <div className="mb-2">
                    <label className="block">Username:</label>
                    <input
                      type="text"
                      className="form-input py-2 px-3 bg-stone-300 rounded-xl mt-1 block w-full"
                      {...register("username")}
                      defaultValue={user?.username}
                      disabled={user.role !== "ADMIN"}
                    />
                  </div>
                  <div className="mb-2 flex items-center justify-between gap-20">
                    <div className=" w-full">
                      <label className="block">First Name:</label>
                      <input
                        type="text"
                        className="form-input py-2 px-3 bg-stone-300 rounded-xl mt-1 block w-full"
                        {...register("firstName")}
                        defaultValue={user?.firstName}
                        disabled={user.role !== "ADMIN"}
                      />
                    </div>
                    <div className="w-full">
                      <label className="block">Last Name:</label>
                      <input
                        type="text"
                        className="form-input py-2 px-3 bg-stone-300 rounded-xl mt-1 block w-full"
                        {...register("lastName")}
                        defaultValue={user?.lastName}
                        disabled={user.role !== "ADMIN"}
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className="block">Diagnosis:</label>
                    <input
                      type="text"
                      className="form-input py-2 px-3 bg-stone-300 rounded-xl mt-1 block w-full"
                      {...register("diagnosis")}
                      defaultValue={user?.diagnosis}
                      disabled={user.role !== "ADMIN"}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block">Doctor Name:</label>
                    <input
                      type="text"
                      className="form-input py-2 px-3 bg-stone-300 rounded-xl mt-1 block w-full"
                      {...register("doctorName")}
                      defaultValue={user?.doctorName}
                      disabled={user.role !== "ADMIN"}
                    />
                  </div>
                </div>
                {(showPersonalInfo || showMedicalInfo) && (
                  <div className=" mt-8">
                    <button
                      type="submit"
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-2"
                      hidden={user.role !== "ADMIN"}
                    >
                      Save
                    </button>

                    <button
                      type="button"
                      className="bg-gray-500 text-white px-4 py-2 rounded ms-5"
                      onClick={handleCancel}
                      hidden={user.role !== "ADMIN"}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
