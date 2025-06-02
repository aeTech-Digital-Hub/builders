import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  inquiryType: string;
  region: string;
  howCanWeHelp: string;
}

const ConatactForm: React.FC = () => {
  const formik = useFormik<ContactFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      inquiryType: "",
      region: "",
      howCanWeHelp: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10,15}$/, "Invalid phone number")
        .required("Required"),
      inquiryType: Yup.string().required("Required"),
      region: Yup.string().required("Required"),
      howCanWeHelp: Yup.string().max(500, "Must be 500 characters or less"),
    }),
    onSubmit: async (values) => {
      console.log("Form submitted:", values);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success("Form submitted successfully!");
        formik.resetForm();
      } catch (error) {
        console.error("Submission error:", error);
        toast.error("Failed to submit form. Please try again.");
      }
    },
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formik.handleSubmit(event);

    if (Object.keys(formik.errors).length > 0) {
      toast.error("Please correct the errors in the form.");
    }
  };

  return (
    <div className="flex items-start justify-start">
      <div className="w-full">
        <div className="pl-14 my-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Contact Us Here
          </h1>
          <p className="text-blue mb-6">
            For information or questions about our new homes or communities,
            please fill out the form below. Someone will respond to you
            promptly.
          </p>
          <p className="text-blue mb-8">
            For Customer Care requests, please use the Customer Care request
            form .
          </p>
        </div>

        <div className="bg-gray_background py-10 px-14">
          <form onSubmit={handleFormSubmit}>
            <h2 className="text-3xl font-semibold text-blue mb-10">
              Contact Information:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-blue mb-1"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray_background ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "border-statusError"
                      : "border-borderSubtle"
                  }`}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-statusError text-sm mt-1 mb-5">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-blue mb-1"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray_background ${
                    formik.touched.lastName && formik.errors.lastName
                      ? "border-statusError"
                      : "border-borderSubtle"
                  }`}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-statusError text-sm mt-1 mb-5">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray_background ${
                    formik.touched.email && formik.errors.email
                      ? "border-statusError"
                      : "border-borderSubtle"
                  }`}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-statusError text-sm mt-1 mb-5 ">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-blue mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray_background ${
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                      ? "border-statusError"
                      : "border-borderSubtle"
                  }`}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className="text-statusError text-sm mt-1 mb-5">
                    {formik.errors.phoneNumber}
                  </div>
                ) : null}
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-blue mb-6">
              Your Needs:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div>
                <label
                  htmlFor="inquiryType"
                  className="block text-sm font-medium text-blue mb-1"
                >
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.inquiryType}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray_background ${
                    formik.touched.inquiryType && formik.errors.inquiryType
                      ? "border-statusError"
                      : "border-borderSubtle"
                  }`}
                >
                  <option value="">Select an option</option>
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Support Request</option>
                  <option value="other">Other</option>
                </select>
                {formik.touched.inquiryType && formik.errors.inquiryType ? (
                  <div className="text-statusError text-sm mt-1">
                    {formik.errors.inquiryType}
                  </div>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-blue mb-1"
                >
                  Region
                </label>
                <select
                  id="region"
                  name="region"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.region}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray_background ${
                    formik.touched.region && formik.errors.region
                      ? "border-statusError"
                      : "border-borderSubtle"
                  }`}
                >
                  <option value="">Select a region</option>
                  <option value="Accra">Greater Accra</option>
                  <option value="Bono">Bono-Ahafo</option>
                  <option value="Northern">Northern</option>
                  <option value="Volta">Volta</option>
                </select>
                {formik.touched.region && formik.errors.region ? (
                  <div className="text-statusError text-sm mt-1">
                    {formik.errors.region}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mb-8">
              <label
                htmlFor="howCanWeHelp"
                className="block text-sm font-medium text-blue mb-1"
              >
                How can we help you?
              </label>
              <textarea
                id="howCanWeHelp"
                name="howCanWeHelp"
                rows={5}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.howCanWeHelp}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray_background resize-y ${
                  formik.touched.howCanWeHelp && formik.errors.howCanWeHelp
                    ? "border-statusError"
                    : "border-borderSubtle"
                }`}
              ></textarea>
              {formik.touched.howCanWeHelp && formik.errors.howCanWeHelp ? (
                <div className="text-statusError text-sm mt-1">
                  {formik.errors.howCanWeHelp}
                </div>
              ) : null}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue hover:bg-dark_blue text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ConatactForm;
