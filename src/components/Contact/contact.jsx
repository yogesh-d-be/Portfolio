import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spin } from "antd";
import "antd/dist/reset.css";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import fadeIn from "../variants";
import "./contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    mobileNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, emailId, mobileNumber, message } = formData;

    if (name === "") {
      toast.error("Enter Your FullName!");
      return;
    } else if (emailId === "") {
      toast.error("Enter Your Email!");
      return;
    } else if (!emailId.includes("@")) {
      toast.error("Enter Valid Email!");
      return;
    } else if (mobileNumber === "") {
      toast.error("Enter Your Mobile Number!");
      return;
    } else if (mobileNumber.length !== 10) {
      toast.error("Enter valid Mobile Number!");
      return;
    } else if (message === "") {
      toast.error("Enter Message!");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "https://contact-wgqw.onrender.com/api/contact/form",
        formData
      );
      if (response.status === 200) {
        toast.success("Contact form submitted", {
          position: "bottom-right",
        });
        setFormData({
          name: "",
          emailId: "",
          mobileNumber: "",
          message: "",
        });
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error(err.response?.data?.message || "Something went wrong", {
        position: "bottom-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChat = async () => {
    const { mobileNumber } = formData;

    try {
      const { value: whatsappNumber } = await Swal.fire({
        title: "Enter Whatsapp Number",
        input: "text",
        inputValue: mobileNumber,
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        customClass: {
          title: "swal-title",
        },
        inputValidator: (value) => {
          if (!value) {
            return "Enter Mobile Number!";
          } else if (value.length !== 10) {
            return "Enter Valid Mobile Number!";
          }
          return null;
        },
      });

      if (whatsappNumber) {
        const result = await Swal.fire({
          title: `Your Whatsapp Number is ${whatsappNumber}`,
          showCancelButton: true,
          confirmButtonText: "Confirm",
          cancelButtonText: "Edit",
          customClass: {
            title: "swal-title",
          },
        });

        if (result.isConfirmed) {
          const Number = "6374694062";
          const message = `Hello, I would like to work together.`;
          const whatsappUrl = `https://wa.me/${Number}?text=${encodeURIComponent(
            message
          )}`;

          window.open(whatsappUrl, "_blank");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          handleChat(); //call the function again after click edit button
        }
      }
    } catch (error) {
      toast.error("Something went wrong, check after sometime!");
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup((prevPopup) => !prevPopup);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="whole">
        <div className="contact-form-wrapper">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="contact-container"
          >
            <motion.div
              variants={fadeIn("left", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="contact-info"
            >
              <h1>Let's Work Together</h1>
              <p>Nice hearing from you!</p>
              <img
                src={require("../../assets/Personal_email.png")}
                alt="email"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="contact-form-container"
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailId">Email:</label>
                  <input
                    type="email"
                    id="emailId"
                    name="emailId"
                    value={formData.emailId}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number:</label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="submit-button"
                  disabled={loading}
                >
                  {loading ? <Spin size="small" /> : "Submit"}
                </button>
              </form>
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
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          id="whatsapp"
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="whatsapp-box"
        >
          <img
            src={require("../../assets/whatsapp.png")}
            alt="whatsapp"
            className="whatsapp"
            onClick={handleChat}
          />
        </motion.div>
        {showPopup && (
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="popup-animation"
          >
            <div className="typing-animation">Chat with me</div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ContactForm;
