import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "./components/ui/text/Reveal";
import AuroraButton from "./components/ui/buttons/AuroraButton";

function App() {
  return (
    <motion.div 
      className="min-h-dvh flex flex-col bg-shade-900 text-shade-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header/Nav */}
      <header className="py-6 px-8 flex justify-between items-center border-b border-shade-800">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center"
        >
          <h1 className="text-2xl font-bold text-shade-100">
            <span className="text-primary-400">open</span>b.net
          </h1>
        </motion.div>
        
        <nav>
          <motion.ul 
            className="flex space-x-8"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
            <li><Link to="#about" className="hover:text-primary-400 transition-colors">About</Link></li>
            <li><Link to="#contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            <li><Link to="/template" className="text-xs opacity-30 hover:opacity-60">Template</Link></li>
          </motion.ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Singapore's <span className="text-primary-400">Procurement</span> Specialists
          </h2>
        </Reveal>
        
        <Reveal width="100%">
          <p className="text-xl max-w-2xl mx-auto text-shade-400 mb-10">
            Connecting suppliers with opportunities across Southeast Asia, with a focus on government and enterprise procurement solutions.
          </p>
        </Reveal>
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
        >
          <AuroraButton>Learn More</AuroraButton>
        </motion.div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 px-8 bg-shade-800">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h3 className="text-3xl font-bold mb-8 text-center">About Us</h3>
          </Reveal>
          
          <Reveal width="100%">
            <p className="text-lg text-shade-300 mb-6">
              Based in Singapore, openb.net specializes in streamlining procurement processes for both government agencies and private enterprises throughout Southeast Asia.
            </p>
          </Reveal>
          
          <Reveal width="100%">
            <p className="text-lg text-shade-300">
              Our extensive network of suppliers and deep understanding of regional procurement regulations allows us to deliver efficient, cost-effective solutions tailored to each client's specific needs.
            </p>
          </Reveal>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 px-8">
        <Reveal>
          <h3 className="text-3xl font-bold mb-12 text-center">Get in Touch</h3>
        </Reveal>
        
        <div className="max-w-xl mx-auto bg-shade-800 p-8 rounded-lg">
          <p className="text-center mb-8">
            Interested in our procurement services? Contact us to discuss how we can help streamline your supply chain.
          </p>
          
          <div className="flex flex-col space-y-4 items-center">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>contact@openb.net</span>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AuroraButton>Send Message</AuroraButton>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-8 border-t border-shade-800 text-center text-sm text-shade-500">
        <p>&copy; {new Date().getFullYear()} openb.net. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}

export default App;
