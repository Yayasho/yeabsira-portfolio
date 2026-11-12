import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function Work() {
  // State to manage the open project gallery
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-32 min-h-[calc(100vh-100px)]">
      {/* Page Header */}
      <motion.div {...fadeUp} className="mb-20">
        <span className="text-[0.75rem] tracking-[0.2em] uppercase text-sage font-medium">
          02 — Selected Work
        </span>
        <h1 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.1] text-teal mt-4">
          Projects & <span className="italic">Experiments</span>.
        </h1>
      </motion.div>

      {/* Projects List */}
      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: index * 0.1 }}
            className="group relative grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-center"
          >
            {/* Left Side — Number & Title */}
            <div className="lg:text-right">
              <span className="text-sage font-display italic text-2xl mb-4 block">
                0{index + 1}
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-teal mb-4 group-hover:text-sage transition-colors duration-300">
                {project.title}
              </h2>
              <div className="flex flex-wrap lg:justify-end gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[0.75rem] uppercase tracking-wider text-charcoal/60 bg-grey/50 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side — Details (White Card) */}
            <div className="bg-white border border-charcoal/10 rounded-3xl p-8 md:p-10 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1 flex flex-col justify-between h-full">
              <div>
                <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                  {project.summary}
                </p>

                {project.bullets && project.bullets.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {project.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-charcoal/70"
                      >
                        <span className="text-sage mt-1">✦</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* View Screenshots Button */}
              {project.images && project.images.length > 0 && (
                <div className="pt-6 border-t border-charcoal/10 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal text-cream rounded-full font-medium text-[0.9rem] transition-all hover:bg-charcoal hover:scale-105 cursor-pointer"
                  >
                    View Project Screenshots ↗
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* PROJECT SCREENSHOTS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 backdrop-blur-sm p-4 md:p-12">
          <div className="relative w-full max-w-5xl h-[90vh] bg-cream rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-5 border-b border-charcoal/10 bg-white">
              <h3 className="font-display text-xl text-teal truncate pr-4">
                {selectedProject.title} — Screenshots
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-charcoal/5 hover:bg-charcoal/10 text-charcoal transition-colors cursor-pointer"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Gallery Viewer */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-10 bg-cream">
              {selectedProject.images.map((img, i) => (
                <div key={i} className="flex flex-col gap-3">
                  {/* Image */}
                  <div className="w-full rounded-xl overflow-hidden border border-charcoal/10 shadow-sm bg-white">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* Caption */}
                  <p className="text-charcoal/70 text-sm md:text-base font-medium px-2 flex items-center gap-2">
                    <span className="text-sage text-lg">✦</span>
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
