import { motion } from "framer-motion";
import Reveal from "./components/ui/text/Reveal";
import AuroraButton from "./components/ui/buttons/AuroraButton";

function App() {
  return (
    <motion.div 
      className="min-h-dvh flex flex-col bg-shade-100 text-shade-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header/Nav */}
      <header className="py-6 px-8 flex justify-between items-center border-b border-shade-300">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center"
        >
          <h1 className="text-2xl font-bold text-shade-900">
            <span className="text-primary-400">open</span><span className="text-secondary-400">b</span>.net
          </h1>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-shade-900">Singapore's</span> <span className="text-primary-400">Procurement</span> <span className="text-shade-900">Specialists</span>
          </h2>
        </Reveal>
        
        <Reveal width="100%">
          <p className="text-xl max-w-2xl mx-auto text-shade-700">
            Sourcing quality products from Singapore and regional suppliers to fulfill government contracts.
          </p>
        </Reveal>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="flex flex-col items-center justify-center py-4">

        <div className="flex justify-center">
          <a href="mailto:contact@openb.net">
            <AuroraButton>Email Us</AuroraButton>
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-8 border-t border-shade-300 text-center text-sm font-bold" style={{ color: '#000000' }}>
        <p className="mb-1" style={{ color: '#000000' }}>&copy; {new Date().getFullYear()} openb.net. All rights reserved.</p>
        <p style={{ color: '#000000' }}>OPENB NETWORKS | UEN 53404689D</p>
      </footer>
    </motion.div>
  );
}

export default App;
