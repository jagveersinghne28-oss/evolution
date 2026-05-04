import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import { getDevice } from "../utils/functions";
import { Select } from "antd";
import { ICONS } from "../utils/constants";

// Initialize EmailJS (replace with your public key)
emailjs.init("sdmQKcQKkiFP9EOQf");

function Feature({ icon, title, children }) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        textAlign: "center",
        minWidth: 200,
      }}
    >
      <div
        style={{
          background: "#fff3e0",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 60,
          height: 60,
        }}
      >
        {icon}
      </div>
      <div style={{ fontWeight: 700 }}>{title}</div>
      <div style={{ color: "#6b7280", fontSize: 14 }}>{children}</div>
    </div>
  );
}

function Step({ num, title, children }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "#082b51",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 700,
          fontSize: 18,
          flexShrink: 0,
        }}
      >
        {num}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: "1rem" }}>{title}</div>
        <div style={{ color: "#6b7280", fontSize: "0.95rem" }}>{children}</div>
      </div>
    </div>
  );
}

function ProfileForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredIndustry: "",
    customIndustry: "",
    yearsExperience: "",
    currentRole: "",
    aboutYou: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, preferredIndustry: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Send email using EmailJS
      const currentTime = new Date().toLocaleString();
      const dynamicTitle = `Job Seeker Profile Submission - ${formData.firstName} ${formData.lastName} (${formData.preferredIndustry === "Other" ? formData.customIndustry : formData.preferredIndustry})`;
      const detailedMessage = `
Job Seeker Profile Submission

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Industry: ${formData.preferredIndustry === "Other" ? formData.customIndustry : formData.preferredIndustry}
Experience: ${formData.yearsExperience} years
Current Role: ${formData.currentRole}
Submission Time: ${currentTime}

About You:
${formData.aboutYou}
      `;

      await emailjs.send("service_0tsf1ci", "template_a6zpso3", {
        title: dynamicTitle,
        name: `${formData.firstName} ${formData.lastName}`,
        time: currentTime,
        message: detailedMessage,
      });

      setMessage(
        "✅ Profile submitted successfully! We will contact you soon.",
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredIndustry: "",
        customIndustry: "",
        yearsExperience: "",
        currentRole: "",
        aboutYou: "",
      });
    } catch (error) {
      setMessage("❌ Error submitting profile. Please try again.");
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
        maxWidth: 720,
        margin: "0 auto",
      }}
    >
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
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
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
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
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
            E-Mail *
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
            Preferred Industry *
          </label>
          <Select
            name="preferredIndustry"
            value={formData.preferredIndustry}
            onChange={handleSelectChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #d1d5db",
              borderRadius: 6,
              fontSize: "0.95rem",
              boxSizing: "border-box",
            }}
          >
            <Select.Option value="">Select an industry</Select.Option>
            <Select.Option value="IT & technology">
              IT & technology
            </Select.Option>
            <Select.Option value="Banking & Finance">
              Banking & Finance
            </Select.Option>
            <Select.Option value="Retail">Retail</Select.Option>
            <Select.Option value="Security">Security</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
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
            Years of Experience *
          </label>
          <input
            type="text"
            name="yearsExperience"
            value={formData.yearsExperience}
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

      {formData.preferredIndustry === "Other" && (
        <div style={{ marginBottom: 16 }}>
          <label
            style={{
              display: "block",
              color: "#082b51",
              fontWeight: 600,
              marginBottom: 6,
              fontSize: "0.9rem",
            }}
          >
            Please specify your industry *
          </label>
          <input
            type="text"
            name="customIndustry"
            value={formData.customIndustry}
            onChange={handleChange}
            required
            placeholder="Enter your industry"
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
      )}
      <label
        style={{
          display: "block",
          color: "#082b51",
          fontWeight: 600,
          marginBottom: 6,
          fontSize: "0.9rem",
        }}
      >
        Current/Last Role
      </label>
      <input
        type="text"
        name="currentRole"
        value={formData.currentRole}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px 12px",
          border: "1px solid #d1d5db",
          borderRadius: 6,
          fontSize: "0.95rem",
          boxSizing: "border-box",
        }}
      />

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
          Tell us about yourself
        </label>
        <textarea
          name="aboutYou"
          value={formData.aboutYou}
          onChange={handleChange}
          rows="5"
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
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      {message && (
        <div
          style={{
            marginTop: 12,
            padding: 12,
            borderRadius: 6,
            textAlign: "center",
            background: message.includes("✅") ? "#d1fae5" : "#fee2e2",
            color: message.includes("✅") ? "#065f46" : "#991b1b",
          }}
        >
          {message}
        </div>
      )}
    </form>
  );
}

export default function JobSeekers() {
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
            Find Your Dream Job
          </h1>
          <p style={{ color: "#6b7280", maxWidth: 720, margin: "18px auto" }}>
            Join thousands of professionals who have found their perfect role
            through Evolution Management Services
          </p>
        </div>
      </section>

      <section style={{ padding: "40px 0" }}>
        <div
          className="container"
          style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Feature
            icon={
              <img
                src={ICONS.innovation}
                alt="Adaptation"
                style={{ width: "50%", height: "auto", borderRadius: 6 }}
              />
            }
            title="Access Top Opportunities"
          >
            Connect with leading employers across IT, Banking, Retail, and
            Hospitality.
          </Feature>
          <Feature
            icon={
              <img
                src={ICONS.career}
                alt="Career Guidance"
                style={{ width: "50%", height: "auto", borderRadius: 6 }}
              />
            }
            title="Career Guidance"
          >
            Get personalized advice to help you make informed career decisions.
          </Feature>
          <Feature
            icon={
              <img
                src={ICONS.people}
                alt="Multilingual Advantage"
                style={{ width: "50%", height: "auto", borderRadius: 6 }}
              />
            }
            title="Multilingual Advantage"
          >
            We specialize in placing multilingual candidates in premium roles.
          </Feature>
          <Feature
            icon={
              <img
                src={ICONS.free}
                alt="Free Service"
                style={{ width: "40%", height: "auto", borderRadius: 6 }}
              />
            }
            title="Free Service"
          >
            Our placement services are completely free for job seekers.
          </Feature>
        </div>
      </section>

      <section
        style={{
          background: "#fbf6ee",
          padding: "40px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: 32, margin: "0 0 24px" }}>How It Works</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              alignItems: "flex-start",
              maxWidth: 600,
              margin: "0 auto",
              textAlign: devicePrefix === "mobile" ? "left" : "",
            }}
          >
            <Step num="1" title="Submit your profile">
              Fill out the form below with your details and career preferences.
            </Step>
            <Step num="2" title="Get Matched">
              Our team reviews your profile and matches you with suitable
              opportunities.
            </Step>
            <Step num="3" title="Interview Support">
              We prepare you for interviews and guide you through the process.
            </Step>
            <Step num="4" title="Land Your Role">
              Start your new journey with a job that matches your aspirations.
            </Step>
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: 32, margin: "0 0 8px", textAlign: "center" }}>
            Submit Your Profile
          </h2>
          <p
            style={{ color: "#6b7280", marginBottom: 24, textAlign: "center" }}
          >
            Take the first step towards your next career opportunity
          </p>
          <ProfileForm />
        </div>
      </section>

      <Footer dark />
    </div>
  );
}
