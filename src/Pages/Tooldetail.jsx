import React from 'react'
import { useParams } from 'react-router-dom'
import { contents } from '../contents/contents'
import LaunchIcon from '@mui/icons-material/Launch';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import ClassIcon from '@mui/icons-material/Class';

const Tooldetail = () => {
  const param = useParams()
  const tool = contents.find((content) => String(content.id) === param.id)

  const {id,img, name, likedBy, description, deals, hashtag, weblink} = tool
  return (
    <div className='container'>
    <div class="row">
      <div className='col-lg col-sm-4'>
        <div className='d-flex justify-content-between align-items-center m-3 text-white'>
          <div className='d-flex justify-content-center align-items-center '>
            <h2 className='m-3'>{name}</h2>
            <div className='border rounded p-1 justify-content-center align-items-center bg-secondary '>
              <a className='btnstyle p-2 font-weight-bold 
              text-dark' href={weblink} target='_blank' rel="noreferrer">VISIT</a>
              <LaunchIcon className='pointer'/>
            </div> 
          </div>
          <div className='card-subtitle mb-2 flex display border rounded p-1' >
              <FavoriteTwoToneIcon className="flex display"/>
              <h6 className="flex display text-muted p-1">{likedBy}</h6>
            </div>
          </div>
            <div className='mb-4 d-flex justify-content-between'>
              <img className='detailimg mb-3' src={img} alt={name} />
              <div>
              <p className="card-text text-justify textbox">{description}</p>
                 <div className=' costbox border rounded mt-4 p-1 flex display' >
                       <AttachMoneyTwoToneIcon className="pr-3 "/>
                  <h6 className='text-center'>{deals}</h6>
                </div>
                {/* <div className='d-flex sidebox'>
                  <div className='costbox border rounded mt-4 p-1 flex display' >
                       <AttachMoneyTwoToneIcon className="pr-3 "/>
                        <h6 className='text-center'>{deals}</h6>
                  </div>
                   <div className=' costbox border rounded mt-4 p-1 flex display' >
                       <AttachMoneyTwoToneIcon className="pr-3 "/>
                        <h6 className='text-center'>{deals}</h6>
                  </div>
                </div> */}
                   <div className=' costbox border rounded mt-4 p-1 flex display' >
                       <ClassIcon className="pr-3 "/>
                    <h6 className='text-center'>{hashtag}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Tooldetail