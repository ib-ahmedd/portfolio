"use client";
import { LabeledInput } from "@components";
import { inputsArray } from "@constants";
import { faCheck, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inputs } from "@types";
import { useState } from "react";

function Contact() {
  const [inputs, setInputs] = useState<Inputs>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState(0);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
    setError(false);
    setFormSubmitted(false);
  }

  function checkFormComplete(): boolean {
    const inputsArray = Object.values(inputs);
    if (inputsArray.length === 5 && !inputsArray.includes("")) {
      return true;
    } else {
      return false;
    }
  }

  async function handleSendMessage() {
    setSending(true);
    setError(false);
    if (checkFormComplete()) {
      try {
        const response = await fetch("/api/send-mail", {
          method: "POST",
          body: JSON.stringify(inputs),
        });

        if (response.status === 200) {
          setMessageSent(true);
        } else {
          setError(true);
          setErrorType(102);
        }
      } catch (err) {
        setError(true);
        setErrorType(102);
        console.log(err);
      }
    } else {
      setFormSubmitted(true);
      setError(true);
      setErrorType(101);
    }
    setSending(false);
  }

  function handleResendMessage() {
    setMessageSent(false);
    setError(false);
    setInputs((prev) => {
      return { ...prev, message: "", subject: "" };
    });
  }

  return (
    <section
      className="w-full px-4 sm:px-8 md:px-24 py-12 md:py-32"
      id="contact"
    >
      {!messageSent && (
        <form
          className="flex flex-col gap-4 w-full md:max-w-[35em] rounded-xl"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          data-aos="zoom-out"
        >
          <h2 className="text-3xl font-bold">Get in touch</h2>
          <p className="text-lg">
            Have any questions or need assistance? Contact me today!
          </p>
          <div className="flex flex-col md:flex-row flex-wrap justify-between">
            {inputsArray.map((item) => (
              <LabeledInput
                key={item.inputName}
                {...item}
                formSubmitted={formSubmitted}
                inputs={inputs}
                handleChange={handleChange}
              />
            ))}
          </div>
          <label htmlFor="message">
            Message<span className="text-red-500"> *</span>
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={inputs["message"]}
            className={`bg-transparent border ${
              formSubmitted && (inputs && inputs["message"]) === ""
                ? "border-red-500"
                : "border-navbar-light-b dark:border-border-grey"
            } h-24 p-2 focus:outline-none focus:border-site-orange-hover rounded`}
          />
          {error && (
            <div className="relative">
              <div className="absolute w-full h-full bg-red-600 dark:bg-red-400 opacity-10 rounded-lg" />
              {errorType === 101 ? (
                <p className="text-red-600 dark:text-red-400 font-bold text-sm p-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faWarning} /> Fill all input fields!
                </p>
              ) : (
                <p className="text-red-600 dark:text-red-400 font-bold text-sm p-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faWarning} /> Error sending message!{" "}
                  <span className="font-normal">Please try again.</span>
                </p>
              )}
            </div>
          )}
          {sending ? (
            <button
              className="bg-site-text-gray py-2 text-white rounded"
              disabled
            >
              sending...
            </button>
          ) : (
            <button className="bg-site-orange hover:bg-site-orange-hover py-2 text-white rounded">
              Send message
            </button>
          )}
        </form>
      )}

      {messageSent && (
        <div className="flex flex-col justify-center items-center gap-4 w-full h-[35em] md:max-w-[35em] rounded-xl relative">
          <div className="absolute w-full h-full bg-site-green-light dark:bg-site-green opacity-10 rounded-xl" />
          <div className="flex flex-col items-center text-site-green-light dark:text-site-green p-4 z-10 text-center">
            <p className="font-bold flex flex-col md:flex-row items-center md:items-baseline gap-2">
              <span className="bg-site-green-light dark:bg-site-green min-w-7 min-h-7 rounded-full text-white dark:text-body-dark flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Thank you! Your message has been successfully sent.
            </p>
            <p>I will contact you soon.</p>
          </div>
          <button
            className="bg-site-orange hover:bg-site-orange-hover text-white py-1 px-4 rounded z-10"
            onClick={handleResendMessage}
          >
            Resend message
          </button>
        </div>
      )}
    </section>
  );
}

export default Contact;
