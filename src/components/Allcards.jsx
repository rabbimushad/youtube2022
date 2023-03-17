import React from 'react'
import Card from './Card'
import { contents } from '../contents/contents'


const Allcards = () => {
    
  return (
      <>
          
            <div className="section-preview">
              <div className='container'>
                  <div class="row">
                       {
                          contents.map(content => (
                              <div className="col-lg-4 col-sm-6" key={content.id}>
                                      <Card id={content.id} img={content.img} name={content.name} likedBy={content.likedBy} description={content.description} deals={content.deals} hashtag={content.hashtag} weblink={content.weblink} />
                              </div>
                ))  
      }
                  </div>
              </div>
          </div>  
      </>
  )
}

export default Allcards