import { useEffect, useState } from "react"
import { VITE_API_KEY } from "../apikey";
import axios from "axios";
import NewsItem from "./newsitem";
const Newsboard = ({category}) => {
    const [articles,setArticles]=useState([]);
    useEffect(()=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${VITE_API_KEY}`).then((response)=>{
        console.log(response.data.articles);
        setArticles(response.data.articles)
    })
    },[category])
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default Newsboard
