import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import Layout from './components/Layout';

const WelcomePage = lazy(() => import('../src/pages/WelcomePage/WelcomePage'));
const CatalogPage = lazy(() => import('../src/pages/CatalogPage/CatalogPage'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/cars" element={<CatalogPage />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
