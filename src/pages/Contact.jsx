import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function Contact() {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mppdzkbq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-16 pb-32 min-h-[calc(100vh-100px)] flex flex-col justify-center">
      <div className="max-w-[900px]">
        {/* Header */}
        <motion.div {...fadeUp}>
          <span className="text-[0.75rem] tracking-[0.2em] uppercase text-sage font-medium">
            04 — Contact
          </span>
          <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] text-teal mt-6 mb-8">
            Let's build <br />
            <span className="italic">something</span> together.
          </h1>
        </motion.div>

        {/* Intro Text */}
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="text-charcoal/70 text-lg md:text-xl leading-relaxed max-w-[500px] mb-12"
        >
          I'm currently open to junior full-stack and backend engineering roles.
          Whether you have an opportunity to discuss, a project in mind, or
          simply want to connect, my inbox is always open.
        </motion.p>

        {/* Email CTA */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="mb-16"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-4 text-2xl md:text-3xl font-display text-teal hover:text-sage transition-colors duration-300 no-underline group break-all"
          >
            {profile.email}
            <span className="text-sage group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>

        {/* Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT: CONTACT FORM */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="bg-white border border-charcoal/10 rounded-3xl p-6 md:p-8 shadow-sm"
          >
            <h2 className="font-display text-2xl text-teal mb-6">
              Send me a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl border border-charcoal/20 bg-cream/50 text-charcoal focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-xl border border-charcoal/20 bg-cream/50 text-charcoal focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-charcoal/20 bg-cream/50 text-charcoal focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full px-8 py-3.5 bg-teal text-cream rounded-xl font-medium text-[0.9rem] transition-all hover:bg-charcoal hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sage font-medium mt-4 text-center">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 font-medium mt-4 text-center">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>

          {/* RIGHT: CONTACT DETAILS */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="bg-white border border-charcoal/10 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col gap-6"
          >
            <h2 className="font-display text-2xl text-teal mb-2">
              Direct Contact
            </h2>

            {/* Phone */}
            <a
              href="tel:0909621699"
              className="group no-underline flex items-center justify-between border-b border-charcoal/5 pb-4"
            >
              <div>
                <h3 className="text-[0.75rem] uppercase tracking-wider text-charcoal/50 mb-1">
                  Phone
                </h3>
                <p className="text-teal font-medium group-hover:text-sage transition-colors text-[1.05rem]">
                  0909621699
                </p>
              </div>
              <span className="text-sage text-xl group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/haneney"
              target="_blank"
              rel="noreferrer"
              className="group no-underline flex items-center justify-between border-b border-charcoal/5 pb-4"
            >
              <div>
                <h3 className="text-[0.75rem] uppercase tracking-wider text-charcoal/50 mb-1">
                  Telegram
                </h3>
                <p className="text-teal font-medium group-hover:text-sage transition-colors text-[1.05rem]">
                  @haneney
                </p>
              </div>
              <span className="text-sage text-xl group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group no-underline flex items-center justify-between border-b border-charcoal/5 pb-4"
            >
              <div>
                <h3 className="text-[0.75rem] uppercase tracking-wider text-charcoal/50 mb-1">
                  LinkedIn
                </h3>
                <p className="text-teal font-medium group-hover:text-sage transition-colors text-[1.05rem]">
                  Yeabsira Assegid
                </p>
              </div>
              <span className="text-sage text-xl group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </a>

            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group no-underline flex items-center justify-between border-b border-charcoal/5 pb-4"
            >
              <div>
                <h3 className="text-[0.75rem] uppercase tracking-wider text-charcoal/50 mb-1">
                  GitHub
                </h3>
                <p className="text-teal font-medium group-hover:text-sage transition-colors text-[1.05rem]">
                  @Yayasho
                </p>
              </div>
              <span className="text-sage text-xl group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </a>

            {/* Location */}
            <div className="flex items-center justify-between pt-2">
              <div>
                <h3 className="text-[0.75rem] uppercase tracking-wider text-charcoal/50 mb-1">
                  Location
                </h3>
                <p className="text-teal font-medium text-[1.05rem]">
                  {profile.location}
                </p>
              </div>
              <span className="text-sage text-xl">📍</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
