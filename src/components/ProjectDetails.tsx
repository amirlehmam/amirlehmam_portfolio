import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, GitBranch, Brain, Database, Cloud, LineChart, Code2, Rocket, Zap } from 'lucide-react';

interface ProjectDetailsProps {
  project: string;
  onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  const projectData = {
    'xaumev': {
      title: "xauMEV Flash Loan Arbitrage",
      description: "Next-generation flash loan arbitrage system targeting XAUT/USDT pairs across multiple DEXs and chains.",
      overview: `A high-performance flash loan arbitrage bot that targets the XAUT/USDT trading pair across multiple decentralized exchanges (DEXs) on Ethereum and several EVM-compatible chains. The system uses a multi-language architecture to optimize for speed, safety, and flexibility.`,
      features: [
        "Multi-DEX, Multi-Chain Monitoring",
        "Atomic Flash-Loan Arbitrage",
        "High Performance Hot Path",
        "Advanced Analytics Off-Path",
        "Orchestration & Intelligence",
        "Integrated Logging & Alerts"
      ],
      architecture: [
        "Rust Engine for real-time price monitoring",
        "OCaml for analytical tooling",
        "Solidity for flash loan execution",
        "Python for orchestration and ML",
        "Supabase for logging and analytics"
      ],
      performance: [
        { metric: "Execution Latency", value: "<15μs" },
        { metric: "Daily Ticks", value: "12M+" },
        { metric: "ML Accuracy", value: "92%" },
        { metric: "Chains Supported", value: "4" }
      ],
      techStack: [
        "Rust", "OCaml", "Solidity", "Python",
        "Aave V3", "WebSocket", "Prometheus",
        "Docker", "Supabase", "TensorFlow"
      ]
    },
    'quantum-trading': {
      title: "Quantum Trading Engine",
      description: "High-frequency trading system with ultra-low latency and advanced risk management capabilities.",
      overview: "A sophisticated high-frequency trading platform designed for institutional clients trading equities, futures, and options. The system processes millions of market data points per second and executes trades with sub-microsecond latency.",
      features: [
        "FPGA-accelerated market data processing",
        "Kernel-bypass networking stack",
        "Custom memory allocators",
        "Hardware-level time synchronization",
        "Real-time risk management engine",
        "Multi-venue smart order routing"
      ],
      architecture: [
        "FPGA for market data processing",
        "Custom kernel module for networking",
        "Shared memory IPC system",
        "Lock-free data structures",
        "Hardware-accelerated risk checks"
      ],
      performance: [
        { metric: "Order Latency", value: "<500ns" },
        { metric: "Market Data", value: "5M msg/s" },
        { metric: "Risk Checks", value: "<50ns" },
        { metric: "Venues", value: "12" }
      ],
      techStack: [
        "C++20", "FPGA/VHDL", "Kernel Dev",
        "DPDK", "Solarflare", "KDB+/q",
        "Custom TCP/IP Stack", "PMWatch"
      ]
    },
    'ml-strategy': {
      title: "ML Strategy Optimizer",
      description: "Advanced options trading strategy using machine learning for optimal execution and risk management.",
      overview: "A deep learning system that combines market microstructure analysis with options pricing theory to identify and execute arbitrage opportunities across multiple venues while maintaining delta-neutral positions.",
      features: [
        "Neural SDE for volatility surface modeling",
        "Reinforcement learning execution engine",
        "Real-time Greeks computation and hedging",
        "Custom options pricing models",
        "Bayesian portfolio optimization",
        "Adaptive risk limits"
      ],
      architecture: [
        "Custom neural SDE implementation",
        "Distributed RL training pipeline",
        "GPU-accelerated Greeks calculation",
        "Real-time feature engineering",
        "Automated hedging system"
      ],
      performance: [
        { metric: "Prediction MSE", value: "0.0023" },
        { metric: "Hedge Error", value: "<0.1%" },
        { metric: "Daily P&L", value: "+0.8%" },
        { metric: "Max Draw", value: "-3.2%" }
      ],
      techStack: [
        "PyTorch", "JAX", "CUDA", "Ray",
        "QuantLib", "NetworkX", "Redis",
        "Custom ML Models", "Arrow"
      ]
    },
    'cloud-pipeline': {
      title: "Cloud Data Pipeline",
      description: "Serverless ETL pipeline processing massive financial datasets with real-time analytics.",
      overview: "A cloud-native data platform that processes market data from 50+ sources, providing real-time analytics and historical analysis capabilities while optimizing for cost and performance.",
      features: [
        "Multi-region data replication",
        "Adaptive batch sizing",
        "Schema evolution handling",
        "Automated data quality checks",
        "Cost-optimized storage lifecycle",
        "Real-time monitoring dashboard"
      ],
      architecture: [
        "Event-driven ETL workflows",
        "Multi-stage data lake design",
        "Streaming analytics engine",
        "Automated partitioning strategy",
        "Custom monitoring stack"
      ],
      performance: [
        { metric: "Ingestion Rate", value: "250K/s" },
        { metric: "Query Latency", value: "<100ms" },
        { metric: "Storage Cost", value: "-65%" },
        { metric: "Coverage", value: "99.99%" }
      ],
      techStack: [
        "Apache Flink", "Kubernetes",
        "Terraform", "Apache Iceberg",
        "dbt", "Grafana", "Prometheus",
        "Apache Arrow", "MinIO"
      ]
    },
    'nlp-analytics': {
      title: "NLP Analytics Engine",
      description: "AI-powered document classification system for financial news and market sentiment analysis.",
      overview: "A sophisticated NLP platform that processes financial documents in real-time, extracting tradable insights and sentiment signals while handling multiple languages and document types.",
      features: [
        "Cross-lingual sentiment analysis",
        "Entity relationship mapping",
        "Temporal event extraction",
        "Automated trade signal generation",
        "Real-time news impact scoring",
        "Custom financial NER models"
      ],
      architecture: [
        "Multi-stage NLP pipeline",
        "Custom financial domain models",
        "Distributed training system",
        "Real-time inference engine",
        "Automated model retraining"
      ],
      performance: [
        { metric: "Processing", value: "<50ms" },
        { metric: "Accuracy", value: "94.5%" },
        { metric: "Languages", value: "8" },
        { metric: "Sources", value: "200+" }
      ],
      techStack: [
        "Transformers", "SpaCy", "FastAPI",
        "ElasticSearch", "RabbitMQ", "MLflow",
        "Custom NER Models", "Ray Serve"
      ]
    }
  };

  const data = projectData[project as keyof typeof projectData];
  if (!data) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-dark-bg/95 backdrop-blur-sm z-50 overflow-y-auto"
    >
      <div className="min-h-screen py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-white/60 hover:text-white mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">{data.title}</h1>
            <p className="text-xl text-white/80 mb-12 max-w-3xl">{data.description}</p>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <div className="glass-effect rounded-3xl p-8">
                <p className="text-white/80 leading-relaxed">{data.overview}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="glass-effect rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <div className="space-y-4">
                  {data.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
                    >
                      <div className="bg-accent-coral/20 rounded-lg p-2">
                        <Rocket size={20} className="text-accent-coral" />
                      </div>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-effect rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-6">Performance Metrics</h2>
                <div className="grid grid-cols-2 gap-4">
                  {data.performance.map((metric, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4">
                      <div className="text-2xl font-bold text-accent-coral mb-1">{metric.value}</div>
                      <div className="text-sm text-white/60">{metric.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6">System Architecture</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.architecture.map((component, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 rounded-xl p-4 flex items-center gap-3"
                  >
                    <div className="bg-primary-blue/20 rounded-lg p-2">
                      <Code2 size={20} className="text-primary-blue" />
                    </div>
                    <span className="text-white/80">{component}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-3xl p-8 mt-8">
              <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {data.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-full bg-white/5 text-white/80 border border-white/10
                             hover:border-accent-coral/50 hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;