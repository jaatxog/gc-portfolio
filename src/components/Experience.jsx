import { motion } from "framer-motion";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[#00ff9f] text-xs tracking-widest mb-2">
            <span className="text-slate-500">$ </span>cat experience.log
          </div>
          <h2 className="font-display text-4xl font-bold text-white">
            WORK <span className="gradient-text">HISTORY</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff9f] via-[#00d4ff] to-transparent" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-4 -translate-x-1/2">
                  <div
                    className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: job.color, background: "#020912" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: job.color }} />
                  </div>
                  {/* Glow ring */}
                  <div
                    className="absolute inset-0 rounded-full ping-slow"
                    style={{ background: `${job.color}30` }}
                  />
                </div>

                {/* Card */}
                <div className="glow-border corner-box bg-[#0a1628] rounded-lg p-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4 pb-3 border-b border-[#0f2545]">
                    <div>
                      <div className="font-display text-lg font-bold text-white">{job.role}</div>
                      <div className="font-mono text-sm" style={{ color: job.color }}>{job.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xs text-slate-400 bg-[#0f2545] px-3 py-1 rounded">
                        {job.period}
                      </div>
                      <div
                        className="font-mono text-xs mt-1 px-2 py-0.5 rounded text-center"
                        style={{ color: job.color, background: `${job.color}15`, border: `1px solid ${job.color}30` }}
                      >
                        {job.type}
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-2">
                    {job.responsibilities.map((resp, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.06 }}
                        className="flex gap-3 items-start"
                      >
                        <span className="font-mono text-xs mt-0.5 flex-shrink-0" style={{ color: job.color }}>▸</span>
                        <span className="text-slate-300 text-sm leading-relaxed">{resp}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
