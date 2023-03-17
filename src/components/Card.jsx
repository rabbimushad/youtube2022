import React from 'react'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'; 
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import { Link } from 'react-router-dom';

const Card = ({ id,img, name, likedBy, description, deals, hashtag, weblink }) => {
  
  const subdescription = description.substring(0, 100) + "...";

  return (
  <div className="card flex display m-3">
      <div className="card-body">
        <div className='d-flex justify-content-between align-items-center'>
          <h4 className="card-title p-2 text-white">{name}</h4>
          <div className='card-subtitle mb-2 flex display border rounded p-1' >
            <FavoriteTwoToneIcon className="flex display"/>
            <h6 className="flex display text-muted">{likedBy}</h6>
          </div>
        </div>
       <Link to={`/tooldetail/${id}`} className='btnstyle'>
        <div className='mb-4'>
            <img className='cardimg imgzoom mb-3' src={img} alt={name} />
            <p className="card-text text-justify ">{subdescription}</p>
        </div>
        
        </Link>
        <div className='d-flex justify-content-between align-items-center mt-2 mb-3 text-white'>
          <h6>#{hashtag}</h6>
          <div className='card-subtitle d-flex justify-content-between align-items-center border rounded p-1' >
            <AttachMoneyTwoToneIcon className="justify-content-between align-items-center"/>
           <h6 className="justify-content-between align-items-center">{deals}</h6>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
           <a href={weblink} className="card-link btnstyle border rounded p-1">Visit Website</a>
           <a href={weblink} className="card-link btnstyle border rounded p-1 ">Add to favourites</a>
        </div>
   
  </div>
</div>
  )
}

export default Card