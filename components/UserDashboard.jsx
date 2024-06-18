"use client";

import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function UserDashboard({ myuser }) {
  const handleCreateUser = async () => {
    try {
      const response = await axios.post("/api/user/create", { myuser });

      if (response.data.message === "Success") {
        setUser(response.data.payload);
        toast.success("User created Successfully");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    handleCreateUser();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    username: myuser.username,
    firstName: myuser.firstName,
    lastName: myuser.lastName,
    phoneNumber: myuser.phoneNumber,
    email: myuser?.email,
    diagnosis: "",
    email: myuser.email,
    doctorName: "",
  });
  const [profilePic, setProfilePic] = useState(myuser?.image);

  const inputRef = useRef(null);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    reset();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onSubmit = async (data) => {
    console.log(data, "onsubmit throwned");
    return;
    try {
      const response = await axios.post("/api/user/edit", { data });

      console.log("response data : ", response);
      if (response.data.message === "Success") {
        setUser(response.data.payload);
        toast.success("User details updated successfully");
      }
    } catch (e) {
      toast.error("User details updation failed");
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="flex">
        <div className="w-1/4">
          <label htmlFor="profilePicInput" onClick={handleProfileClick}>
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-full w-48 h-48 cursor-pointer"
            />
          </label>
          <input
            ref={inputRef}
            type="file"
            id="profilePicInput"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <div className="w-3/4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block">Username:</label>
              <input
                type="text"
                className="form-input  py-2 ps-3 bg-stone-100 rounded-xl mt-1 block w-full"
                defaultValue={user?.username}
                {...register("username")}
                disabled={!isEditing}
              />
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label className="block">First Name:</label>
                <input
                  type="text"
                  className="form-input  py-2 ps-3 bg-stone-100 rounded-xl mt-1 block w-full"
                  defaultValue={user?.firstName}
                  {...register("firstName")}
                  disabled={!isEditing}
                />
              </div>
              <div className="w-1/2">
                <label className="block">Last Name:</label>
                <input
                  type="text"
                  className="form-input  py-2 ps-3 bg-stone-100 rounded-xl mt-1 block w-full"
                  defaultValue={user?.lastName}
                  {...register("lastName")}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block">Diagnosis:</label>
              <input
                type="text"
                className="form-input  py-2 ps-3 bg-stone-100 rounded-xl mt-1 block w-full"
                defaultValue={user?.diagnosis}
                {...register("diagnosis")}
                disabled={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block">Email Address:</label>
              <input
                type="text"
                className="form-input  py-2 ps-3 bg-stone-100 rounded-xl mt-1 block w-full"
                defaultValue={user?.email}
                {...register("email")}
                disabled={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block">Phone Number:</label>
              <input
                type="text"
                className="form-input  py-2 ps-3 bg-stone-100 rounded-xl mt-1 block w-full"
                defaultValue={user?.phoneNumber}
                {...register("phoneNumber")}
                disabled={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block">Doctor Name:</label>
              <input
                type="text"
                className="form-input py-2 ps-3 bg-stone-100 rounded-xl mt-1 block w-full"
                defaultValue={user?.doctorName}
                {...register("doctorName")}
                disabled={!isEditing}
              />
            </div>
            <div>
              {isEditing ? (
                <>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-500 rounded"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                  <button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-500 font-semibold text-white px-4 py-2 rounded"
                    onClick={onSubmit}
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
