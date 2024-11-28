// import { Linter } from 'eslint'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './components/card'
import Loading from './components/loading'

function News({ category, setProgress, mode }) {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)


    const getData = async () => {
        setArticles([])
        setLoading(false)
        setProgress(30)
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=12197558227a495091ad0132dd3c8af7&page=${page}&pageSize=5`)
        setProgress(80)
        let data = await res.json()
        setArticles(data.articles)
        setLoading(true)
        setTotalResults(data.totalResults)
        setProgress(100)
    }

    const toogleNext = async () => {
        setProgress(30)
        setArticles([])
        setLoading(false)
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=12197558227a495091ad0132dd3c8af7&page=${page + 1}&pageSize=5`)
        setProgress(80)
        setPage(page + 1)
        let data = await res.json()
        setArticles(data.articles)
        setLoading(true)
        setTotalResults(data.totalResults)
        setProgress(100)
    }

    const tooglePrevious = async () => {
        setProgress(30)
        setArticles([])
        setLoading(false)
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=12197558227a495091ad0132dd3c8af7&page=${page - 1}&pageSize=5`)
        setProgress(80)
        setPage(page - 1)
        let data = await res.json()
        setArticles(data.articles)
        setLoading(true)
        setTotalResults(data.totalResults)
        setProgress(100)
    }


    useEffect(() => {
        getData()
    }, [category])


    return (
        <>
            <div>

            </div>
            <div className='container'>
                <h1>Headlines</h1>
                {!loading && <Loading />}
                <div className='newsItem'>
                    {articles.map((ele) => {
                        return <Card mode={mode} key={ele.publishedAt} title={ele.title} description={ele.description} img={ele.urlToImage
                        } url={ele.url} date={ele.publishedAt} />
                    })
                    }
                </div>
                <div className='btnon'>
                    <button type="button" disabled={page <= 1} onClick={tooglePrevious} className={`btn fw-semibold btn-${mode === 'dark' ? 'light' : 'dark'} `}>Previous</button>
                    <button type="button" disabled={page >= Math.ceil(totalResults / 5)} onClick={toogleNext} className={`btn fw-semibold btn-${mode === 'dark' ? 'light' : 'dark'}`}>Next</button>
                </div>
            </div>
        </>
    )
}

export default News