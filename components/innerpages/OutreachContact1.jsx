"use client";
import Image from "next/image";
import { useState } from "react";

export default function OutreachContact1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    setIsError(false);
    setFormSubmittedSuccessfully(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message);
        setFormSubmittedSuccessfully(true);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      } else {
        setResponseMessage(data.message || "Something went wrong.");
        setIsError(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("Failed to send message. Please try again later.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute rotate-45"
          style={{ top: "30%", left: "18%" }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
            src="/assets/images/template/star-1.svg"
          />
        </div>
        <div
          className="position-absolute  rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
            src="/assets/images/template/star-2.svg"
          />
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Let's get in touch.
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                We're here to help. Feel free to reach out to us using the options below, and our dedicated team will respond to your inquiries promptly.
              </p>
            </div>
            <div className="panel rounded-3 overflow-hidden bg-secondary dark:bg-gray-800">
              <div className="panel row child-cols-12 lg:child-cols-6 g-0 min-h-[650px]">
                <div className="order-1 lg:order-0">
                  <div className="panel overflow-hidden rounded-3 h-100 min-h-350px">
                    <figure className="panel h-100 m-0 rounded">
                      <canvas className="h-100 w-100" />
                      <Image
                        className="media-cover image"
                        alt="Hero image"
                        src="/assets/images/template/hero-contact.jpg"
                        width="1500"
                        height="1000"
                      />
                    </figure>
                    <div className="position-cover text-white vstack justify-end p-4 lg:p-6 xl:p-9">
                      <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-50" />
                      <div className="panel z-1">
                        <div className="vstack gap-3">
                          <p className="fs-5 xl:fs-4 fw-medium">
                            “Outreach Panda has been a game-changer for our business. Their targeted outreach campaigns have consistently delivered high-quality leads, and their team is a pleasure to work with.”
                          </p>
                          <div className="vstack gap-0">
                            <p className="fs-6 lg:fs-5 fw-medium">
                              Jane Doe
                            </p>
                            <span className="fs-7 opacity-80">
                              Marketing Manager
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-0 lg:order-1">
                  {formSubmittedSuccessfully || isError ? (
                    <div className="vstack gap-4 p-3 sm:p-6 xl:p-8 text-center justify-center items-center">
                      {formSubmittedSuccessfully ? (
                        <Image
                          src="/assets/images/contact/mailsuccess.png"
                          alt="Success"
                          width={200}
                          height={200}
                        />
                      ) : (
                        <Image
                          src="/assets/images/contact/mailfailure.png"
                          alt="Failure"
                          width={200}
                          height={200}
                        />
                      )}
                      <h2 className={`text-2xl font-bold ${formSubmittedSuccessfully ? "text-green-500" : "text-red-500"}`}>
                        {formSubmittedSuccessfully ? "Message Sent!" : "Message Failed!"}
                      </h2>
                      <p className={`text-lg ${formSubmittedSuccessfully ? "text-green-500" : "text-red-500"}`}>
                        {formSubmittedSuccessfully
                          ? "Thank you for reaching out. We have received your message and will get back to you shortly."
                          : "Unfortunately, there was an issue sending your message. Please try again or contact us directly."}
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="vstack gap-2 p-3 sm:p-6 xl:p-8"
                    >
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                        Have a question or feedback? Fill out the form below, and
                        we'll get back to you as soon as possible.
                      </p>
                      <div className="row child-cols-12 sm:child-cols-6 g-2">
                        <div>
                          <input
                            className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                            type="text"
                            placeholder="Full name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <input
                            className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                            type="email"
                            placeholder="Your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <input
                        className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      <textarea
                        className="form-control min-h-150px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                        placeholder="Your message.."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        defaultValue=""
                      />
                      <button
                        className="btn btn-primary btn-md text-white mt-2"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send message"}
                      </button>
                      {responseMessage && !formSubmittedSuccessfully && (
                        <p className={`text-center ${isError ? "text-red-500" : "text-green-500"}`}>
                          {responseMessage}
                        </p>
                      )}
                      <p className="text-center">
                        Or drop us a message via
                        <a className="uc-link" href="mailto:hello@outreachpanda.co">
                          email
                        </a>
                        .
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
