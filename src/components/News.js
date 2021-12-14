import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import NewsItemCss from './NewsItem.css';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const fetchMoreData = async () => {
        props.setProgress(10)
       // setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=09481b050f874c2f827d3c9345e96de3&page=${(page+1)}&pageSize=20`;
        let data = await fetch(url);
        props.setProgress(50)
        let parsedData = await data.json();
        //setLoading(false);
      //  setArticle(article.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setPage(page + 1);
        props.setProgress(100)
    }

    useEffect( () => {
        fetchData();
        async function fetchData(){
            props.setProgress(10)
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=09481b050f874c2f827d3c9345e96de3&page=${page}&pageSize=20`;
            let data = await fetch(url);
            props.setProgress(50)
            let parsedData = await data.json();
            console.log(parsedData);
            //setLoading(false);
            setArticle(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            setPage(page + 1);
            props.setProgress(100)

        }  
    },[]);

    return (
        <>


            <h1 className='text-center mt-5'>Top Headline News-{((props.category).charAt(0).toUpperCase() + (props.category).slice(1))}</h1>
            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length !== totalResults}
                loader={<h4 className='text-center'><Spinner /></h4>}
            >
                <div className="container " style={{ padding: '20px' }}>
                    <div className="row">
                        {article.map((element) => {
                            return <div className='col-sm col-md-6 col-lg-4' key={element.url}>
                                <NewsItem className='m-10' title={element.title?element.title:'No title'} date={element.publishedAt} description={element.description} imageUrl={element.urlToImage} url={element.url} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>



        </>

    )

}

export default News
