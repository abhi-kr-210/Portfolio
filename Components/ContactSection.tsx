"use client";
import React, { useState } from "react";

function ContactSection() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // success/error message
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, mail, number, message }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setName("");
        setMail("");
        setNumber("");
        setMessage("");
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      // setStatus("⚠️ Something went wrong. Please try again. ");
      setStatus(`⚠️ Something went wrong: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-10 pb-6 flex items-center justify-center w-[90%] md:w-[70%] lg:w-[60%] mx-auto">
      <div className="p-[1px] bg-gradient-to-tr from-[#e0d5f6] via-[#9a75ea] to-[#9a75ea] rounded-lg w-full">
        <div className="bg-gray-900 p-5 sm:p-10 flex flex-col justify-center rounded-lg ">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4 z-12 w-full sm:w-[70%] lg:w-[60%] mx-auto"
          >
            {/* Name */}
            <div className="max-w-sm ">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white 
                           focus:outline-none focus:ring-1 focus:ring-purple-300
                           placeholder-gray-400"
                required
              />
            </div>

            {/* Email */}
            <div className="max-w-sm">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white 
                           focus:outline-none focus:ring-1 focus:ring-purple-300
                           placeholder-gray-400"
                required
              />
            </div>

            {/* Number */}
            <div className="max-w-sm">
              <label htmlFor="number" className="block text-sm font-medium text-gray-300 mb-1">
                Your Number
              </label>
              <input
                type="text"
                id="number"
                placeholder="Enter your number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white 
                           focus:outline-none focus:ring-1 focus:ring-purple-300
                           placeholder-gray-400"
              />
            </div>

            {/* Message */}
            <div className="max-w-sm">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white 
                           focus:outline-none focus:ring-1 focus:ring-purple-300
                           placeholder-gray-400 min-h-[100px]"
                required
              ></textarea>
            </div>

            {/* Button */}
            <div className="flex justify-center items-center">
              <span
                className="bg-gradient-to-br from-[#e0d5f6] via-[#9a75ea] to-[#9a75ea] 
                           rounded-lg p-[0.008px] max-w-[200px] w-full"
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 hover:bg-slate-800 
                             text-white font-semibold py-2 px-4 rounded-lg
                             transition-all max-w-[200px] cursor-pointer
                             border border-gray-100 duration-500"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </span>
            </div>

            {/* Status message */}
            {status && <p className="text-center text-sm mt-3 text-gray-300">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
