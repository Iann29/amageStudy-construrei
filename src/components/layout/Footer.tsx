import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const linkVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, color: '#a5b4fc', transition: { duration: 0.2 } }
  };
  
  const socialIcons = [
    {
      name: 'Facebook',
      icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    },
    {
      name: 'Instagram',
      icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.013 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.013-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427.25-.668.644-1.272 1.153-1.772a4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.048 1.407-.06 4.123-.06h.08z" clipRule="evenodd" />
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    },
    {
      name: 'WhatsApp',
      icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    }
  ];
  
  const categories = [
    { title: 'Ferramentas', path: '/produtos' },
    { title: 'Material Elétrico', path: '/produtos' },
    { title: 'Material Hidráulico', path: '/produtos' },
    { title: 'Tintas e Acessórios', path: '/produtos' },
    { title: 'Pisos e Revestimentos', path: '/produtos' }
  ];
  
  const information = [
    { title: 'Sobre Nós', path: '/sobre' },
    { title: 'Contato', path: '/contato' },
    { title: 'Política de Privacidade', path: '/' },
    { title: 'Termos e Condições', path: '/' }
  ];
  
  return (
    <footer className="relative bg-gradient-to-br from-secondary-900 to-secondary-800 text-white pt-16 pb-6 overflow-hidden">
      {/* Efeito de background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 -right-24 w-80 h-80 bg-accent-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Sobre a empresa */}
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-xl font-bold font-heading mb-4 relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="relative z-10">Construrei Materiais</span>
                <motion.span 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                ></motion.span>
              </motion.h3>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                Sua loja de materiais de construção com os melhores preços e produtos de qualidade. Estamos no mercado há mais de 15 anos oferecendo soluções completas para construção e reforma.
              </p>
              <div className="flex space-x-5">
                {socialIcons.map((social, index) => (
                  <motion.a 
                    key={index}
                    href="#" 
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Categorias */}
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-lg font-semibold font-heading mb-6 relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="relative z-10">Categorias</span>
                <motion.span 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                ></motion.span>
              </motion.h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <Link to={category.path} className="text-secondary-300 hover:text-white transition-colors flex items-center group">
                        <motion.span 
                          className="w-0 h-0.5 bg-primary-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"
                        ></motion.span>
                        {category.title}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Informações */}
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-lg font-semibold font-heading mb-6 relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="relative z-10">Informações</span>
                <motion.span 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                ></motion.span>
              </motion.h3>
              <ul className="space-y-3">
                {information.map((info, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <Link to={info.path} className="text-secondary-300 hover:text-white transition-colors flex items-center group">
                        <motion.span 
                          className="w-0 h-0.5 bg-primary-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"
                        ></motion.span>
                        {info.title}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Contato */}
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-lg font-semibold font-heading mb-6 relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="relative z-10">Contato</span>
                <motion.span 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                ></motion.span>
              </motion.h3>
              <address className="not-italic text-secondary-300 space-y-3">
                <motion.p 
                  className="flex items-center"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <svg className="h-5 w-5 mr-3 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Rua Exemplo, 123, Bairro Centro
                </motion.p>
                <motion.p 
                  className="flex items-center"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <svg className="h-5 w-5 mr-3 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contato@construreimateriais.com.br
                </motion.p>
                <motion.p 
                  className="flex items-center"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <svg className="h-5 w-5 mr-3 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (11) 1234-5678
                </motion.p>
              </address>
              
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.button 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-lg transition-colors flex items-center space-x-2 shadow-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Enviar mensagem</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </FadeIn>
        
        <motion.div 
          className="border-t border-secondary-700 mt-12 pt-8 text-center text-secondary-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
            <span>&copy; {currentYear} Construrei Materiais. Todos os direitos reservados.</span>
            <span className="hidden md:inline">•</span>
            <span>Desenvolvido com <span className="text-primary-400">💙</span> por Equipe Construrei</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
