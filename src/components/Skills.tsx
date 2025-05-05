import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Database, Cloud, Cpu, LineChart } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
  color: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills, color, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`absolute inset-0 ${color} rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-20`}></div>
      <div className="relative glass-effect rounded-2xl p-6 h-full transform group-hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className={`${color} bg-opacity-20 p-3 rounded-xl`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <div className="space-y-4">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/80">{skill.name}</span>
                <span className="text-sm text-white/60">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${color}`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const skillCategories = [
    {
      title: "Software Engineering",
      icon: <Code size={24} className="text-accent-coral" />,
      color: "bg-accent-coral",
      skills: [
        { name: "Python/FastAPI/Django", level: 95 },
        { name: "C++/Low Latency", level: 90 },
        { name: "System Design", level: 92 },
        { name: "CI/CD & DevOps", level: 88 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain size={24} className="text-primary-blue" />,
      color: "bg-primary-blue",
      skills: [
        { name: "PyTorch/TensorFlow", level: 90 },
        { name: "NLP/BERT", level: 85 },
        { name: "Time Series", level: 92 },
        { name: "MLOps", level: 88 }
      ]
    },
    {
      title: "Quantitative Finance",
      icon: <LineChart size={24} className="text-secondary-teal" />,
      color: "bg-secondary-teal",
      skills: [
        { name: "Algorithmic Trading", level: 95 },
        { name: "Risk Management", level: 90 },
        { name: "Options/Greeks", level: 88 },
        { name: "Market Microstructure", level: 85 }
      ]
    },
    {
      title: "Cloud Architecture",
      icon: <Cloud size={24} className="text-accent-purple" />,
      color: "bg-accent-purple",
      skills: [
        { name: "AWS/GCP", level: 92 },
        { name: "Kubernetes", level: 88 },
        { name: "Terraform", level: 90 },
        { name: "Microservices", level: 85 }
      ]
    },
    {
      title: "Data Engineering",
      icon: <Database size={24} className="text-[#FF8A80]" />,
      color: "bg-[#FF8A80]",
      skills: [
        { name: "Spark/Databricks", level: 90 },
        { name: "Kafka/Streaming", level: 88 },
        { name: "Data Modeling", level: 85 },
        { name: "ETL Pipeline", level: 92 }
      ]
    },
    {
      title: "High Performance",
      icon: <Cpu size={24} className="text-[#64B5F6]" />,
      color: "bg-[#64B5F6]",
      skills: [
        { name: "KDB+/q", level: 90 },
        { name: "CUDA/GPU", level: 85 },
        { name: "Memory Optimization", level: 88 },
        { name: "Parallel Computing", level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-container bg-dark-bg py-32">
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
            <Brain size={16} />
            <span className="text-sm font-medium">Technical Expertise</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.p
            className="text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive expertise in cutting-edge technologies and methodologies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              color={category.color}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;