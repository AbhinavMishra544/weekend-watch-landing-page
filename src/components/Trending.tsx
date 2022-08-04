import Carousel from 'better-react-carousel';
import { useEffect, useState } from 'react';
import getTrendingMoviesAndShows from './../service/get-trending-movies-and-shows-service';

type MovieSliderProp = {
    trendingList: Array<any>,
}

const Trending : React.FC = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [selectedWatchOption, setSelectedWatchOption] = useState('streaming');

    useEffect(()=>{
        const getList = async () => {
            const fetchedData = await getTrendingMoviesAndShows();
            setTrendingList(fetchedData);
        }
        getList();
    },[]);

    return (
        <div className='trending-list'>
            <div className='whats-popular-option'>
                <span className='popular-title-text'> What’s Popular </span>
                <div className='watch-category'>
                    <div  className={`${selectedWatchOption === 'streaming' ? 'selected' : ''} watch-item`} onClick={()=>setSelectedWatchOption('streaming')}>
                        Streaming
                    </div>
                    <div className={`${selectedWatchOption === 'ontv' ? 'selected' : ''} watch-item`} onClick={()=>setSelectedWatchOption('ontv')}>
                        On TV
                    </div>
                </div>
            </div>
            <MovieSlider trendingList={trendingList}/>
        </div>
    )
}

const MovieSlider : React.FC <MovieSliderProp> = ({ trendingList })  => {
    return (
        <Carousel
            cols={6}
            gap={16}
            containerStyle={{margin:'0px', padding:'2.378rem 9.125rem 3rem 9.125rem'}}
        >
        {trendingList && trendingList.map((item)=>{
            return (
                <Carousel.Item>
                <MovieCard info={item}/>
            </Carousel.Item>
            )
        })}
  </Carousel>
    )
}

const MovieCard: React.FC <any> = ({ info }) =>  {

    const formatDate = (date: string) : string => {
        const formattedDate =  new Date(date)
        let result = '';
        result += formattedDate.toLocaleString( 'default', { month : 'long' } );
         result += ' '+ formattedDate.getDate() + ', ';
         result += formattedDate.toLocaleString( 'default', { year : 'numeric' } );
        return result;
    }
    const RenderStarRating: React.FC <any> = (props) : any => {
        const { ratingInfo } = props;
        const stars = [];
        for(let i=0;i<ratingInfo.vote_average/2 ; i++){
            stars.push(
                <img
                    src='./../star.svg'
                    height={15}
                    width={16}
                    alt={ratingInfo.title}
                />
            )
        }
        return <div style={{'display':'flex', 'marginTop':'4px'}}> {stars} </div>

    }

    return(
        <div className='movie-card'>
            <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${info.backdrop_path}`} className={'movie-img-card'} alt={info.title}/>
            <div className='movie-card-details'>
                <label className='movie-card-title'>{info.title}</label>
                <label className='movie-release-date'>{formatDate(info.release_date)}</label>
                {info.vote_average ? <RenderStarRating ratingInfo={ (info) }/> : null}
            </div>
        </div>
    )
}

export default Trending