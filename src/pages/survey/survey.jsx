/**
 * SurveyForm.jsx
 * ----------------
 * New version with EmailJS integration + environment variables
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useFormData } from "../../FormContext";
import "./survey.css";

const logo =
  "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759347257/Primary_Light_oeo21s.svg";

const steps = [
  {
    label: "Describe your product or service.",
    placeholder: "What do you do?",
    name: "brandService",
  },
  {
    label: "Target Audience",
    placeholder: "Who are your target audience?",
    name: "targetAudience",
  },
  {
    label: "What’s the story behind your business?",
    placeholder: "What inspired you to begin this journey?",
    name: "businessWhy",
  },
  {
    label: "How should customers see your brand?",
    placeholder: "e.g. expensive, playful, etc",
    name: "customerImpression",
  },
  {
    label: "How can we contact you?",
    placeholder: "Add Email/WhatsApp Phone Number",
    name: "contact",
  },
];

const SurveyForm = () => {
  const { brandName } = useFormData();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    brandService: "",
    targetAudience: "",
    businessWhy: "",
    customerImpression: "",
    contact: "",
  });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [steps[step].name]: e.target.value });
  };

  const handleNext = async () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
      return;
    }

    // Final step → send email
    setLoading(true);
    setServerError(null);

    const templateParams = {
      brand_name: brandName || "N/A",
      brand_service: form.brandService || "N/A",
      target_audience: form.targetAudience || "N/A",
      business_why: form.businessWhy || "N/A",
      customer_impression: form.customerImpression || "N/A",
      contact: form.contact || "N/A",
      submitted_at: new Date().toLocaleString(),
    };

    try {
      const res = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
              );
      console.log("✅ Email sent:", res.status, res.text);
      setDone(true);
    } catch (err) {
      console.error("❌ EmailJS Error:", err);
      setServerError("Failed to send survey. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="survey">
      <header className="survey__header">
        <h1>Hello, {brandName}</h1>
        <p>
          We would love to know more about your brand. Kindly fill this short
          form so we can get to work!
        </p>
      </header>

      <div className="survey__container">
        {done ? (
          <div className="survey__confirmation">
            <img src={logo} alt="Brand Logo" className="survey__logo" />
            <h2>All done!</h2>
            <p>The Mexuri team will contact you soon.</p>
            <div className="survey__actions">
              <Link to="/portfolio">
                <button className="dashboard-btn">View our Portfolio</button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            {serverError && (
              <div className="server-error" style={{ color: "red" }}>
                {serverError}
              </div>
            )}
            {loading && <div className="loading">Sending...</div>}

            {steps.map((stepObj, i) => {
              if (i < step) return null;
              const isActive = i === step;
              const offsetY = -(i - step) * 15;
              const scale = 1 - (i - step) * 0.06;

              return (
                <div
                  key={i}
                  className={`survey__card${isActive ? " active" : ""}`}
                  style={{
                    top: `calc(50% + ${offsetY}px)`,
                    transform: `translateY(-50%) scale(${scale})`,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <img src={logo} alt="Brand Logo" className="survey__logo" />
                  <label>{stepObj.label}</label>
                  <input
                    type="text"
                    placeholder={stepObj.placeholder}
                    value={form[stepObj.name]}
                    onChange={handleChange}
                    autoFocus={isActive}
                  />
                  {isActive && (
                    <div className="survey__actions">
                      {step > 0 && (
                        <button onClick={handleBack} className="back-btn">
                          Back
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={handleNext}
                        className="next-btn"
                        disabled={loading}
                      >
                        {loading
                          ? "Sending..."
                          : step === steps.length - 1
                          ? "Finish"
                          : "Next"}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default SurveyForm;
