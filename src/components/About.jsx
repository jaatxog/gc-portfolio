import { motion } from "framer-motion";
import { profile, education } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[#00ff9f] text-xs tracking-widest mb-2">
            <span className="text-slate-500">$ </span>cat about.md
          </div>
          <h2 className="font-display text-4xl font-bold text-white">
            ABOUT <span className="gradient-text">ME</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glow-border corner-box bg-[#0a1628] rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#0f2545]">
                <span className="text-[#00ff9f] font-mono text-xs">// PROFILE</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm">
                {profile.bio}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "LOCATION", value: "Jaipur, India" },
                  { label: "STATUS", value: "Open to Opportunities" },
                  { label: "EXPERIENCE", value: "2+ Years" },
                  { label: "CERTS", value: "RHCE, RHCSA, OCI, AWS" },
                ].map(item => (
                  <div key={item.label}>
                    <div className="font-mono text-xs text-slate-500 mb-1">{item.label}</div>
                    <div className="font-mono text-xs text-[#00ff9f]">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="flex gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2.5 font-mono text-xs glow-border text-[#00d4ff] rounded hover:bg-[#00d4ff]/10 transition-all"
              >
                LINKEDIN ↗
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2.5 font-mono text-xs border border-[#0f2545] text-slate-400 rounded hover:border-[#00ff9f]/40 hover:text-[#00ff9f] transition-all"
              >
                GITHUB ↗
              </a>
            </div>
          </motion.div>

          {/* Education + Journey */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="glow-border corner-box bg-[#0a1628] rounded-lg p-6">
              <div className="font-mono text-xs text-[#00ff9f] mb-4 pb-3 border-b border-[#0f2545]">
                // EDUCATION
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9f] mt-1.5 flex-shrink-0" />
                    <div>
                      <div className="text-white text-sm font-semibold">{edu.degree}</div>
                      <div className="text-slate-400 text-xs">{edu.school}</div>
                      <div className="text-[#00ff9f] font-mono text-xs mt-0.5">{edu.year}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Journey stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: "2+", label: "YRS EXP" },
                { val: "4", label: "CERTS" },
                { val: "6+", label: "PROJECTS" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glow-border bg-[#0a1628] rounded-lg p-4 text-center"
                >
                  <div className="font-display text-2xl font-bold gradient-text">{stat.val}</div>
                  <div className="font-mono text-xs text-slate-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Hobbies */}
            <div className="glow-border bg-[#0a1628] rounded-lg p-5">
              <div className="font-mono text-xs text-slate-500 mb-3">// PERSONAL</div>
              <div className="flex flex-wrap gap-2">
                {["🎮 Video Games", "🎵 Music", "🏏 Cricket", "🏐 Volleyball", "🐧 Linux Tinkering"].map(h => (
                  <span key={h} className="font-mono text-xs px-2.5 py-1 bg-[#0f2545] text-slate-300 rounded-sm">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
