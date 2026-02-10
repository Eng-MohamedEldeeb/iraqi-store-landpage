import * as yup from "yup";
import axios, { AxiosError } from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import type {
  IBookNow,
  TClientType,
  TSessionServices,
} from "../../../../@types/IBookNow.interface";

import { SuccessModal } from "./SuccessModal/SuccessModal";

const BookForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigateTo = useNavigate();
  const sessionType: TClientType[] = ["individual", "company"];

  const services: TSessionServices[] = [
    "event",
    "brand",
    "fashion",
    "real estate",
    "products",
  ];

  const onBook = async (value: IBookNow) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.API_URL}/clients/leads/request-lead`,
        value,
      );
      console.log({ data });
      setShowSuccess(true);
      return;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error({
          error: error.response?.data,
        });
      }
    }
  };

  const formik = useFormik<IBookNow>({
    initialValues: {
      clientName: "",
      email: "",
      phone: "",
      companyName: "",
      notes: "",
      clientType: "individual",
      services: [],
    },
    onSubmit: onBook,
    validationSchema: yup.object().shape({
      fullName: yup.string(),
      email: yup.string().email(),
      phone: yup.string(),
      companyName: yup.string(),
      notes: yup.string(),
      services: yup.array(),
    }),
  });

  return (
    <>
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess((prev) => !prev);
          navigateTo("/");
        }}
      />

      <div className="bg-neutral-800 rounded-2xl shadow-xl p-6 md:p-10">
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm mb-2">Full Name</label>
            <input
              name="clientName"
              id="clientName"
              value={formik.values.clientName}
              onChange={formik.handleChange}
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm mb-2">
              Company Name ( Optional )
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              onChange={formik.handleChange}
              value={formik.values.companyName}
              placeholder="Company Name"
              className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="example@email.com"
              className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              placeholder="+20 123 456 7890"
              className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Session Type */}
          <div className="md:col-span-2">
            <label className="block text-sm mb-3">Session Type</label>

            <div className="grid grid-cols-2 gap-4 max-w-md">
              {sessionType.map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 cursor-pointer hover:border-amber-500 transition"
                >
                  <input
                    type="radio"
                    name="clientType"
                    id="clientType"
                    value={formik.values.clientType}
                    onChange={formik.handleChange}
                    className="accent-amber-500"
                  />
                  <span className="text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <label className="block text-sm mb-3">
              Select Photography Services
            </label>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service: TSessionServices) => (
                <label
                  key={service}
                  className="flex items-center gap-2 bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 cursor-pointer hover:border-amber-500 transition"
                >
                  <input
                    type="checkbox"
                    name="services"
                    id="services"
                    onChange={formik.handleChange}
                    value={service}
                    className="accent-amber-500"
                  />
                  <span className="text-sm">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="block text-sm mb-2">Notes: (Optional)</label>
            <textarea
              rows={4}
              name="notes"
              id="notes"
              onChange={formik.handleChange}
              value={formik.values.notes}
              placeholder="Any additional details you would like to share..."
              className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm focus:outline-none focus:border-amber-500 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 text-center pt-4">
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 transition px-10 py-3 rounded-lg text-sm font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookForm;
