import React from 'react'

function Card({ title, description, img, url, date, mode}) {
  return (
    <>
      <div className={`card text-bg-${mode==='light'?'light':'dark'}`} style={{ width: '21rem' }}>
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">{new Date(date).toGMTString()}</small></p>
          <a href={url} target='_blank' className="btn btn-primary">Read More</a>
        </div>
      </div>
    </>
  )
}

export default Card