import { Button } from "../components";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast.error("Please enter name and email!");
      return;
    }

    toast.success("You have successfully subscribed.Thank you!");

    setName("");
    setEmail("");
    setDescription("");
  };

  return (
    <section
      id="contact-us"
      className="max-container flex flex-col lg:flex-row justify-between items-start gap-10 lg:items-center py-10"
    >
      <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-tight lg:leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>

      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-[45%] flex flex-col gap-4 p-6 sm:p-8 bg-white dark:bg-slate-100 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg transition-all hover:shadow-2xl"
      >
        <input
          type="text"
          placeholder="Enter your name"
          className="input py-3 px-4 rounded-lg border border-gray-300 focus:border-coral-red focus:ring-1 focus:ring-coral-red transition-all outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="input py-3 px-4 rounded-lg border border-gray-300 focus:border-coral-red focus:ring-1 focus:ring-coral-red transition-all outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Description (optional)"
          className="input resize-none py-3 px-4 rounded-lg border border-gray-300 focus:border-coral-red focus:ring-1 focus:ring-coral-red transition-all outline-none"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button label="Subscribe" fullWidth />
      </form>

      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
};

export default Subscribe;
