/**
 * Utilitário de DEBUG para mapear caminhos de imagem locais para URLs externas
 * Remova este arquivo e suas referências quando for usar imagens reais
 */

// Indica se o modo de depuração de imagens está ativo
const DEBUG_IMAGES_ENABLED = true;

// Categorias para imagens de construção no Unsplash
const CONSTRUCTION_CATEGORIES = [
  'construction',
  'architecture',
  'building',
  'tools',
  'renovation',
  'interior',
  'paint',
  'concrete'
];

// Mapeamento de imagens específicas (para controle maior)
const SPECIFIC_IMAGES: Record<string, string> = {
  // Hero e elementos principais
  '/images/hero-background.jpg': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200',
  '/images/hero-product.png': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=400',
  '/images/expert-consultant.jpg': 'https://images.unsplash.com/photo-1574359411659-11a4dd9fd481?q=80&w=500',
  
  // Novo hero da página inicial
  '/images/hero/modern-construction-site.jpg': 'https://images.unsplash.com/photo-1590076082844-9cb88f5ba07d?q=80&w=1920',
  
  // Categorias
  '/images/categories/cat-basicos.jpg': 'https://images.unsplash.com/photo-1583765481754-91defa98d197?q=80&w=400',
  '/images/categories/cat-eletrica.jpg': 'https://images.unsplash.com/photo-1596612265308-51c10d53156a?q=80&w=400',
  '/images/categories/cat-hidraulica.jpg': 'https://images.unsplash.com/photo-1585704032915-c3400ae89507?q=80&w=400',
  '/images/categories/cat-ferramentas.jpg': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=400',
  '/images/categories/cat-acabamentos.jpg': 'https://images.unsplash.com/photo-1512236258305-32fb314d9ade?q=80&w=400',
  '/images/categories/cat-estrutural.jpg': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400',
  
  // Produtos
  '/images/products/product-1.jpg': 'https://images.unsplash.com/photo-1572981779307-41ede25abf7d?q=80&w=400',
  '/images/products/product-2.jpg': 'https://images.unsplash.com/photo-1616593871468-2a9559252c68?q=80&w=400',
  '/images/products/product-3.jpg': 'https://images.unsplash.com/photo-1601184700131-3328b33d9b05?q=80&w=400',
  '/images/products/product-4.jpg': 'https://images.unsplash.com/photo-1581245030756-76e1f6446668?q=80&w=400',
  
  // Novos produtos
  '/images/products/cimento-forte.jpg': 'https://images.unsplash.com/photo-1603010011686-91fbc88c2f95?q=80&w=400',
  '/images/products/chuveiro-moderno.jpg': 'https://images.unsplash.com/photo-1517646331032-9e8d5183de95?q=80&w=400',
  '/images/products/furadeira-pro.jpg': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400',
  '/images/products/tinta-premium.jpg': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400',
  '/images/products/porcelanato-calacatta.jpg': 'https://images.unsplash.com/photo-1599791095070-8693fb089859?q=80&w=400',
  '/images/products/caixa-fortlev.jpg': 'https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=400',
  
  // Banner promocional
  '/images/promo/ferramentas-banner.png': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600'
};

/**
 * Gera uma URL de imagem aleatória do Unsplash com a categoria de construção
 */
const getRandomConstructionImage = (width = 600, height = 400): string => {
  const randomCategory = CONSTRUCTION_CATEGORIES[Math.floor(Math.random() * CONSTRUCTION_CATEGORIES.length)];
  return `https://source.unsplash.com/random/${width}x${height}/?${randomCategory}`;
};

/**
 * Retorna uma URL para uma imagem de placeholder com um texto
 */
const getPlaceholderImage = (width = 600, height = 400, text = 'Construrei'): string => {
  // Encode o texto para URL
  const encodedText = encodeURIComponent(text);
  // Cores para os placeholders
  const bgColor = '1a56db';
  const textColor = 'FFFFFF';
  
  return `https://via.placeholder.com/${width}x${height}/${bgColor}/${textColor}?text=${encodedText}`;
};

/**
 * Função principal para obter URL de imagem
 * Use esta função para todas as imagens no projeto
 */
export const getImageUrl = (localPath: string): string => {
  // Se o debug não estiver habilitado, retorna o caminho original
  if (!DEBUG_IMAGES_ENABLED) {
    return localPath;
  }
  
  // Verificar se temos uma imagem específica mapeada
  if (SPECIFIC_IMAGES[localPath]) {
    return SPECIFIC_IMAGES[localPath];
  }
  
  // Verificar se é uma imagem de produto
  if (localPath.includes('/products/')) {
    return getRandomConstructionImage();
  }
  
  // Para qualquer outro caso, retornar um placeholder
  return getPlaceholderImage(800, 600, localPath.split('/').pop()?.split('.')[0] || 'Construrei');
};

export default getImageUrl;
