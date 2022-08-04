import Carousel from 'better-react-carousel';
import { useEffect, useState } from 'react';
import getTrendingMoviesAndShows from './../service/get-trending-movies-and-shows-service';

type MovieSliderProp = {
    trendingList: Array<any>,
    watchType: String,
}

const Trending : React.FC = () => {
  const [trendingList, setTrendingList] = useState<Array<JSON>>([]);
  const [selectedWatchOption, setSelectedWatcOption] = useState<string>('movie');

    useEffect(()=>{
        const getList = async () => {
            const fetchedData = await getTrendingMoviesAndShows();
            setTrendingList(fetchedData);
        }
        getList();
    },[]);

    const watchOptionHandler = ( type: string ) => {
        setSelectedWatcOption(type);
        
    }

    return (
        <div className='trending-list'>
            <div className='whats-popular-option'>
                <span className='popular-title-text'> What’s Popular </span>
                <div className='watch-category'>
                    <div
                        className={`${ selectedWatchOption === 'movie' ? 'selected' : ''} watch-item`}
                        onClick={()=>watchOptionHandler('movie')}
                    >
                        Streaming
                    </div>
                    <div
                        className={`${ selectedWatchOption === 'tv' ? 'selected' : ''} watch-item`}
                        onClick={()=>watchOptionHandler('tv')}
                    >
                        On TV
                    </div>
                </div>
            </div>
            <MovieSlider trendingList={trendingList} watchType={selectedWatchOption}/>
        </div>
    )
}

const MovieSlider : React.FC <MovieSliderProp> = ({ trendingList, watchType })  => {

    const CustomLeftArrow = () => (
       <span className='left-arrow carousel-arrow'>
           <span>{'<'}</span>
       </span>
    )

    const CustomRightArrow = () => (
        <span className='right-arrow carousel-arrow'>
            <span>{'>'}</span>
        </span>
    )

    return (
        <Carousel
            cols={6}
            containerStyle={{ display:'flex',justifyContent:'space-between', margin:'0px', padding:'2.378rem 9.125rem 3rem 9.125rem'}}
            arrowLeft={CustomLeftArrow}
            arrowRight={CustomRightArrow}
        >
            {trendingList && trendingList.map((item)=>{
                return (
                    item.media_type === watchType ? <Carousel.Item>
                        <MovieCard info={item} key={item.id} watchType={watchType}/>
                    </Carousel.Item> : null
                )
            })}
        </Carousel>
    )
}

const MovieCard: React.FC <any> = ({ info, watchType }) =>  {
    const providedDate = watchType === 'movie' ? info.release_date : info.first_air_date;

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
                    key={i+1}
                    src='./../star.svg'
                    height={15}
                    width={16}
                    alt={ratingInfo.title}
                />
            )
        }
        return <div style={{'display':'flex', 'marginTop':'4px'}}> {stars} </div>
    }

    return (
        <div className='movie-card'>
            <img
                src={`https://image.tmdb.org/t/p/w440_and_h660_face${info.backdrop_path}`}
                className={'movie-img-card'}
                alt={info.title}
                height={239}
                width={178}
            />
            <div className='movie-card-details'>
                <label className='movie-card-title'>{info.title}</label>
                <label className='movie-release-date'>{formatDate(providedDate)}</label>
                {info.vote_average ? <RenderStarRating ratingInfo={ (info) }/> : null}
            </div>
        </div>
    )
}

export default Trending