import React, { Component } from 'react';

const NewsItem=(props) => {


       
        return (
            <div>
                <div className="card position-relative mb-5">
                    <div style={{
                        position: 'absolute',
                        right: 0,
                        display: 'flex'
                    }}>
                        <span className=" translate-middle badge rounded-pill bg-danger">
                            {props.source}
                        </span>
                    </div>

                    <img className="card-img-top " src={props.imageUrl} alt='' />


                    <div className="card-body ">

                        <h5 className="card-title">{props.title}
                        </h5>
                        <p className="card-text">{props.description}</p>
                        <p class="card-text"><small class="text-muted">{(new Date(props.date)).toGMTString()}</small></p>
                        <a href={props.url} target='_blank.' className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>



        )
   
}

export default NewsItem
