"use client";
import Container from "@/Components/shared/Container";
import React, { ChangeEvent, useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

interface Form {
  name: string;
  email: string;
  number: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<Form>({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="my-4  mx-auto px-8 mt-5 lg:mt-10 lg:mb-9">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 mb-5 lg:grid-cols-4 gap-5 lg:gap-8">
          <div className="col-span-1 order-2 lg:order-1">
            <div className="space-y-2 border-b pb-5 border-dark lg:space-y-3 text-dark">
              <div className="flex items-center gap-3">
                <div className="bg-primaryPurple h-[38px] w-[38px] rounded-full">
                  <IoCallOutline className="text-white text-[22px] mx-auto mt-2" />
                </div>
                <h2 className="text-[18px] text-dark text-2xl font-medium">
                  Call To Us
                </h2>
              </div>
              <p className="font-medium">
                We are available 24/7, 7 days a week.
              </p>
              <p className="font-medium">Phone: +8801700 000000</p>
            </div>
            <div className="space-y-2 mt-5 lg:space-y-3 text-dark">
              <div className="flex items-center gap-3">
                <div className="bg-primaryPurple h-[38px] w-[38px] rounded-full">
                  <AiOutlineMail className="text-white text-[22px] mx-auto mt-2" />
                </div>
                <h2 className="text-[18px] text-dark text-2xl font-medium">
                  Write With Us
                </h2>
              </div>
              <p className="font-medium">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="font-medium">Emails: www.islamicmarriage.net</p>
              <p className="font-medium">Emails: support@islamicmarriage.com</p>
            </div>
          </div>
          <div className="col-span-3 order-1 lg:order-2 p-4 lg:p-5  border rounded-md">
            <form onSubmit={handleSubmit}>
              <div className="flex mb-3 lg:mb-6 gap-3 flex-col lg:flex-row">
                <input
                  className="w-full focus:outline-blue-500 outline-blue-500 shadow-sm border rounded-md px-3 py-2 bg-[#F5F5F5]"
                  type="text"
                  placeholder="Your Name *"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
                <input
                  className="w-full focus:outline-blue-500 outline-blue-500 shadow-sm border rounded-md px-3 py-2 bg-[#F5F5F5]"
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
                <input
                  className="w-full focus:outline-blue-500 outline-blue-500 shadow-sm border rounded-md px-3 py-2 bg-[#F5F5F5]"
                  type="number"
                  placeholder="Your Number *"
                  required
                  name="number"
                  onChange={handleChange}
                  value={formData.number}
                />
              </div>
              <textarea
                className="w- h-[180px] w-full border outline-blue-500 rounded-md px-3 py-2 bg-[#F5F5F5]"
                name="message"
                placeholder="your message"
                id="message"
                onChange={handleChange}
                value={formData.message}
              ></textarea>

              <div className="my-2 text-right">
                <button
                  type="submit"
                  className="text-primaryPurple border-primaryPurple py-2 px-5 border rounded-md "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
