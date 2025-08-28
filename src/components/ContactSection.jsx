import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiTwitter,
  FiFacebook,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactSection() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ot24qhh",
        "template_dpgqkck",
        form.current,
        "admxvtaCz9IESy8GO"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send: " + error.text);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="p-10 bg-gradient-to-br from-yellow-50/60 via-orange-50/60 to-red-50/60 space-y-6"
          >
            <h2 className="text-4xl font-serif font-bold text-yellow-700">
              Connect With Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Have questions or ready to begin your spiritual journey? Reach out
              to schedule a session or learn more about how we can help guide
              your path.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: FiMapPin,
                  title: "Location",
                  value:
                    "123 Spiritual Center, Vedic Lane, New Delhi, India - 110001",
                },
                {
                  icon: FiPhone,
                  title: "Mobile",
                  value: "+91 123 456 7890",
                },
                {
                  icon: FiMail,
                  title: "Email",
                  value: "info@vedastructure.com",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-tr from-yellow-500 to-orange-600 shadow-md">
                    <item.icon className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-700">{item.title}</p>
                    <p className="text-gray-700">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Social Media */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-tr from-yellow-500 to-orange-600 shadow-md">
                  <FiMail className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-yellow-700">Social Media</p>
                  <div className="flex gap-3 mt-2">
                    {[FiTwitter, FiFacebook, FiYoutube, FiLinkedin].map(
                      (Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="p-2 rounded-full hover:bg-yellow-500 hover:text-white transition"
                        >
                          <Icon className="w-5 h-5 text-yellow-600" />
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="p-10 bg-white/70"
          >
            <h2 className="text-4xl font-serif font-bold mb-6 text-yellow-700 text-center md:text-left">
              Get in Touch
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-1/2 px-4 py-3 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none bg-white/90 shadow-sm"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-1/2 px-4 py-3 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none bg-white/90 shadow-sm"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none bg-white/90 shadow-sm"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none bg-white/90 shadow-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full  bg-orange-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
              >
                Send Message
              </motion.button>
            </form>
            {status && (
              <p className="mt-4 text-center text-sm font-medium text-gray-700">
                {status}
              </p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
