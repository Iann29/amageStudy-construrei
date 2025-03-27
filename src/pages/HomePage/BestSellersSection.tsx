// src/pages/HomePage/BestSellersSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaFire } from 'react-icons/fa';
import getImageUrl from '../../utils/debugImages';
import ProductCard from '../../components/products/ProductCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/components/BestSellersSection.css';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// --- Interface e Dados ---
interface ProductItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  img: string;
  tag?: string;
  unit?: string;
  inStock?: boolean;
  description?: string;
}

const bestSellers: ProductItem[] = [
  { id: '1', name: 'Cimento Super Forte 50kg - Marca Líder', price: 49.90, originalPrice: 55.00, rating: 4.5, reviews: 120, img: '/images/productimages/tinta_premium_acrilica_branco_neve_18l.png', tag: 'Mais Vendido', inStock: true, description: 'Cimento de alta resistência para obras estruturais' },
  { id: '2', name: 'Kit Chuveiro Moderno Cromado Ducha Luxo', price: 289.90, originalPrice: 350.00, rating: 4.8, reviews: 85, img: '/images/productimages/tinta_premium_acrilica_branco_neve_18l.png', tag: '-17%', inStock: true, description: 'Ducha com acabamento cromado e jato ajustável' },
  { id: '3', name: 'Furadeira de Impacto Pro 750W 220V', price: 450.00, rating: 4.7, reviews: 210, img: '/images/productimages/tinta_premium_acrilica_branco_neve_18l.png', inStock: true, description: 'Furadeira profissional com controle de velocidade' },
  { id: '4', name: 'Tinta Premium Acrílica Branco Neve 18L', price: 320.00, rating: 4.6, reviews: 150, img: '/images/productimages/tinta_premium_acrilica_branco_neve_18l.png', inStock: false, description: 'Tinta premium com acabamento fosco e alta cobertura' },
  { id: '5', name: 'Porcelanato Calacatta Gold Polido 80x80cm', price: 119.90, unit: '/m²', rating: 4.9, reviews: 95, img: '/images/productimages/tinta_premium_acrilica_branco_neve_18l.png', tag: 'Premium', inStock: true, description: 'Porcelanato de alto brilho inspirado no mármore italiano' },
  { id: '6', name: 'Caixa d\'Água Fortlev 1000L', price: 499.00, originalPrice: 549.00, rating: 4.4, reviews: 112, img: '/images/productimages/tinta_premium_acrilica_branco_neve_18l.png', tag: '-9%', inStock: true, description: 'Caixa d\'água de polietileno com tampa de encaixe' },
  { id: '7', name: 'Argamassa ACIII Cinza 20kg', price: 25.50, rating: 4.3, reviews: 180, img: '/images/productimages/tinta_premium_acrilica_branco_neve_18l.png', inStock: true, description: 'Argamassa flexível para áreas internas e externas' },
  { id: '8', name: 'Conjunto Vaso Sanitário + Caixa Acoplada Smart', price: 699.00, originalPrice: 780.00, rating: 4.6, reviews: 77, img: '/images/productimages/tinta_premium_acrilica_branco_neve_18l.png', tag: '-10%', inStock: true, description: 'Conjunto sanitário com sistema de duplo acionamento' },
];

const BestSellersSection: React.FC = () => {
  return (
    <section className="bestsellers-section py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <motion.div
          className="section-header mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-2">
            <FaFire className="text-primary-500 mr-2 text-xl" />
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800">Produtos Mais Vendidos</h2>
          </div>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-primary-500 rounded-full mb-4"></div>
          </div>
          <p className="text-center text-secondary-600 max-w-2xl mx-auto">
            Os produtos preferidos pelos nossos clientes com as melhores avaliações e preços imbatíveis.
          </p>
        </motion.div>

        {/* Carrossel de Produtos */}
        <motion.div
          className="products-carousel relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="bestsellers-swiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              }
            }}
          >
            {bestSellers.map((product) => (
              <SwiperSlide key={product.id} className="h-auto pb-12">
                <ProductCard 
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    originalPrice: product.originalPrice,
                    imageUrl: product.img,
                    rating: product.rating,
                    reviewCount: product.reviews,
                    inStock: product.inStock ?? true,
                    tag: product.tag,
                    description: product.description || '',
                    unit: product.unit,
                  }}
                  showAddToCart={true}
                  showQuickView={true}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Chamada para Ação */}
        <motion.div
          className="view-all-products mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/produtos">
            <button className="inline-flex items-center px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg shadow-lg transition-all duration-300">
              Ver Catálogo Completo
              <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BestSellersSection;