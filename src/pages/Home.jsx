import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";
import { Link } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function Home() {
  const [showCV, setShowCV] = useState(false);

  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-24 md:pt-24 md:pb-32 min-h-[calc(100vh-100px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
          <div className="max-w-[540px]">
            <motion.p
              {...fadeUp}
              className="text-[0.75rem] tracking-[0.2em] uppercase text-sage mb-6 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
              Software Engineer & Creator
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="font-display text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.1] text-teal mb-6 tracking-tight"
            >
              {profile.headlineTop}
              <br />
              <span className="italic text-sage">
                {profile.headlineLines[0]}
              </span>{" "}
              {profile.headlineLines[1]}
              <br />
              {profile.headlineLines[2]}
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="text-charcoal/70 text-[1.05rem] leading-relaxed mb-10 max-w-[460px]"
            >
              {profile.subhead}
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/work"
                className="px-7 py-3.5 bg-teal text-cream rounded-full font-medium text-[0.9rem] no-underline transition-all hover:bg-charcoal hover:-translate-y-0.5 hover:shadow-lg"
              >
                Explore the Work
              </Link>

              {/* CV BUTTON - Opens Modal */}
              <button
                onClick={() => setShowCV(true)}
                className="px-7 py-3.5 bg-transparent border border-charcoal/20 text-charcoal rounded-full font-medium text-[0.9rem] cursor-pointer transition-all hover:border-teal hover:text-teal"
              >
                View CV
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[480px] mx-auto lg:ml-auto"
          >
            <div className="absolute top-12 -right-6 w-full h-full bg-grey rounded-[2.5rem]" />

            <div className="relative z-10 w-[85%] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-charcoal/5 bg-white shadow-xl">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute bottom-12 left-0 z-20 bg-white border border-charcoal/10 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              <span className="text-[0.8rem] font-medium tracking-wide text-teal">
                Available for work
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CV MODAL POPUP */}
      {showCV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/60 backdrop-blur-sm p-4 md:p-12">
          <div className="relative w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header with X Button */}
            <div className="flex justify-between items-center p-4 border-b border-charcoal/10 bg-cream">
              <h3 className="font-display text-xl text-teal">
                Yeabsira Assegid — CV
              </h3>
              <button
                onClick={() => setShowCV(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-charcoal/5 hover:bg-charcoal/10 text-charcoal transition-colors cursor-pointer"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 bg-grey/30">
              <iframe
                src={profile.cvUrl}
                className="w-full h-full border-none"
                title="CV"
              />
            </div>

            {/* Modal Footer with Download Button */}
            <div className="p-4 border-t border-charcoal/10 bg-cream flex justify-end">
              <a
                href={profile.cvUrl}
                download="Yeabsira_Assegid_CV.pdf"
                className="px-6 py-2.5 bg-teal text-cream rounded-full font-medium text-[0.9rem] no-underline hover:bg-charcoal transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
