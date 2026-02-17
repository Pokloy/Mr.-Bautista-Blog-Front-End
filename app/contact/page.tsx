'use client';

import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Mail className="w-16 h-16 text-gray-800" />
          </div>
          <h1 className="font-handwriting text-6xl md:text-8xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h1>
          <p className="font-hand text-2xl text-gray-700 max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have questions, feedback, or just want to say hello
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#E0F2FE] rounded-3xl shadow-xl p-8 border-4 border-dashed border-gray-800 h-full">
              <h2 className="font-handwriting text-4xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 font-hand text-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gray-800 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">Residence</p>
                    <p className="text-gray-700">
                      Purok Mangga 2,
                      <br />
                      Jaclupan, Talisay City
                      <br />
                      Cebu, Philippines 6045
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-gray-800">Office Address</p>
                    <p className="text-gray-700">
                      Jaclupan Elementary School
                      <br />
                      Jaclupan, Talisay City, 
                      <br />
                      Cebu, Phil.6045
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gray-800 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">Phone</p>
                    <p className="text-gray-700">09602437865</p>
                  </div>
                </div>

                {/* <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gray-800 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">Email</p>
                    <p className="text-gray-700">ms.smith@sunshineschool.edu</p>
                  </div>
                </div> */}

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gray-800 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">Office Hours</p>
                    <p className="text-gray-700">
                      Monday - Friday: 7:30 AM - 3:30 PM
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full max-w-md h-8 bg-[#FCA5A5] rounded-t-lg shadow-md" />

              <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-gray-800 relative">
                <div className="absolute top-0 left-0 right-0 h-16 bg-[#FEF9C3] border-b-4 border-dashed border-gray-800 rounded-t-3xl flex items-center justify-center">
                  <span className="font-handwriting text-2xl font-bold text-gray-800">
                    Send a Message
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="mt-12 space-y-6">
                  <div>
                    <label className="block font-hand text-lg font-bold text-gray-800 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#10B981] focus:outline-none font-hand text-lg"
                      placeholder="Diwa Malaya Katigbak"
                    />
                  </div>

                  <div>
                    <label className="block font-hand text-lg font-bold text-gray-800 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#10B981] focus:outline-none font-hand text-lg"
                      placeholder="diwaMalayaKat@gmail.com"
                    />
                  </div>

                  <div>
                    <label className="block font-hand text-lg font-bold text-gray-800 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#10B981] focus:outline-none font-hand text-lg"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block font-hand text-lg font-bold text-gray-800 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#10B981] focus:outline-none font-hand text-lg resize-none"
                      placeholder="Tell me what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full bg-[#D1FAE5] text-gray-800 font-hand text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitted ? (
                      <>Message Sent! ✓</>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-[#FEF9C3] to-[#D1FAE5] rounded-3xl shadow-xl p-8 border-4 border-dashed border-gray-800"
        >
          <h2 className="font-handwriting text-4xl font-bold text-gray-800 mb-4 text-center">
            Looking Forward to Connecting!
          </h2>
          <p className="font-hand text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Whether you're a parent with questions, a fellow educator wanting to share ideas, or a student wanting to say hi, I'm here for you. Every message brightens my day!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
