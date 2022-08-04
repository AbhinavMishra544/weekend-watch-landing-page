import Carousel from 'better-react-carousel';

const BannerCarousel : React.FC = () => {
    const CustomDot = ({ isActive } : { isActive : boolean }) => (
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
        >
        </span>
      )

    return (  
        <div className='banner'>
            <Carousel
                hideArrow={true}
                containerStyle={ { margin:'0px', padding:'0px' } }
                showDots={true}
                dot={CustomDot}
            >
            <Carousel.Item>
                <img width="100%" src="./../banner.jpg" alt='banner'/>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="./../banner.jpg" alt='banner'/>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="./../banner.jpg" alt='banner'/>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="./../banner.jpg" alt='banner'/>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="./../banner.jpg" alt='banner'/>
            </Carousel.Item>
            </Carousel>

            <div className='banner-content'>
                <h1 className='banner-title'>Welcome to the weekend watch</h1>
                <h3 className='banner-description'>Millions of Movies, TV Shoes and many more</h3>
                <input className='searchbox' type={'search'} placeholder={'Search for movie, tv shoes, and person'}/>
            </div>
        </div>
    )
}

export default BannerCarousel