import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';
import Layout from './components/Layout';

const WelcomePage = lazy(() => import('../src/pages/WelcomePage/WelcomePage'));
const CatalogPage = lazy(() => import('../src/pages/CatalogPage/CatalogPage'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/catalog" element={<CatalogPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
