import './App.css';
import Layout from './components/Layout';
import Trending from './components/Trending';
import BannerCarousel from './components/BannerCarousel';

function App() {
  return (
    <Layout>
      <BannerCarousel/>
      <Trending/>
    </Layout>
  );
}

export default App;
