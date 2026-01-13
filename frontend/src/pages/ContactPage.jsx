import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactPage } from '../data/mock';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../components/animations';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
        setTouched({});
        setErrors({});
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleBlur = (fieldName) => {
    setTouched({ ...touched, [fieldName]: true });
    if (fieldName === 'email' && formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors({ ...errors, email: 'Please enter a valid email address' });
    } else if (fieldName === 'phone' && formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      setErrors({ ...errors, phone: 'Please enter a valid phone number' });
    } else if (fieldName === 'message' && formData.message && formData.message.trim().length < 10) {
      setErrors({ ...errors, message: 'Message must be at least 10 characters' });
    }
  };

  const contactInfo = [
    { icon: MapPin, title: 'Address', value: contactPage.info.address },
    { icon: Phone, title: 'Phone', value: contactPage.info.phone, href: `tel:${contactPage.info.phone}` },
    { icon: Mail, title: 'Email', value: contactPage.info.email, href: `mailto:${contactPage.info.email}` },
    { icon: Clock, title: 'Business Hours', value: contactPage.info.hours }
  ];

  return (
    <motion.div 
      className="min-h-screen pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-[#0f172a] via-[#1E3A5F] to-[#0f172a] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/60"></div>
          <motion.div 
            className="absolute top-20 right-20 w-80 h-80 bg-[#22C55E]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label !text-[#22C55E]">
                Get in Touch
              </span>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {contactPage.hero.title}
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {contactPage.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <FadeInLeft className="lg:col-span-1">
              <h2 className="font-display text-3xl font-semibold text-[#0f172a] mb-6 tracking-tight">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Have a project in mind? We'd love to hear from you. Contact us using the form or reach out directly.
              </p>

              <StaggerContainer staggerDelay={0.1} className="space-y-8">
                {contactInfo.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="flex gap-5"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="w-14 h-14 bg-[#22C55E]/10 rounded-2xl flex items-center justify-center flex-shrink-0"
                        whileHover={{ backgroundColor: '#22C55E', scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon className="w-6 h-6 text-[#22C55E]" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-[#0f172a] text-lg mb-1">{item.title}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-gray-600 hover:text-[#22C55E] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeInLeft>

            {/* Contact Form */}
            <FadeInRight className="lg:col-span-2">
              <motion.div 
                className="bg-gray-50 rounded-3xl p-8 lg:p-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {submitted ? (
                  <motion.div 
                    className="text-center py-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                    >
                      <CheckCircle className="w-20 h-20 text-[#22C55E] mx-auto mb-6" />
                    </motion.div>
                    <h3 className="font-display text-3xl font-semibold text-[#0f172a] mb-3 tracking-tight">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
                        { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', required: true }
                      ].map((field) => (
                        <motion.div 
                          key={field.name}
                          animate={{ scale: focusedField === field.name ? 1.01 : 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <label className="block text-sm font-semibold text-[#0f172a] mb-3">
                            {field.label} {field.required && <span className="text-[#22C55E]">*</span>}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => {
                              setFocusedField(null);
                              handleBlur(field.name);
                            }}
                            required={field.required}
                            aria-invalid={errors[field.name] ? 'true' : 'false'}
                            aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                            className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-0 focus:border-[#22C55E] outline-none transition-all text-base ${
                              errors[field.name] ? 'border-red-300' : 'border-gray-200 hover:border-gray-300'
                            }`}
                            placeholder={field.placeholder}
                          />
                          {errors[field.name] && touched[field.name] && (
                            <p id={`${field.name}-error`} className="mt-2 text-sm text-red-600" role="alert">
                              {errors[field.name]}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000' },
                        { name: 'company', label: 'Company', type: 'text', placeholder: 'Your Company' }
                      ].map((field) => (
                        <motion.div 
                          key={field.name}
                          animate={{ scale: focusedField === field.name ? 1.01 : 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <label className="block text-sm font-semibold text-[#0f172a] mb-3">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => {
                              setFocusedField(null);
                              handleBlur(field.name);
                            }}
                            aria-invalid={errors[field.name] ? 'true' : 'false'}
                            aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                            className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-0 focus:border-[#22C55E] outline-none transition-all text-base ${
                              errors[field.name] ? 'border-red-300' : 'border-gray-200 hover:border-gray-300'
                            }`}
                            placeholder={field.placeholder}
                          />
                          {errors[field.name] && touched[field.name] && (
                            <p id={`${field.name}-error`} className="mt-2 text-sm text-red-600" role="alert">
                              {errors[field.name]}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      animate={{ scale: focusedField === 'subject' ? 1.01 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-semibold text-[#0f172a] mb-3">
                        Subject <span className="text-[#22C55E]">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => {
                          setFocusedField(null);
                          handleBlur('subject');
                        }}
                        required
                        aria-invalid={errors.subject ? 'true' : 'false'}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-0 focus:border-[#22C55E] outline-none transition-all text-base ${
                          errors.subject ? 'border-red-300' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="How can we help you?"
                      />
                      {errors.subject && touched.subject && (
                        <p id="subject-error" className="mt-2 text-sm text-red-600" role="alert">
                          {errors.subject}
                        </p>
                      )}
                    </motion.div>

                    <motion.div
                      animate={{ scale: focusedField === 'message' ? 1.01 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-semibold text-[#0f172a] mb-3">
                        Message <span className="text-[#22C55E]">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => {
                          setFocusedField(null);
                          handleBlur('message');
                        }}
                        required
                        rows={5}
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-0 focus:border-[#22C55E] outline-none transition-all resize-none text-base ${
                          errors.message ? 'border-red-300' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Tell us about your project..."
                      />
                      {errors.message && touched.message && (
                        <p id="message-error" className="mt-2 text-sm text-red-600" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#22C55E] text-white px-10 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-glow transition-all duration-300"
                      whileHover={{ scale: 1.02, backgroundColor: '#16A34A' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <motion.section 
        className="h-[450px] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-20 h-20 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <MapPin className="w-10 h-10 text-[#22C55E]" />
            </motion.div>
            <p className="text-gray-500 text-lg font-medium">Map integration can be added here</p>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ContactPage;
