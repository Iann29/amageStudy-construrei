import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/common/Button';
import FadeIn from '../components/animations/FadeIn';
import ScaleIn from '../components/animations/ScaleIn';
import AnimateChildren from '../components/animations/AnimateChildren';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio de formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Resetar a mensagem de sucesso após alguns segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <FadeIn>
        <h1 className="text-3xl font-bold mb-2 text-center">Entre em Contato</h1>
        <p className="text-secondary-600 text-center mb-8 max-w-2xl mx-auto">
          Estamos aqui para ajudar com qualquer dúvida sobre produtos, orçamentos ou informações sobre nossas lojas.
        </p>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Informações de Contato */}
        <div>
          <ScaleIn delay={0.1}>
            <div className="bg-white rounded-lg shadow-soft p-6 mb-8 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-4 border-b border-secondary-200 pb-2">Informações de Contato</h2>
              
              <AnimateChildren staggerChildren={0.1} delay={0.1}>
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-secondary-800">Endereço</h3>
                      <address className="not-italic mt-1 text-secondary-600">
                        Av. Paulista, 1000<br />
                        Bela Vista, São Paulo - SP<br />
                        CEP: 01310-100
                      </address>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-secondary-800">Telefone</h3>
                      <p className="mt-1 text-secondary-600">(11) 5555-1234</p>
                      <p className="text-secondary-600">WhatsApp: (11) 98765-4321</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-secondary-800">Email</h3>
                      <motion.p 
                        className="mt-1 text-secondary-600"
                        whileHover={{ color: '#3b82f6' }}
                      >
                        contato@construreimateriais.com.br
                      </motion.p>
                      <motion.p 
                        className="text-secondary-600"
                        whileHover={{ color: '#3b82f6' }}
                      >
                        vendas@construreimateriais.com.br
                      </motion.p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-secondary-800">Horário de Funcionamento</h3>
                      <p className="mt-1 text-secondary-600">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-secondary-600">Sábados: 8h às 13h</p>
                    </div>
                  </motion.div>
                </div>
              </AnimateChildren>
            </div>
          </ScaleIn>
          
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-lg shadow-soft p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-4 border-b border-secondary-200 pb-2">Nossas Lojas</h2>
              
              <AnimateChildren staggerChildren={0.1} delay={0.2}>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ 
                      backgroundColor: 'rgba(59, 130, 246, 0.05)',
                      borderRadius: '0.5rem',
                      padding: '0.75rem',
                      marginLeft: '-0.75rem'
                    }}
                  >
                    <h3 className="text-lg font-medium mb-2 text-secondary-800">Loja Matriz - São Paulo</h3>
                    <p className="text-secondary-600">Av. Paulista, 1000, Bela Vista</p>
                    <p className="text-secondary-600">São Paulo - SP</p>
                    <p className="text-secondary-600">Tel: (11) 5555-1234</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ 
                      backgroundColor: 'rgba(59, 130, 246, 0.05)',
                      borderRadius: '0.5rem',
                      padding: '0.75rem',
                      marginLeft: '-0.75rem'
                    }}
                  >
                    <h3 className="text-lg font-medium mb-2 text-secondary-800">Loja Campinas</h3>
                    <p className="text-secondary-600">Av. Norte-Sul, 500, Centro</p>
                    <p className="text-secondary-600">Campinas - SP</p>
                    <p className="text-secondary-600">Tel: (19) 3333-1234</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ 
                      backgroundColor: 'rgba(59, 130, 246, 0.05)',
                      borderRadius: '0.5rem',
                      padding: '0.75rem',
                      marginLeft: '-0.75rem'
                    }}
                  >
                    <h3 className="text-lg font-medium mb-2 text-secondary-800">Loja Guarulhos</h3>
                    <p className="text-secondary-600">Rua das Palmeiras, 123, Jd. Maia</p>
                    <p className="text-secondary-600">Guarulhos - SP</p>
                    <p className="text-secondary-600">Tel: (11) 2222-1234</p>
                  </motion.div>
                </div>
              </AnimateChildren>
            </div>
          </FadeIn>
        </div>
        
        {/* Formulário de Contato */}
        <ScaleIn delay={0.2}>
          <div className="bg-white rounded-lg shadow-soft p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 border-b border-secondary-200 pb-2">Envie sua Mensagem</h2>
            
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div 
                  className="bg-success-100 border border-success-400 text-success-700 px-6 py-4 rounded-lg mb-4"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Mensagem enviada com sucesso!</p>
                      <p className="text-sm">Entraremos em contato em breve. Obrigado pelo seu interesse.</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimateChildren staggerChildren={0.05} delay={0.1}>
                    <div className="grid grid-cols-1 gap-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary-700">
                          Nome Completo *
                        </label>
                        <motion.input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-secondary-300 rounded-md p-2 border"
                          whileFocus={{ boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)' }}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                            Email *
                          </label>
                          <motion.input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-secondary-300 rounded-md p-2 border"
                            whileFocus={{ boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)' }}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-secondary-700">
                            Telefone
                          </label>
                          <motion.input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-secondary-300 rounded-md p-2 border"
                            whileFocus={{ boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)' }}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-secondary-700">
                          Assunto *
                        </label>
                        <motion.select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-secondary-300 rounded-md p-2 border"
                          whileFocus={{ boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)' }}
                        >
                          <option value="">Selecione um assunto</option>
                          <option value="Orçamento">Solicitar orçamento</option>
                          <option value="Produto">Informações sobre produto</option>
                          <option value="Suporte">Suporte técnico</option>
                          <option value="Reclamação">Reclamação</option>
                          <option value="Outro">Outro</option>
                        </motion.select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-secondary-700">
                          Mensagem *
                        </label>
                        <motion.textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-secondary-300 rounded-md p-2 border resize-none"
                          whileFocus={{ boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)' }}
                        />
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <Button
                          type="submit"
                          variant="primary"
                          className="w-full flex justify-center py-3 mt-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            'Enviar Mensagem'
                          )}
                        </Button>
                      </motion.div>
                      
                      <p className="text-xs text-secondary-500 mt-1">
                        * Campos obrigatórios
                      </p>
                    </div>
                  </AnimateChildren>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </ScaleIn>
      </div>
      
      {/* Mapa */}
      <FadeIn delay={0.5}>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Nossa Localização</h2>
          <div className="rounded-lg overflow-hidden shadow-soft h-96 bg-secondary-100">
            {/* Simulação de um mapa */}
            <div className="w-full h-full bg-secondary-100 flex items-center justify-center text-secondary-500">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="mt-2 text-lg">Mapa interativo seria carregado aqui</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default ContactPage;
