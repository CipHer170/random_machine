import React from 'react'
import "./App.css"
import newsImage from "./images/cat.jpg"

function App() {
  return (
    <div className='App'>
      <div className="container">
        <div className="title">
        Respublika bo'yicha
           <h2>  yangiliklar</h2>
        </div>
        <div className="main-news">
          <div className="images">
          <img src={newsImage} className="news-image"/>
          </div>
          
          <div className="news-description">
            <div className="news-description-info">
              <div className="info">
              <h4 className="news-title">Muzey Yangiliklari</h4>
              <h4 className="news-location">Amaliy san'at muzeyi</h4>
              <h4 className="news-updated-time">day(week): time</h4> 
                </div>              
                <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptate ullam sed tempore quisquam doloribus rem excepturi ipsam neque recusandae culpa incidunt cumque perspiciatis perferendis et nihil cupiditate temporibus in nesciunt quam, ad voluptas facere beatae a! Voluptates, accusantium reiciendis.</p>
            </div>
            <div className="news-data">day month</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App