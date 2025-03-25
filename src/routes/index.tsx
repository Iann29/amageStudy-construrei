import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CartPage from '../pages/CartPage';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'produtos',
        element: <ProductListPage />
      },
      {
        path: 'produtos/:productId',
        element: <ProductDetailPage />
      },
      {
        path: 'sobre',
        element: <AboutPage />
      },
      {
        path: 'contato',
        element: <ContactPage />
      },
      {
        path: 'carrinho',
        element: <CartPage />
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
