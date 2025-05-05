import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Database, Cloud, Rocket, GitBranch } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  achievements: { value: string; label: string }[];
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  period,
  location,
  description,
  achievements,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-accent-coral via-primary-blue to-secondary-teal" />
      
      {/* Timeline dot */}
      <motion.div 
        className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-dark-bg border-2 border-accent-coral"
        animate={isHovered ? { scale: 1.5, borderColor: "#FF8A80" } : { scale: 1, borderColor: "#FF5252" }}
      />

      <div className="pl-8 pb-16">
        <div className="relative">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-coral/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Content container */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-500 group-hover:border-accent-coral/50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <motion.h3 
                  className="text-3xl font-bold bg-gradient-to-r from-accent-coral to-[#FF8A80] text-transparent bg-clip-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 }}
                >
                  {title}
                </motion.h3>
                <motion.p 
                  className="text-xl text-white/80 mt-1"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {company}
                </motion.p>
              </div>
              
              <div className="mt-4 md:mt-0 flex flex-col items-end">
                <motion.div 
                  className="text-accent-coral font-medium"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {period}
                </motion.div>
                <motion.div 
                  className="text-white/60"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {location}
                </motion.div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-accent-coral/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="text-2xl font-bold text-accent-coral mb-2">{achievement.value}</div>
                  <div className="text-sm text-white/60">{achievement.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <motion.ul 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 }}
            >
              {description.map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-start gap-3 text-white/80"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-coral mt-2.5 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section id="experience" className="section-container bg-dark-bg py-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,82,82,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(13,71,161,0.1),transparent_50%)]" />
      
      <motion.div
        ref={containerRef}
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-coral/20 text-accent-coral mb-6"
          >
            <Rocket size={20} />
            <span className="text-lg font-medium">Professional Journey</span>
          </motion.div>
          
          <motion.h2 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-accent-coral via-primary-blue to-secondary-teal text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Experience & Impact
          </motion.h2>
          
          <motion.p
            className="text-xl text-white/60 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            A track record of building innovative solutions across quantitative finance, 
            machine learning, and cloud architecture
          </motion.p>
        </div>

        <div className="relative">
          <TimelineItem
            title="CTO & Co-Founder"
            company="Nocode-ML"
            period="December 2023 - March 2025"
            location="Paris, France"
            description={[
              "Designed and launched serverless AI assistant enabling traders to build & optimize 60+ strategies without code using Python (FastAPI, AsyncIO) and React on AWS Lambda & EKS.",
              "Engineered real-time data pipeline processing 15M ticks/day from crypto DEXs to KDB+/q (<1ms latency) and PostgreSQL lakehouse with 120 engineered features.",
              "Implemented automated ML/DL optimizer improving strategy Sharpe ratio from 1.4 to 2.3 and reducing max drawdown to 18%.",
              "Built end-to-end MLOps pipeline with 30min deployment cycle using MLflow, Canary releases, and AB testing."
            ]}
            achievements={[
              { value: "15M", label: "Daily Ticks" },
              { value: "60+", label: "Strategies" },
              { value: "2.3", label: "Sharpe Ratio" },
              { value: "<1ms", label: "Latency" }
            ]}
            index={0}
          />

          <TimelineItem
            title="Cloud Engineer"
            company="Summarizor"
            period="September 2024 - March 2025"
            location="Paris, France"
            description={[
              "Architected serverless ETL pipeline processing 4TB/month with optimized partitioning & clustering achieving p95 dashboard latency under 5 minutes.",
              "Deployed Vertex AI NLP pipeline classifying & summarizing 500k documents daily with 92% F1 score.",
              "Implemented comprehensive security measures with zero critical findings in security audit.",
              "Achieved 25% reduction in cloud costs through optimization and real-time monitoring."
            ]}
            achievements={[
              { value: "4TB", label: "Monthly Data" },
              { value: "92%", label: "F1 Score" },
              { value: "25%", label: "Cost Reduction" },
              { value: "500k", label: "Daily Docs" }
            ]}
            index={1}
          />

          <TimelineItem
            title="Data & BI Project Manager"
            company="L'Oréal France"
            period="December 2022 - November 2023"
            location="Levallois-Perret, France"
            description={[
              "Migrated 24 EMEA Power BI dashboards to GCP, reducing manual preparation time from 3 hours to 12 minutes.",
              "Developed marketing-spend prioritization recommender boosting ROI by 11%.",
              "Implemented robust data quality checks reducing error rate to below 0.2%.",
              "Drove self-service BI adoption from 40% to 87% through mentorship and training."
            ]}
            achievements={[
              { value: "24", label: "Dashboards" },
              { value: "+11%", label: "ROI Boost" },
              { value: "87%", label: "BI Adoption" },
              { value: "0.2%", label: "Error Rate" }
            ]}
            index={2}
          />

          <TimelineItem
            title="Analyst & Research Manager"
            company="Beyond Horizon"
            period="2021"
            location="Charenton-le-Pont, France"
            description={[
              "Led comprehensive IFRS audit across 12 banks, uncovering €4.7B in latent credit risk.",
              "Developed real-time COVID impact dashboard for executive decision-making.",
              "Created predictive financial models for risk assessment and market analysis."
            ]}
            achievements={[
              { value: "€4.7B", label: "Risk Exposed" },
              { value: "12", label: "Banks Audited" },
              { value: "100%", label: "Compliance" },
              { value: "24/7", label: "Monitoring" }
            ]}
            index={3}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;