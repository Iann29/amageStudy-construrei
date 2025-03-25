// src/pages/HomePage/BestSellersSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import getImageUrl from '../../utils/debugImages';
import MinimalProductThumbnail from './MinimalProductThumbnail'; // <--- Importe o NOVO componente

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Só navegação, sem paginação talvez?
import 'swiper/css/free-mode'; // Para um scroll mais livre
import '../../styles/components/BestSellersSection.css'; // Caminho atualizado para o arquivo CSS

// Import required modules
import { Navigation, FreeMode, Mousewheel } from 'swiper/modules'; // Usar FreeMode e Mousewheel

// --- Interface e Dados (mantidos como antes, mas ProductCard não é mais usado aqui) ---
interface ProductItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number; // Ainda pode ser útil para ordenar, mesmo sem mostrar
  reviews: number;
  img: string;
  tag?: string;
  unit?: string;
  inStock?: boolean; // Adicionado para o botão Add
}
const bestSellers: ProductItem[] = [
   // ... seus dados de bestSellers ...
   // Adicione inStock: true/false para cada um se possível
    { id: '1', name: 'Cimento Super Forte 50kg - Marca Líder', price: 49.90, originalPrice: 55.00, rating: 4.5, reviews: 120, img: getImageUrl('/images/products/cimento-forte.jpg'), tag: 'Mais Vendido', inStock: true },
    { id: '2', name: 'Kit Chuveiro Moderno Cromado Ducha Luxo', price: 289.90, originalPrice: 350.00, rating: 4.8, reviews: 85, img: getImageUrl('/images/products/chuveiro-moderno.jpg'), tag: '-17%', inStock: true },
    { id: '3', name: 'Furadeira de Impacto Pro 750W 220V', price: 450.00, rating: 4.7, reviews: 210, img: getImageUrl('/images/products/furadeira-pro.jpg'), inStock: true },
    { id: '4', name: 'Tinta Premium Acrílica Branco Neve 18L', price: 320.00, rating: 4.6, reviews: 150, img: getImageUrl('/images/products/tinta-premium.jpg'), inStock: false }, // Exemplo esgotado
    { id: '5', name: 'Porcelanato Calacatta Gold Polido 80x80cm', price: 119.90, unit: '/m²', rating: 4.9, reviews: 95, img: getImageUrl('/images/products/porcelanato-calacatta.jpg'), tag: 'Premium', inStock: true },
    { id: '6', name: 'Caixa d\'Água Fortlev 1000L', price: 499.00, originalPrice: 549.00, rating: 4.4, reviews: 112, img: getImageUrl('/images/products/caixa-fortlev.jpg'), tag: '-9%', inStock: true },
    { id: '7', name: 'Argamassa ACIII Cinza 20kg', price: 25.50, rating: 4.3, reviews: 180, img: getImageUrl('/images/products/argamassa-ac3.jpg'), inStock: true },
    { id: '8', name: 'Conjunto Vaso Sanitário + Caixa Acoplada Smart', price: 699.00, originalPrice: 780.00, rating: 4.6, reviews: 77, img: getImageUrl('/images/products/vaso-smart.jpg'), tag: '-10%', inStock: true },
];


const BestSellersSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-secondary-50"> {/* Fundo suave */}
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <motion.div
          className="text-center mb-10" // Menos margem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-3">MAIS VENDIDOS</h2> {/* Título mais direto */}
           <div className="w-16 h-1 bg-primary-500 mx-auto mb-4"></div> {/* Linha decorativa */}
          {/* <p>...</p>  Pode remover o parágrafo se quiser mais minimalista */}
        </motion.div>

        {/* Swiper Horizontal Minimalista */}
        <motion.div
          className="mb-12 relative group/swiper" // group/swiper para controlar setas no hover
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, FreeMode, Mousewheel]}
            slidesPerView={'auto'} // Deixa o Swiper calcular baseado no width dos slides
            spaceBetween={16} // Espaço menor entre os thumbs
            freeMode={true} // Permite scroll "livre"
            mousewheel={true} // Habilita scroll com a roda do mouse
            navigation={{ // Configuração das setas
              nextEl: '.swiper-button-next-bestsellers',
              prevEl: '.swiper-button-prev-bestsellers',
            }}
            className="!py-2" // Padding vertical mínimo
            breakpoints={{
                // Não precisamos mais de breakpoints complexos se slidesPerView for 'auto'
                // Mas podemos ajustar spaceBetween se quisermos
                 768: {
                     spaceBetween: 20,
                 },
                 1024: {
                    spaceBetween: 24,
                 }
            }}
          >
            {bestSellers.map((product) => (
              <SwiperSlide key={product.id} className="!w-36 sm:!w-40 md:!w-44 lg:!w-48"> {/* Largura fixa para cada slide! */}
                <MinimalProductThumbnail
                  product={{ // Mapeando dados
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    imageUrl: product.img,
                    rating: product.rating, // Passando mesmo sem usar no thumb base
                    inStock: product.inStock ?? true, // Default para true se undefined
                    tag: product.tag, // Passando a tag
                    // description, category podem ser omitidos
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botões de Navegação Customizados (aparecem no hover do container) */}
          <div className="swiper-button-prev-bestsellers absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer p-2 bg-white/50 rounded-full shadow-md opacity-0 group-hover/swiper:opacity-100 transition-opacity duration-300 hover:bg-white/80 -translate-x-3">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </div>
          <div className="swiper-button-next-bestsellers absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer p-2 bg-white/50 rounded-full shadow-md opacity-0 group-hover/swiper:opacity-100 transition-opacity duration-300 hover:bg-white/80 translate-x-3">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>

        </motion.div>

        {/* Chamada para Ação - Catálogo Completo */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/produtos">
            <button className="inline-flex items-center px-6 py-2.5 border border-secondary-300 text-secondary-700 hover:bg-secondary-100 font-medium rounded-lg shadow-sm transition-all duration-300 text-sm">
              Ver Catálogo Completo
              <FaArrowRight className="ml-2 text-xs" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BestSellersSection;