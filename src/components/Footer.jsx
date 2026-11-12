import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 mt-20 px-6 md:px-12 py-10 md:py-12 max-w-[1400px] mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        <div>
          <p className="font-display italic text-[1.05rem] text-teal mb-1">
            {profile.name}
          </p>
          <p className="text-[0.78rem] text-charcoal/60 tracking-[0.05em]">
            {profile.location}
          </p>
        </div>

        <div className="flex gap-6 justify-center flex-wrap">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-charcoal/60 hover:text-teal text-[0.82rem] uppercase tracking-[0.04em] no-underline transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-charcoal/60 hover:text-teal text-[0.82rem] uppercase tracking-[0.04em] no-underline transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-charcoal/60 hover:text-teal text-[0.82rem] uppercase tracking-[0.04em] no-underline transition-colors duration-300"
          >
            Email
          </a>
        </div>

        <p className="text-[0.75rem] text-charcoal/50 tracking-[0.05em] md:text-right">
          © {new Date().getFullYear()} — Built with React
        </p>
      </div>
    </footer>
  );
}
