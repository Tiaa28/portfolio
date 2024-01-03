"use client";
import sendedEmail from "@/libs/senderMail";
import WOWInit from "@/libs/wow";
import { useRef, useState } from "react";
import {
  PiPaperPlaneRightDuotone,
  PiInstagramLogoDuotone,
  PiLinkedinLogoDuotone,
  PiGithubLogoDuotone,
  PiPaperPlaneTiltDuotone 
} from "react-icons/pi";
import { toast } from "react-toastify";

const Page = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleValue = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Sending email...");
    setLoading(true);
    const sending = await sendedEmail(data);

    // console.log(sending);
    

    if (sending.ok) {
      form.current.reset();
      setLoading(false);
      return toast.update(loadingToast, {
        type: "success",
        render: sending.message,
        isLoading: false,
        autoClose: 4000
      });
    } else {
      setLoading(false);
      return toast.update(loadingToast, {
        type: "error",
        render: "Something went wrong!",
        isLoading: false,
        autoClose: 4000
      });
    }
  };

  return (
    <section
      className="min-h-screen overflow-hidden h-full w-full flex items-center justify-center"
      id="contact"
    >
      <WOWInit />
      <div className="container mx-auto pt-4 md:px-0 px-4">
        <div className="flex justify-center items-start gap-10 h-[70vh]">
          <div className="w-full">
            <h2
              className="text-color-white font-bold capitalize mb-1 text-2xl wow fadeInUp"
              data-wow-delay="0.2s"
            >
              Get in touch
            </h2>
            <p
              className="mb-4 text-color-grey wow fadeInUp"
              data-wow-delay="0.2s"
            >
              I'm interested in freelance. However, if you have other request or
              question, don't hesitate to use the form.
            </p>
            <div className="flex md:flex-row flex-col md:gap-3 gap-5">
              <form
                onSubmit={handleSubmit}
                method="POST"
                ref={form}
                className="basis-[80%] flex flex-col gap-3 justif-center items-center w-full wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  onChange={handleValue}
                  placeholder="Type your name"
                  className="w-full rounded-md bg-color-hover-bg-nav border border-color-grey placeholder:text-color-grey text-color-white px-2 py-1 focus:border-color-green outline-none focus:bg-color-card-bg"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleValue}
                  required
                  placeholder="Type your email"
                  className="w-full rounded-md bg-color-hover-bg-nav border border-color-grey placeholder:text-color-grey text-color-white px-2 py-1 focus:border-color-green outline-none focus:bg-color-card-bg"
                />
                <textarea
                  name="message"
                  id="message"
                  rows="8"
                  onChange={handleValue}
                  required
                  placeholder="Type your message"
                  className="w-full resize-none rounded-md bg-color-hover-bg-nav border border-color-grey placeholder:text-color-grey text-color-white px-2 py-1 focus:border-color-green outline-none focus:bg-color-card-bg"
                ></textarea>
                <div className="flex justify-start items-center w-full">
                  {!loading ? (
                    <button
                      type="submit"
                      className="flex justify-center items-center gap-1 hover:gap-3 bg-gradient rounded-md hover:bg-gradient-hover py-2 px-4 text-color-white"
                    >
                      <PiPaperPlaneTiltDuotone  /> Send
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="flex justify-center items-center gap-1 bg-gradient rounded-md py-2 px-4 text-color-white"
                    >
                      <PiPaperPlaneRightDuotone /> Sending...
                    </button>
                  )}
                </div>
              </form>
              <div className="basis-[20%] flex flex-row md:flex-col gap-3 w-full items-center justify-start">
                <a
                  href="https://www.instagram.com/tynndr_"
                  target="_blank"
                  className="px-5 py-4 h-full overflow-hidden rounded-md border bg-color-hover-bg-nav hover:bg-color-card-bg hover:border-color-green border-color-grey w-full flex justify-center items-center wow bounceInRight"
                  data-wow-delay="0.3s"
                >
                  <PiInstagramLogoDuotone />
                </a>
                <a
                  href="https://www.linkedin.com/in/tianiandari/"
                  target="_blank"
                  className="px-5 py-4 h-full overflow-hidden rounded-md border bg-color-hover-bg-nav hover:bg-color-card-bg hover:border-color-green border-color-grey w-full flex justify-center items-center wow bounceInRight"
                  data-wow-delay="0.5s"
                >
                  <PiLinkedinLogoDuotone />
                </a>
                <a
                  href="https://github.com/tiaa28"
                  target="_blank"
                  className="px-5 py-4 h-full overflow-hidden rounded-md border bg-color-hover-bg-nav hover:bg-color-card-bg hover:border-color-green border-color-grey w-full flex justify-center items-center wow bounceInRight"
                  data-wow-delay="0.7s"
                >
                  <PiGithubLogoDuotone />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
