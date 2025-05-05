import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, GraduationCap, Heart, Plane, Award, Calendar, MapPinned } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      school: "UNIVERSITÉ PANTHÉON SORBONNE (P1)",
      degree: "MSc Data Science & Innovation Marketing",
      period: "2022 - 2023",
      grade: "Merit (Quite Good)",
      location: "Paris, France",
      courses: [
        "Data Analytics",
        "Business Intelligence",
        "Corporate Comms Strategy",
        "Design Thinking",
        "AI/ML",
        "Deep Learning",
        "E-Business",
        "Innovation Marketing",
        "Business Planning"
      ]
    },
    {
      school: "UNIVERSITÉ PANTHÉON SORBONNE (P1)",
      degree: "MSc Data Analytics",
      period: "2021 - 2022",
      grade: "Merit (Good)",
      location: "Paris, France",
      courses: [
        "Data Management",
        "Machine Learning",
        "Statistics",
        "Deep Learning",
        "Elasticsearch",
        "Spark",
        "AI TimeSeries",
        "Advanced Cloud"
      ]
    },
    {
      school: "INSEEC BACHELOR",
      degree: "Bachelor in Finance",
      period: "2020 - 2021",
      location: "Paris, France"
    },
    {
      school: "UNIVERSITE DE PARIS",
      degree: "Licence in Economics & Social Sciences",
      period: "2017 - 2020",
      location: "Paris, France"
    }
  ];

  const certifications = [
    {
      name: "Microsoft Azure Data Fundamentals (DP-900)",
      issuer: "Microsoft",
      year: "2022",
      location: "Paris, France",
      details: [
        "Solid grounding in relational/no-SQL design",
        "Streaming vs. batch",
        "Power BI data-flows"
      ]
    },
    {
      name: "Google Analytics (GA4)",
      issuer: "Google",
      year: "2022",
      location: "Paris, France",
      details: [
        "Event-driven data modelling",
        "Funnel analysis",
        "User-behaviour telemetry"
      ]
    }
  ];

  return (
    <section id="about" className="section-container bg-dark-bg py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,82,82,0.1),transparent_50%)]" />
      
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-coral/20 text-accent-coral mb-6"
          >
            <Heart size={20} />
            <span className="text-lg font-medium">About Me</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-coral via-primary-blue to-secondary-teal text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            Data-driven Builder with an Entrepreneurial Streak
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-3xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
              <div className="space-y-4 text-white/80">
                <p className="text-base sm:text-lg">
                  I'm Amir Lehmam, 26, bilingual FR/EN, and happiest when a torrent of raw data is rushing through 
                  a sturdy piece of Python I just wrote. Over the past five years I've shipped trading engines that 
                  crunch 15 million ticks a day, serverless pipelines that land terabytes in BigQuery before your 
                  coffee cools, and dashboards that make executives say "ah, now I get it."
                </p>
                
                <div className="flex items-center gap-3 text-accent-coral">
                  <MapPin size={20} />
                  <span className="text-sm sm:text-base">Based in Paris, open to: London, Zurich, Geneva</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-3xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-6 sm:space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative pl-6 border-l-2 border-accent-coral/30"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-coral" />
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-accent-coral mb-1 text-sm sm:text-base">{edu.school}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPinned size={14} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    {edu.grade && (
                      <p className="text-white/80 mb-2 text-sm sm:text-base">
                        Grade: <span className="text-accent-coral">{edu.grade}</span>
                      </p>
                    )}
                    {edu.courses && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.courses.map((course, i) => (
                          <span
                            key={i}
                            className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-white/5 text-white/70 border border-white/10"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Certifications */}
            <div className="glass-effect rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-blue/20 p-3 rounded-xl">
                  <Award size={24} className="text-primary-blue" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Certifications</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-white/5 rounded-xl p-4 sm:p-6"
                  >
                    <h4 className="text-base sm:text-lg font-bold text-primary-blue mb-2">{cert.name}</h4>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/60 mb-3">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.year}</span>
                      <span>•</span>
                      <span>{cert.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {cert.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm sm:text-base text-white/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-blue" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What I'm Seeking */}
            <div className="glass-effect rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent-coral/20 p-3 rounded-xl">
                  <Briefcase size={24} className="text-accent-coral" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">What I'm Seeking</h3>
              </div>
              
              <p className="text-white/80 mb-6 text-sm sm:text-base">
                A squad that ships real-time analytics or MLOps at scale—fin-tech, climate data, 
                high-frequency commerce—where a millisecond saved equals revenue gained.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "Real-time Analytics",
                  "MLOps at Scale",
                  "FinTech",
                  "Climate Data",
                  "HFT Systems"
                ].map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-2 text-xs sm:text-sm rounded-full bg-white/5 text-white/80 border border-white/10
                             hover:border-accent-coral/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobility */}
            <div className="glass-effect rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-secondary-teal/20 p-3 rounded-xl">
                  <Plane size={24} className="text-secondary-teal" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Open to Opportunities In</h3>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { city: "Paris", current: true },
                  { city: "London", current: false },
                  { city: "Zurich", current: false },
                  { city: "Geneva", current: false }
                ].map((location, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-white/5 rounded-xl p-3 sm:p-4"
                  >
                    <div className={`w-2 h-2 rounded-full ${location.current ? 'bg-green-400' : 'bg-white/40'}`} />
                    <span className="text-sm sm:text-base text-white/80">{location.city}</span>
                    {location.current && (
                      <span className="text-xs text-green-400 ml-auto">Current</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;