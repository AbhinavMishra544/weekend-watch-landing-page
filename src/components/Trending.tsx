import Carousel from 'better-react-carousel';
import { useEffect, useState } from 'react';
import getTrendingMoviesAndShows from './../service/get-trending-movies-and-shows-service';

type MovieSliderProp = {
    trendingList: Array<any>,
}

const Trending : React.FC = () => {
  const [trendingList, setTrendingList] = useState([]);

    useEffect(()=>{
        const getList = async () => {
            const fetchedData = await getTrendingMoviesAndShows();
            setTrendingList(fetchedData);
        }
        getList();
    },[]);

    return (
        <div  className='trending-list'>
            <div>
                <span> What’s Popular </span>
                <span></span>
            </div>
            <MovieSlider trendingList={trendingList}/>

        </div>
    )
}

const MovieSlider : React.FC <MovieSliderProp> = ({ trendingList })  => {
    return (
        <Carousel
            cols={6}
            gap={10}
            containerStyle={{margin:'0px', padding:'0px'}}
      >{
        trendingList && trendingList.map((item)=>{
            return (
                <Carousel.Item>
                <MovieCard info={item}/>
            </Carousel.Item>
            )
        })
      }
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

    return(
        <div className='movie-card'>
            <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${info.backdrop_path}`} className={'movie-img-card'} />
            <label>{info.title}</label>
            <div>{formatDate(info.release_date)}</div>
        </div>
    )
}

export default Trending