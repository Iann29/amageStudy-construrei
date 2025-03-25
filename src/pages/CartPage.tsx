import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { Product } from '../types/product';

interface CartItem {
  product: Product;
  quantity: number;
}

const CartPage: React.FC = () => {
  // Dados de exemplo para demonstração do carrinho
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: {
        id: '1',
        name: 'Furadeira de Impacto 750W',
        price: 299.90,
        imageUrl: 'https://placehold.co/200x200/e5e7eb/a3a3a3?text=Furadeira',
        category: 'Ferramentas'
      },
      quantity: 1
    },
    {
      product: {
        id: '3',
        name: 'Lâmpada LED 9W',
        price: 15.90,
        imageUrl: 'https://placehold.co/200x200/e5e7eb/a3a3a3?text=Lâmpada',
        category: 'Material Elétrico'
      },
      quantity: 3
    },
    {
      product: {
        id: '5',
        name: 'Torneira para Banheiro',
        price: 79.90,
        imageUrl: 'https://placehold.co/200x200/e5e7eb/a3a3a3?text=Torneira',
        category: 'Material Hidráulico'
      },
      quantity: 1
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);

  // Cálculos do carrinho
  const subtotal = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 300 ? 0 : 35.90;
  const discount = couponApplied ? discountAmount : 0;
  const total = subtotal + shipping - discount;

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'DESCONTO10') {
      setCouponApplied(true);
      setDiscountAmount(subtotal * 0.1);
    } else {
      alert('Cupom inválido ou expirado');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="py-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Seu Carrinho</h1>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
          <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="mt-4 text-xl font-medium">Seu carrinho está vazio</h2>
          <p className="mt-2 text-gray-500">
            Parece que você ainda não adicionou nenhum item ao seu carrinho.
          </p>
          <div className="mt-6">
            <Link to="/produtos">
              <Button variant="primary" className="w-full">
                Continuar Comprando
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Seu Carrinho</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Lista de Itens do Carrinho */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Itens do Carrinho ({cartItems.length})</h2>
            </div>
            
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.product.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
                  <div className="flex-shrink-0 mr-4 mb-4 sm:mb-0">
                    <img 
                      src={item.product.imageUrl} 
                      alt={item.product.name} 
                      className="w-20 h-20 object-cover rounded"
                    />
                  </div>
                  
                  <div className="flex-grow mb-4 sm:mb-0">
                    <Link to={`/produtos/${item.product.id}`} className="text-lg font-medium text-blue-600 hover:text-blue-800">
                      {item.product.name}
                    </Link>
                    {item.product.category && (
                      <p className="text-sm text-gray-500">{item.product.category}</p>
                    )}
                    <p className="text-lg font-semibold mt-1">
                      R$ {item.product.price.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded">
                      <button 
                        className="px-3 py-1 border-r border-gray-300"
                        onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="px-3 py-1">{item.quantity}</span>
                      <button 
                        className="px-3 py-1 border-l border-gray-300"
                        onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveItem(item.product.id)}
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="p-4 border-t border-gray-200 flex justify-between items-center">
              <Link to="/produtos" className="text-blue-600 hover:text-blue-800 flex items-center">
                <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Continuar Comprando
              </Link>
              <button
                className="text-red-600 hover:text-red-800 flex items-center"
                onClick={() => setCartItems([])}
              >
                <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Limpar Carrinho
              </button>
            </div>
          </div>
        </div>
        
        {/* Resumo do Pedido */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Resumo do Pedido</h2>
            </div>
            
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">R$ {subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}
                  </span>
                </div>
                
                {couponApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Desconto (10%)</span>
                    <span>- R$ {discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                
                {shipping > 0 && (
                  <div className="text-sm text-gray-500 mt-2">
                    Adicione R$ {(300 - subtotal).toFixed(2)} em produtos para ganhar frete grátis!
                  </div>
                )}
              </div>
              
              <div className="mt-6">
                <div className="flex items-center mb-4">
                  <input
                    type="text"
                    placeholder="Código do cupom"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    disabled={couponApplied}
                  />
                  <button
                    className={`px-4 py-2 rounded-r-md ${
                      couponApplied 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                    onClick={handleApplyCoupon}
                    disabled={couponApplied}
                  >
                    Aplicar
                  </button>
                </div>
                
                {couponApplied && (
                  <div className="bg-green-100 text-green-700 p-2 rounded-md mb-4 text-sm">
                    Cupom DESCONTO10 aplicado com sucesso!
                  </div>
                )}
                
                <Button 
                  variant="primary" 
                  className="w-full py-3 text-lg mb-4"
                >
                  Finalizar Compra
                </Button>
                
                <div className="text-center text-sm text-gray-500 space-y-1">
                  <p>Formas de pagamento aceitas</p>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="px-2 py-1 bg-gray-100 rounded">Cartão de Crédito</span>
                    <span className="px-2 py-1 bg-gray-100 rounded">Boleto</span>
                    <span className="px-2 py-1 bg-gray-100 rounded">Pix</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <h3 className="font-medium mb-2">Precisa de ajuda?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Entre em contato com nosso atendimento para tirar dúvidas sobre seu pedido.
            </p>
            <div className="flex space-x-2">
              <Link to="/contato" className="text-blue-600 hover:text-blue-800 text-sm">
                Fale Conosco
              </Link>
              <span className="text-gray-400">|</span>
              <a href="tel:+551155551234" className="text-blue-600 hover:text-blue-800 text-sm">
                (11) 5555-1234
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
