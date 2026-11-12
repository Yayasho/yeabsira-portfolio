import { motion } from "framer-motion";
import { journey } from "../data";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function Journey() {
  // Split the first item (featured) from the rest
  const featuredItem = journey[0];
  const otherItems = journey.slice(1);

  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-16 pb-32 min-h-[calc(100vh-100px)]">
      {/* Page Header */}
      <motion.div {...fadeUp} className="mb-16 max-w-[800px]">
        <span className="text-[0.75rem] tracking-[0.2em] uppercase text-sage font-medium">
          03 — The Journal
        </span>
        <h1 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.1] text-teal mt-4">
          Notes on my <span className="italic">journey</span>.
        </h1>
      </motion.div>

      {/* Featured Entry (The first item) */}
      {featuredItem && (
        <motion.article
          {...fadeUp}
          className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white border border-charcoal/10 rounded-[2rem] overflow-hidden mb-16 shadow-sm hover:shadow-xl transition-all duration-500"
        >
          {/* Abstract Cover / Image Placeholder */}
          <div className="h-[300px] md:h-[400px] bg-gradient-to-br from-sage to-teal relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            <span className="absolute top-6 left-6 text-[0.7rem] uppercase tracking-widest font-semibold text-white bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full">
              Featured Entry
            </span>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 pr-8 md:pr-16">
            <span className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-sage bg-cream px-4 py-1.5 rounded-full mb-6 inline-block">
              {featuredItem.type}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-teal mb-3">
              {featuredItem.title}
            </h2>
            <p className="text-charcoal/60 font-medium mb-6 text-sm uppercase tracking-wider">
              {featuredItem.org}{" "}
              <span className="mx-2 text-charcoal/30">•</span>{" "}
              {featuredItem.period}
            </p>
            <p className="text-charcoal/80 leading-relaxed text-lg">
              {featuredItem.description ||
                "A key milestone in my professional and academic growth."}
            </p>
          </div>
        </motion.article>
      )}

      {/* Grid for the rest of the entries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {otherItems.map((item, index) => (
          <motion.article
            key={item.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: index * 0.1 }}
            className="group flex flex-col justify-between bg-white border border-charcoal/10 rounded-[2rem] p-8 md:p-10 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-teal bg-cream px-4 py-1.5 rounded-full">
                  {item.type}
                </span>
                <span className="text-sage font-display italic text-xl">
                  0{index + 2}
                </span>
              </div>

              <h2 className="font-display text-2xl md:text-3xl text-teal mb-2 group-hover:text-sage transition-colors duration-300">
                {item.title}
              </h2>
              <p className="text-charcoal/60 font-medium mb-6 text-sm">
                {item.org} <span className="mx-2 text-charcoal/30">•</span>{" "}
                {item.period}
              </p>

              <p className="text-charcoal/80 leading-relaxed text-[1.05rem]">
                {item.description ||
                  "A key milestone in my professional and academic growth."}
              </p>
            </div>

            <div className="w-full h-px bg-charcoal/10 mt-8 group-hover:bg-sage/30 transition-colors duration-500" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
