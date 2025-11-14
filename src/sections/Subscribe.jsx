import { Button } from "../components";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email!"); 
      return;
    }

    setEmail("");
    toast.success("Subscribed successfully!");
  };

  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>

      <form
        onSubmit={handleSubmit}
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
      >
        <input
          type="text"
          placeholder="subscribe@Ecs.com"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Subscribe;
