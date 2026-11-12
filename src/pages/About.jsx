import { motion } from "framer-motion";
import { profile, skills } from "../data";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function About() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-24 min-h-[calc(100vh-100px)]">
      {/* Page Header */}
      <motion.div {...fadeUp} className="mb-20">
        <span className="text-[0.75rem] tracking-[0.2em] uppercase text-sage font-medium">
          01 — About
        </span>
        <h1 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.1] text-teal mt-4">
          The person <span className="italic">behind</span> the code.
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
        {/* LEFT — Sidebar / Quick Info */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-[0.8rem] uppercase tracking-wider text-charcoal/50 mb-2">
              Location
            </h3>
            <p className="text-teal font-medium">{profile.location} 
            </p>
          </div>
          <div>
            <h3 className="text-[0.8rem] uppercase tracking-wider text-charcoal/50 mb-2">
              Education
            </h3>
            <p className="text-teal font-medium">BSc Software Engineering</p>
            <p className="text-charcoal/70 text-sm">Jigjiga University, 2026</p>
          </div>
          <div>
            <h3 className="text-[0.8rem] uppercase tracking-wider text-charcoal/50 mb-2">
              Status
            </h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              <p className="text-teal font-medium">Open to work</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Main Text & Skills */}
        <div className="space-y-16">
          {/* Bio */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="space-y-6 text-lg text-charcoal/80 leading-relaxed"
          >
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
          >
            <h2 className="font-display text-2xl text-teal mb-6">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="text-[0.8rem] uppercase tracking-wider text-sage font-semibold mb-4">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-3 text-charcoal/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-grey" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
