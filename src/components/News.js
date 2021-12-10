import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=[];
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false
        }
    }

    async componentDidMount(){
        let url='https://newsapi.org/v2/top-headlines?country=us&apiKey=09481b050f874c2f827d3c9345e96de3';
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({
            articles:parsedData.articles
        })
    }
    render() {
        return (
            <>
            <div className="container">
                   <h2 className='text-center mb-5'>News Headline</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                      return <div className='col-sm col-md-6 col-lg-4' key={element.url}>
                           <NewsItem className='m-10' title={element.title}   description={element.description} imageUrl={element.urlToImage} url={element.url}/>
                    </div>
                })}
                    
                </div>
            </div>
            </>
           
        )
    }
}

export default News
