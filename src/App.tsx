import './App.css';
import Layout from './components/layout';
import Carousel from 'better-react-carousel';
import Trending from './components/Trending';

function App() {
  const MyDot = ({ isActive } :{isActive:boolean}) => (
    <span
      style={{
        display: 'inline-block',
        opacity: isActive ? 1 : 0.48,
        color:'#FFFFFF',
        height: isActive ? '12px' : '12px',
        width: isActive ? '26px' : '12px',
        background: '#111',
        borderRadius:isActive ? '3464px' : '50%',
      }}
    ></span>
  )
  return (
    <Layout>
        <div className='banner'>
          <Carousel
            hideArrow={true}
            containerStyle={{margin:'0px', padding:'0px'}}
            showDots={true}
            dot={MyDot}
          >
            <Carousel.Item>
                <img width="100%" src="./../banner.jpg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="./../banner.jpg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="./../banner.jpg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="./../banner.jpg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="./../banner.jpg" />
            </Carousel.Item>
      </Carousel>

      <div className='banner-content'>
        <h1 className='banner-title'>Welcome to the weekend watch</h1>
        <h3 className='banner-description'>Millions of Movies, TV Shoes and many more</h3>
        <input className='searchbox' type={'search'} placeholder={'Search for movie, tv shoes, and person'}/>
      </div>
    </div>
    <Trending/>
    </Layout>
  );
}

export default App;
