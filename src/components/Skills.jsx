import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

function SkillBar({ name, level, color, inView }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between font-mono text-xs mb-1.5">
        <span className="text-slate-300">{name}</span>
        <span style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)`, boxShadow: `0 0 8px ${color}` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [inView, setInView] = useState(false);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-[#050e1f]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setInView(true)}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[#00ff9f] text-xs tracking-widest mb-2">
            <span className="text-slate-500">$ </span>ls -la skills/
          </div>
          <h2 className="font-display text-4xl font-bold text-white">
            TECH <span className="gradient-text">ARSENAL</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="glow-border corner-box bg-[#0a1628] rounded-lg p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#0f2545]">
                <div
                  className="w-8 h-8 rounded flex items-center justify-center text-base"
                  style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}40` }}
                >
                  {cat.icon}
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-white">{cat.category}</div>
                  <div className="font-mono text-xs" style={{ color: cat.color }}>
                    {cat.items.length} skills
                  </div>
                </div>
              </div>

              {/* Skill bars */}
              <div>
                {cat.items.map((skill) => (
                  <SkillBar key={skill.name} {...skill} color={cat.color} inView={inView} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <div className="font-mono text-xs text-slate-500 mb-4 text-center">// TOOLS & TECHNOLOGIES</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Asterisk", "VICIdial", "CentOS", "RHEL", "AlmaLinux", "Ubuntu",
              "Apache", "Nginx", "MySQL", "MariaDB", "Bash", "OCI", "AWS",
              "firewalld", "SELinux", "fail2ban", "SIP", "RTP", "iptables", "SSH"
            ].map(tech => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 bg-[#0f2545] border border-[#0f2545] text-slate-400 rounded-sm hover:border-[#00ff9f]/40 hover:text-[#00ff9f] transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
