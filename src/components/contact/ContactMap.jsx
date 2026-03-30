import React from "react";
import { TiLocation } from "react-icons/ti";

const ContactMap = () => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-white">

      {/* Decorative Pink Blurs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-24 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Our <span className="text-pink-500">Location</span>
          </h2>

          <p className="text-black mt-4 max-w-xl mx-auto leading-relaxed">
            Visit us in Bahawalpur — we’re always happy to welcome you and assist
            with anything you need.
          </p>
        </div>

        {/* Map Card */}
        <div className="rounded-md overflow-hidden bg-white shadow-md border border-gray-200 hover:border-pink-500 transition duration-300">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Bahawalpur%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[420px]"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactMap;