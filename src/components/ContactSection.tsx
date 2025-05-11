import React, { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      formRef.current?.reset();
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section 
      id="contact"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-accent-500 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Have a project in mind or want to chat? Feel free to reach out using the form
            below or contact me directly through email or phone.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-primary-50 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-heading font-semibold text-primary-700 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                Let's start a conversation! I'm open to freelance opportunities, collaborations, 
                or just a friendly chat about technology and design.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-primary-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-primary-700 font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:john.doe@example.com" 
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      john.doe@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-primary-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-primary-700 font-medium mb-1">Phone</h4>
                    <a 
                      href="tel:+11234567890" 
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-primary-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-primary-700 font-medium mb-1">Location</h4>
                    <p className="text-gray-600">New York, NY, USA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <p className="text-primary-700 font-medium mb-4">Follow me:</p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-primary-600 hover:text-white text-primary-600 p-3 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-primary-600 hover:text-white text-primary-600 p-3 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-primary-600 hover:text-white text-primary-600 p-3 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-heading font-semibold text-primary-700 mb-6">
                Send Me a Message
              </h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-4">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-4">
                      <p>{error}</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300 disabled:opacity-70 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;