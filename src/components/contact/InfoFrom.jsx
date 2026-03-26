import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const InfoForm = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">

      {/* Decorative Pink Blurs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8 text-white">
            <h2 className="text-4xl font-bold leading-tight">
              Let’s <span className="text-pink-500">Connect</span>
            </h2>

            <p className="text-gray-300 max-w-md">
              Have a question or need assistance? Our team is always ready to
              support you with quick and reliable responses.
            </p>

            {/* Info Cards */}
            <div className="space-y-5">

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-pink-500/40 transition">
                <div className="w-12 h-12 flex items-center justify-center bg-pink-500/20 rounded-full text-pink-500">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold">Our Address</h4>
                  <p className="text-sm text-gray-300">Bahawalpur, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-pink-500/40 transition">
                <div className="w-12 h-12 flex items-center justify-center bg-pink-500/20 rounded-full text-pink-500">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-semibold">Phone Number</h4>
                  <p className="text-sm text-gray-300">+92 322 9234045</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-pink-500/40 transition">
                <div className="w-12 h-12 flex items-center justify-center bg-pink-500/20 rounded-full text-pink-500">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-semibold">Email Address</h4>
                  <p className="text-sm text-gray-300">support@ministore.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form className="bg-white/10 backdrop-blur-xl p-5 md:p-10 rounded-3xl border border-white/10 space-y-6">

            <h3 className="text-2xl font-bold text-white">
              Send us a Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border border-white/20 text-white p-4 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border border-white/20 text-white p-4 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full bg-transparent border border-white/20 text-white p-4 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 rounded-xl transition"
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