// src/components/products/MinimalProductThumbnail.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../../types/product';
import Button from '../../components/common/Button'; // <-- Caminho corrigido
import { FaShoppingCart, FaEye } from 'react-icons/fa'; // Ícones

interface MinimalProductThumbnailProps {
  product: Product;
}

const MinimalProductThumbnail: React.FC<MinimalProductThumbnailProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const overlayVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.15, ease: 'easeIn' } },
  };

  return (
    <motion.div
      className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md cursor-pointer group bg-gray-100" // aspect-square força proporção, ajuste w-full se necessário
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }} // Efeito sutil de escala no hover geral
    >
      {/* Imagem de Fundo */}
      <motion.img
        src={product.imageUrl}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
        // style={{ filter: isHovered ? 'brightness(0.8)' : 'brightness(1)' }} // Escurece um pouco no hover
      />

      {/* Overlay com Gradiente Escuro (sempre presente, mas opacidade muda) */}
       <motion.div
         className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/50 to-transparent pointer-events-none"
         initial={{ opacity: 0 }}
         animate={{ opacity: isHovered ? 1 : 0 }}
         transition={{ duration: 0.2 }}
       />

      {/* Conteúdo que aparece no Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-0 left-0 right-0 p-3 text-white z-10"
          >
            {/* Nome do Produto */}
            <Link to={`/produtos/${product.id}`} className="block mb-1.5">
              <h4 className="font-semibold text-sm leading-tight line-clamp-2 hover:text-primary-300 transition-colors">
                {product.name}
              </h4>
            </Link>

            {/* Preço */}
            <p className="text-lg font-bold mb-2">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>

            {/* Botões de Ação Compactos */}
            <div className="flex justify-between items-center gap-2">
               <Link to={`/produtos/${product.id}`} className="flex-1">
                 <Button
                   variant="outline"
                   size="sm"
                   className="!py-1 !px-2 text-xs w-full border-white/50 text-white/90 hover:bg-white/10" // Classes customizadas para o botão outline branco
                 >
                    <FaEye className="mr-1"/> Ver
                 </Button>
               </Link>
               {product.inStock && (
                 <Button
                   variant="primary"
                   size="sm"
                   className="!py-1 !px-2 text-xs flex-1" // Botão primário menor
                   onClick={() => { console.log('Adicionado Rápido:', product.id); }}
                 >
                   <FaShoppingCart className="mr-1"/> Add
                 </Button>
               )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tag (opcional, se precisar) */}
      {product.tag && !isHovered && ( // Mostra tag só se não estiver hovered
         <span className={`absolute top-2 right-2 py-0.5 px-2 rounded text-xs font-bold z-5 ${
              product.tag === 'Mais Vendido' ? 'bg-primary-500 text-white' :
              product.tag.startsWith('-') ? 'bg-warning-500 text-white' :
              'bg-accent-600 text-white'
          }`}>
              {product.tag}
          </span>
      )}

    </motion.div>
  );
};

export default MinimalProductThumbnail;