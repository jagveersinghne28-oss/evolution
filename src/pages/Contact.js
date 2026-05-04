import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import { getDevice } from "../utils/functions";
import { ICONS } from "../utils/constants";

emailjs.init("sdmQKcQKkiFP9EOQf");

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus("");

    try {
      const currentTime = new Date().toLocaleString();
      const dynamicTitle = `Contact Form Submission - ${formData.name} (${formData.subject})`;
      const readableMessage = `
Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Submission Time: ${currentTime}

Message:
${formData.message}
      `;

      await emailjs.send("service_0tsf1ci", "template_a6zpso3", {
        title: dynamicTitle,
        from_name: formData.name,
        from_email: formData.email,
        name: formData.name,
        message: readableMessage,
      });

      setMessageStatus(
        "✅ Message sent successfully! We will get back to you within 24 hours.",
      );
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setMessageStatus("❌ Error sending message. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 32,
      }}
    >
      <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>
        Send a message
      </h3>
      <p style={{ color: "#6b7280", margin: "0 0 24px", fontSize: "0.9rem" }}>
        Fill out the form and our team will get back to you within 24 hours.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 16,
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              color: "#082b51",
              fontWeight: 600,
              marginBottom: 6,
              fontSize: "0.9rem",
            }}
          >
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #d1d5db",
              borderRadius: 6,
              fontSize: "0.95rem",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              color: "#082b51",
              fontWeight: 600,
              marginBottom: 6,
              fontSize: "0.9rem",
            }}
          >
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #d1d5db",
              borderRadius: 6,
              fontSize: "0.95rem",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              color: "#082b51",
              fontWeight: 600,
              marginBottom: 6,
              fontSize: "0.9rem",
            }}
          >
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #d1d5db",
              borderRadius: 6,
              fontSize: "0.95rem",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              color: "#082b51",
              fontWeight: 600,
              marginBottom: 6,
              fontSize: "0.9rem",
            }}
          >
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #d1d5db",
              borderRadius: 6,
              fontSize: "0.95rem",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label
          style={{
            display: "block",
            color: "#082b51",
            fontWeight: 600,
            marginBottom: 6,
            fontSize: "0.9rem",
          }}
        >
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          style={{
            width: "100%",
            padding: "10px 12px",
            border: "1px solid #d1d5db",
            borderRadius: 6,
            fontSize: "0.95rem",
            boxSizing: "border-box",
            fontFamily: "inherit",
          }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px 16px",
          background: "#082b51",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          fontWeight: 700,
          fontSize: "1rem",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {messageStatus && (
        <div
          style={{
            marginTop: 12,
            padding: 12,
            borderRadius: 6,
            textAlign: "center",
            background: messageStatus.includes("✅") ? "#d1fae5" : "#fee2e2",
            color: messageStatus.includes("✅") ? "#065f46" : "#991b1b",
          }}
        >
          {messageStatus}
        </div>
      )}
    </form>
  );
}

export default function Contact() {
  const devicePrefix = getDevice();
  return (
    <div>
      <section
        style={{
          background: "linear-gradient(90deg,#fff8f0,#fff)",
          padding: "56px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: 42, margin: 0, lineHeight: 1.05 }}>
            Contact Us
          </h1>
          <p style={{ color: "#6b7280", maxWidth: 720, margin: "18px auto" }}>
            Have questions? We'd love to hear from you. Get in touch with our
            team.
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 0" }}>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: devicePrefix === "mobile" ? "none" : "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>
              Get in Touch
            </h2>

            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div
                style={{
                  background: "#ffebc0",
                  borderRadius: 8,
                  padding: 12,
                  width: 60,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  flexShrink: 0,
                }}
              >
                <img
                  src={ICONS.map}
                  alt="Adaptation"
                  style={{ width: "70%", height: "auto", borderRadius: 6 }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>
                  Our Office
                </div>
                <div
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  South Delhi
                  <br />
                  New Delhi, India 11000
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div
                style={{
                  background: "#ffebc0",
                  borderRadius: 8,
                  padding: 12,
                  width: 60,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  flexShrink: 0,
                }}
              >
                <img
                  src={ICONS.office}
                  alt="Phone"
                  style={{ width: "70%", height: "auto", borderRadius: 6 }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Phone</div>
                <div
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  +91 98184 41822
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div
                style={{
                  background: "#ffebc0",
                  borderRadius: 8,
                  padding: 12,
                  width: 60,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  flexShrink: 0,
                }}
              >
                <img
                  src={ICONS.phone}
                  alt="E-mail"
                  style={{ width: "70%", height: "auto", borderRadius: 6 }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>E-mail</div>
                <div
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  info@evolutionms.com
                  <br />
                  careers@evolutionms.com
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div
                style={{
                  background: "#ffebc0",
                  borderRadius: 8,
                  padding: 12,
                  width: 60,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  flexShrink: 0,
                }}
              >
                <img
                  src={ICONS.time}
                  alt="Phone"
                  style={{ width: "70%", height: "auto", borderRadius: 6 }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>
                  Business Hours
                </div>
                <div
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  Monday – Friday: 9:00 AM – 6:00 PM
                  <br />
                  Saturday: 10:00 AM – 2:00 PM
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section style={{ padding: "36px 0", background: "#fff3e0" }}>
        <div className="container">
          <div
            style={{
              height: 400,
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid #ffebc0",
            }}
          >
            <iframe
              title="maps"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572.817399977255!2d77.18613919826548!3d28.56926412027463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d8386f84f47%3A0xe3f0112c4446aad7!2sBHIKAJI%20CAMA%20PLACE%2C%20Bhikaji%20Cama%20Place%2C%20Rama%20Krishna%20Puram%2C%20New%20Delhi%2C%20Delhi%20110066!5e0!3m2!1sen!2sin!4v1777918777439!5m2!1sen!2sin"
            />
          </div>
        </div>
      </section>

      <Footer dark />
    </div>
  );
}
