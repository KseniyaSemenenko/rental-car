import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import Layout from './components/Layout';
import SvgSprite from './components/SvgSprite/SvgSprite';

const WelcomePage = lazy(() => import('../src/pages/WelcomePage/WelcomePage'));
const CatalogPage = lazy(() => import('../src/pages/CatalogPage/CatalogPage'));
const CarPage = lazy(() => import('../src/pages/CarPage/CarPage'));

function App() {
  return (
    <>
      <SvgSprite />
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CarPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
