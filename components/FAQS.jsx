"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FAQ from "./FAQ";
import toast from "react-hot-toast";

const FAQs = ({ username }) => {
  const [user, setUser] = useState({});

  const getCurrentUser = async () => {
    try {
      const response = await axios.post("/apis/user/getUser", {
        username: username,
      });
      if (response.data.message === "Success") {
        setUser(response.data.payload);
      } else {
        toast.error("Failed to fetch user data.");
      }
    } catch (e) {
      console.log(e);
      toast.error("An error occurred while fetching user data.");
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const faqs = [
    {
      q: "How does your online platform contribute to the UN's goal of better health and well-being?",
      a: "Our platform contributes to the UN's goal by providing comprehensive remote healthcare services. We enhance communication between patients and healthcare providers, enabling symptom checks, appointment booking, video consultations, prescription management, tailored healthcare plans, and emergency support. Additionally, our platform can raise funds for broader healthcare causes, further supporting global health initiatives.",
    },
    {
      q: "What specific features does your online platform offer?",
      a: "Our platform offers a wide range of features to facilitate remote healthcare. These include a symptom checker to assess health conditions, appointment booking for scheduling consultations, secure video consultations for virtual medical visits, prescription management tools, personalized health plans tailored to individual needs, and access to emergency support services.",
    },
    {
      q: "How does your platform address obstacles like distance and lack of resources in accessing medical care?",
      a: "Our platform leverages technology to overcome barriers to healthcare access. By providing remote healthcare services, we eliminate the need for individuals to travel long distances to access medical care. Additionally, our platform ensures that individuals in underserved areas have access to timely and comprehensive medical attention, regardless of geographical location or resource constraints.",
    },
    {
      q: "What impact do you hope to achieve with your online platform?",
      a: "Our ultimate goal is to improve access to quality healthcare, encourage preventive care, and improve global health outcomes through our online platform. By empowering individuals to take control of their health and providing convenient access to medical care, we aim to make a meaningful impact on public health and contribute to the promotion of global well-being.",
    },
  ];

  const [showForm, setShowForm] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");

  const handleInputChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFAQ = {
      q: newQuestion,
      userId: user.id,
      username: user.username,
      userRole: user.role,
      a:'answer'
    };

    try {
        // console.log(newFAQ,"newFAQ  ");
      const response = await axios.post("/apis/faq/ask", newFAQ);
      if (response.data.message === "Success") {
        setShowForm(false);
        setNewQuestion("");
        toast.success("FAQ added successfully!");
      } else {
        toast.error("Failed to add FAQ.");
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the FAQ.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 mb-8">
      <h1 className="aboutus text-3xl font-bold mb-4">
        <span>Frequently&nbsp;&nbsp;</span>
        <span>Asked&nbsp;&nbsp;</span>
        <span>Questions</span>
      </h1>
      {faqs.map((faq, index) => (
        <FAQ key={index} question={faq.q} answer={faq.a} />
      ))}
      <div className="mt-6 hidden">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ask a Query
        </button>
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mt-4 bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label htmlFor="question" className="block font-bold mb-2">
                Question
              </label>
              <input
                type="text"
                id="question"
                name="question"
                value={newQuestion}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg py-2 px-3"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Post
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FAQs;
