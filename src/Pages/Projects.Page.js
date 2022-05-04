import React, { useState} from 'react'
import { ProjectData } from '../data/ProjectData'
import { Slider } from '../Components/Slider.styled'
import { SliderItem } from '../Components/Slider-Item.styled'

export default function Projects() {
  const [y, setY]=useState(0);
  const [modalActive, activateModal]=useState(1);

  const scrollRate = 100/ProjectData.length;
  const next = () => {
    y === -scrollRate*(ProjectData.length-1) ? setY(0) : setY(y-scrollRate)
    console.log(y)
  }

  const back = () => {
    y>=0 ? setY(-scrollRate*(ProjectData.length-1)) : setY(y+scrollRate)
    console.log(y)
  
  }
  const modalToggle = () => {
    modalActive ? activateModal(!modalActive) : activateModal(!modalActive);
  }

  return (
    <div className='no-scroll'> 

      
      <button className='next' onClick={next} style={{display: modalActive ?'':'none'}}> Next </button>
      <button className='back' onClick={back} style={{display: modalActive ?'':'none'}}> Back </button>
      <Slider yTranslate={y+'%'}>

      {ProjectData.map((e) => {
        return(
          <SliderItem imgsrc={e.image} key={e.id} >
            <div className='item'>
                <div className='overlay'>
                  
                  <h1>{e.heading}</h1>

                  <p>
                    {e.content}
                  </p>
                <button className='more' onClick={modalToggle} style={{display: modalActive ?'':'none'}}>Learn More</button>
                <div className='modal' style={{opacity: modalActive ?'0%':'100%'}}>
                    <img src={e.image} alt='No Alt Text Yet - Coming Soon'/>
                    <p>{e.moreContent}</p>
                    <button className='return' onClick={modalToggle}>Return</button>
                </div>
              </div>

            </div>
          </SliderItem>
          
        )
        })}

               
      </Slider>

    </div>
  )
}
