import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import { ICONS } from "../utils/constants";

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
        maxWidth: 180,
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

function HiringForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industry: "",
    numberOfPositions: "",
    jobRequirements: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const currentTime = new Date().toLocaleString();
      const dynamicTitle = `Hiring Form Submission - ${formData.companyName} (${formData.numberOfPositions} position${formData.numberOfPositions > 1 ? "s" : ""} in ${formData.industry})`;
      const readableMessage = `
Hiring Form Submission

Company Name: ${formData.companyName}
Contact Person: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}
Industry: ${formData.industry}
Number of Positions: ${formData.numberOfPositions}
Submission Time: ${currentTime}

Job Requirements:
${formData.jobRequirements}
      `;

      await emailjs.send("service_0tsf1ci", "template_a6zpso3", {
        title: dynamicTitle,
        email: formData.email,
        name: formData.contactPerson,
        message: readableMessage,
      });

      setMessage(
        "✅ Hiring request submitted successfully! We will contact you within 24 hours.",
      );
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        industry: "",
        numberOfPositions: "",
        jobRequirements: "",
      });
    } catch (error) {
      setMessage("❌ Error submitting request. Please try again.");
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
            Company Name *
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
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
            Contact Person *
          </label>
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
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
            Industry *
          </label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
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
            Number of Positions *
          </label>
          <input
            type="number"
            name="numberOfPositions"
            value={formData.numberOfPositions}
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
          Job Requirements *
        </label>
        <textarea
          name="jobRequirements"
          value={formData.jobRequirements}
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
        {loading ? "Submitting..." : "Submit Request"}
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

export default function Employers() {
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
            Hire Top Talent
          </h1>
          <p style={{ color: "#6b7280", maxWidth: 720, margin: "18px auto" }}>
            Partner with Evolution Management Services to build high-performing
            teams that drive your business forward
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
                src={ICONS.excellence}
                alt="Adaptation"
                style={{ width: "50%", height: "auto", borderRadius: 6 }}
              />
            }
            title="Targeted Matching"
          >
            We understand your requirements and deliver candidates who fit your
            culture and needs.
          </Feature>
          <Feature
            icon={
              <img
                src={ICONS.clock}
                alt="Fast Turnaround"
                style={{ width: "50%", height: "auto", borderRadius: 6 }}
              />
            }
            title="Fast Turnaround"
          >
            Our extensive network enables quick placement without compromising
            on quality.
          </Feature>
          <Feature
            icon={
              <img
                src={ICONS.guard}
                alt="Quality Assurance"
                style={{ width: "50%", height: "auto", borderRadius: 6 }}
              />
            }
            title="Quality Assurance"
          >
            Rigorous screening ensures only qualified candidates reach your
            desk.
          </Feature>
          <Feature
            icon={
              <img
                src={ICONS.people}
                alt="Multilingual Talent"
                style={{ width: "50%", height: "auto", borderRadius: 6 }}
              />
            }
            title="Multilingual Talent"
          >
            Access to a diverse pool of multilingual candidates across India.
          </Feature>
        </div>
      </section>

      <section
        style={{
          background: "#fbf6ee",
          padding: "48px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: 32, margin: "0 0 8px" }}>Service Packages</h2>
          <p style={{ color: "#6b7280", margin: 0 }}>
            Flexible staffing solutions designed to meet your unique business
            needs.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 18,
              marginTop: 24,
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: 20,
                borderRadius: 12,
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              }}
            >
              <h4 style={{ margin: "0 0 8px", fontWeight: 700 }}>
                Executive Search
              </h4>
              <p style={{ color: "#6b7280", fontSize: "0.9rem", margin: 0 }}>
                High-level placements for senior management and leadership
                roles.
              </p>
            </div>
            <div
              style={{
                background: "#fff",
                padding: 20,
                borderRadius: 12,
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              }}
            >
              <h4 style={{ margin: "0 0 8px", fontWeight: 700 }}>
                Permanent Staffing
              </h4>
              <p style={{ color: "#6b7280", fontSize: "0.9rem", margin: 0 }}>
                Full-time placements for all levels and departments.
              </p>
            </div>
            <div
              style={{
                background: "#fff",
                padding: 20,
                borderRadius: 12,
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              }}
            >
              <h4 style={{ margin: "0 0 8px", fontWeight: 700 }}>
                Contract Staffing
              </h4>
              <p style={{ color: "#6b7280", fontSize: "0.9rem", margin: 0 }}>
                Flexible temporary workforce solutions for projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h2 style={{ fontSize: 32, margin: "0 0 8px" }}>
              Submit a Hiring Request
            </h2>
            <p style={{ color: "#6b7280", margin: 0 }}>
              Tell us about your requirements and we'll get back to you within
              24 hours
            </p>
          </div>
          <HiringForm />
        </div>
      </section>

      <Footer dark />
    </div>
  );
}
