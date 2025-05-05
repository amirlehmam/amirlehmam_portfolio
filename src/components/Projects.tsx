import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Cpu, Database, LineChart, Rocket, Brain, Zap } from 'lucide-react';
import ProjectDetails from './ProjectDetails';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  color: string;
  index: number;
  onViewDetails: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  tech,
  metrics,
  color,
  index,
  onViewDetails,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className={`absolute inset-0 ${color} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-20`}></div>
      <div className="relative glass-effect rounded-3xl p-8 h-full transform group-hover:scale-[1.02] transition-all duration-300">
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-white/10">
          {category}
        </div>
        
        <h3 className="text-2xl font-bold mb-4 gradient-text">{title}</h3>
        <p className="text-white/70 mb-6">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {metrics.map((metric, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl font-bold gradient-text">{metric.value}</div>
              <div className="text-sm text-white/60">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/70">
              {item}
            </span>
          ))}
        </div>

        <motion.button
          className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-accent-coral to-[#FF8A80] text-white font-medium 
                     overflow-hidden relative group/btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onViewDetails}
        >
          <span className="relative z-10">View Details</span>
          <div className="absolute inset-0 bg-white/20 transform translate-y-full transition-transform group-hover/btn:translate-y-0"></div>
        </motion.button>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const handleViewDetails = (projectId: string) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="projects" className="section-container bg-dark-bg py-16">
        <motion.div
          ref={containerRef}
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-coral/20 text-accent-coral mb-6"
            >
              <Code2 size={16} />
              <span className="text-sm font-medium">Featured Projects</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Project Highlights
            </motion.h2>
            
            <motion.p
              className="text-white/60 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Showcasing innovative solutions across quantitative finance, machine learning, and cloud architecture
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-12">
            {/* Current Project - xauMEV */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group col-span-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-20"></div>
              <div className="relative glass-effect rounded-3xl p-8 h-full transform group-hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-xl opacity-20 blur-sm"></div>
                    <img 
                      src="https://i.imgur.com/PWHynum.png" 
                      alt="xauMEV Logo" 
                      className="w-full h-full object-contain rounded-xl relative z-10"
                      style={{ 
                        imageRendering: '-webkit-optimize-contrast',
                        transform: 'translateZ(0)'
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold gradient-text">xauMEV Flash Loan Arbitrage</h3>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                      In Development
                    </span>
                  </div>
                </div>

                <p className="text-white/70 mb-6 text-lg">
                  Next-gen flash loan arbitrage system for XAUT/USDT pairs across multiple DEXs and chains, featuring atomic execution, ML-driven decision making, and institutional-grade monitoring.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-[#FFD700]">&lt;15μs</div>
                    <div className="text-sm text-white/60">Execution Latency</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-[#FFD700]">4 Chains</div>
                    <div className="text-sm text-white/60">Multi-Chain Support</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-[#FFD700]">92%</div>
                    <div className="text-sm text-white/60">ML Accuracy</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-[#FFD700]">12M+</div>
                    <div className="text-sm text-white/60">Daily Ticks</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 text-white/70">
                    <Zap size={16} className="text-[#FFD700]" />
                    Rust Engine
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 text-white/70">
                    <Brain size={16} className="text-[#FFD700]" />
                    OCaml Analytics
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 text-white/70">
                    <Database size={16} className="text-[#FFD700]" />
                    Supabase
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 text-white/70">
                    <Rocket size={16} className="text-[#FFD700]" />
                    Flash Loans
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-dark-text font-medium 
                             overflow-hidden relative group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleViewDetails('xaumev')}
                  >
                    <span className="relative z-10">View Architecture</span>
                    <div className="absolute inset-0 bg-white/20 transform translate-y-full transition-transform group-hover/btn:translate-y-0"></div>
                  </motion.button>
                  
                  <motion.a
                    href="https://github.com/amirlehmam/xauMEV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 rounded-xl bg-white/5 text-white font-medium border border-white/10 
                             hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold text-center mt-16 mb-8">Previous Projects</h3>

            {/* Previous Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="Quantum Trading Engine"
                category="QUANTITATIVE FINANCE"
                description="High-frequency trading system with ultra-low latency and advanced risk management capabilities."
                tech={["C++", "Python", "KDB+/q", "Redis", "FIX Protocol"]}
                metrics={[
                  { label: "Latency", value: "<20μs" },
                  { label: "Throughput", value: "2K tps" },
                  { label: "Uptime", value: "99.99%" },
                  { label: "ROI", value: "+13%" }
                ]}
                color="bg-accent-coral"
                index={0}
                onViewDetails={() => handleViewDetails('quantum-trading')}
              />
              
              <ProjectCard
                title="ML Strategy Optimizer"
                category="MACHINE LEARNING"
                description="Advanced options trading strategy using machine learning for optimal execution and risk management."
                tech={["PyTorch", "Ray", "Black-Scholes", "Monte Carlo"]}
                metrics={[
                  { label: "Sharpe Ratio", value: "2.3" },
                  { label: "Max Drawdown", value: "-12%" },
                  { label: "Win Rate", value: "73%" },
                  { label: "Accuracy", value: "89%" }
                ]}
                color="bg-primary-blue"
                index={1}
                onViewDetails={() => handleViewDetails('ml-strategy')}
              />
              
              <ProjectCard
                title="Cloud Data Pipeline"
                category="CLOUD ARCHITECTURE"
                description="Serverless ETL pipeline processing massive financial datasets with real-time analytics."
                tech={["AWS Lambda", "Apache Kafka", "Terraform", "dbt"]}
                metrics={[
                  { label: "Data Volume", value: "4TB" },
                  { label: "Cost Saved", value: "38%" },
                  { label: "Latency", value: "<2s" },
                  { label: "SLA", value: "99.9%" }
                ]}
                color="bg-secondary-teal"
                index={2}
                onViewDetails={() => handleViewDetails('cloud-pipeline')}
              />
              
              <ProjectCard
                title="NLP Analytics Engine"
                category="DATA SCIENCE"
                description="AI-powered document classification system for financial news and market sentiment analysis."
                tech={["Vertex AI", "BERT", "FastAPI", "ElasticSearch"]}
                metrics={[
                  { label: "F1 Score", value: "92%" },
                  { label: "Documents", value: "500K" },
                  { label: "Languages", value: "6" },
                  { label: "Precision", value: "94%" }
                ]}
                color="bg-accent-purple"
                index={3}
                onViewDetails={() => handleViewDetails('nlp-analytics')}
              />
            </div>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails 
            project={selectedProject} 
            onClose={handleCloseDetails}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;