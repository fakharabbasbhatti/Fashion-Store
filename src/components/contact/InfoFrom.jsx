import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";

const InfoForm = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8 text-black">
            <h2 className="text-4xl font-bold leading-tight">
              Let’s <span className="text-pink-500">Connect</span>
            </h2>

            <p className="max-w-md">
              Have a question or need assistance? Our team is always ready to
              support you with quick and reliable responses.
            </p>

            {/* Info Cards */}
            <div className="space-y-5">

              <div className="flex items-center gap-4 bg-white shadow-md p-5 rounded-md border border-gray-200 hover:border-pink-500 transition">
                <div className="w-12 h-12 flex items-center justify-center bg-pink-500/20 rounded-md text-pink-500">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold">Our Address</h4>
                  <p className="text-sm text-black">Bahawalpur, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white shadow-md p-5 rounded-2xl border border-gray-200 hover:border-pink-500 transition">
                <div className="w-12 h-12 flex items-center justify-center bg-pink-500/20 rounded-md text-pink-500">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-semibold">Phone Number</h4>
                  <p className="text-sm text-black">+92 322 9234045</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white shadow-md p-5 rounded-2xl border border-gray-200 hover:border-pink-500 transition">
                <div className="w-12 h-12 flex items-center justify-center bg-pink-500/20 rounded-md text-pink-500">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-semibold">Email Address</h4>
                  <p className="text-sm text-black">support@ministore.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form className="bg-white shadow-md p-5 md:p-10 rounded-3xl border border-gray-200 space-y-6">

            <h3 className="text-2xl font-bold text-black">
              Send us a Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white border border-gray-300 text-black p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white border border-gray-300 text-black p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
            />

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full bg-white border border-gray-300 text-black p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 rounded-md transition"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default InfoForm;