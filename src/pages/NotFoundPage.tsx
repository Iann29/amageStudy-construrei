import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-blue-700">404</h1>
      <h2 className="text-3xl font-bold mt-8 mb-4">Página não encontrada</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Desculpe, a página que você está procurando não existe ou foi movida.
      </p>
      <div className="flex space-x-4">
        <Link to="/">
          <Button variant="primary">
            Voltar para a Página Inicial
          </Button>
        </Link>
        <Link to="/produtos">
          <Button variant="outline">
            Explorar Produtos
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
