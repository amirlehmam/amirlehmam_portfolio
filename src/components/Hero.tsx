import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Database, BarChart3, GitBranch, ServerCog, FileText } from 'lucide-react';

const FloatingGeometry = () => {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.3;
    meshRef.current.rotation.y = time * 0.5;
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial 
          color="#FF5252"
          metalness={0.8}
          roughness={0.2}
          emissive="#FF5252"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#FF5252"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="section-container min-h-screen relative overflow-hidden bg-gradient-to-br from-dark-bg via-[#1a1f35] to-[#2d1a35]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,82,82,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <div className="flex flex-col gap-6">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-coral/20 to-transparent backdrop-blur-sm border border-accent-coral/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-accent-coral animate-pulse"></span>
              <span className="text-sm font-medium tracking-wider text-accent-coral">DATA SCIENTIST & QUANT DEVELOPER</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-display leading-tight">
              Crafting
              <span className="bg-gradient-to-r from-accent-coral to-[#FF8A80] text-transparent bg-clip-text"> intelligent</span>
              <br />
              algorithms
            </h1>
            
            <p className="text-lg text-white/80 max-w-xl leading-relaxed">
              CTO-level data scientist and quant developer specializing in high-frequency trading systems, 
              machine learning optimization, and cloud architecture.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <motion.span 
                className="badge bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Available for projects
              </motion.span>
              <motion.span 
                className="badge bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                4+ Years Experience
              </motion.span>
              <motion.span 
                className="badge bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                Based in Paris
              </motion.span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="btn relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-accent-coral to-[#FF8A80] text-white font-medium group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-white/20 transform translate-y-full transition-transform group-hover:translate-y-0"></div>
              </motion.a>
              
              <motion.a
                href="https://d.benlotus.com/snapsynopsis/2025-05-05_ZjJntV/Amir_Lehmam_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn relative overflow-hidden px-8 py-4 rounded-full bg-white text-dark-bg font-medium group flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText size={18} />
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 bg-accent-coral/20 transform translate-y-full transition-transform group-hover:translate-y-0"></div>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="btn px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm text-white font-medium border border-white/10 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </div>
        </motion.div>

        <div className="relative h-[600px]">
          <Canvas camera={{ position: [0, 0, 6] }}>
            <ambientLight intensity={0.4} />
            <spotLight 
              position={[10, 10, 10]} 
              angle={0.3} 
              penumbra={1} 
              intensity={1}
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <FloatingGeometry />
          </Canvas>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-sm font-medium mb-2">Scroll to explore</span>
        <div className="w-5 h-9 border-2 border-white/20 rounded-full p-1">
          <div className="w-1 h-1 bg-white/60 rounded-full animate-scroll"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;