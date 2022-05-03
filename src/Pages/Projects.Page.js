import React, { useState} from 'react'
import { ProjectData } from '../data/ProjectData'
import { Slider } from '../Components/Slider.styled'
import { SliderItem } from '../Components/Slider-Item.styled'

export default function Projects() {
  const [y, setY]=useState(0);
  const scrollRate = 100/ProjectData.length;
  const next = () => {
    y === -scrollRate*(ProjectData.length-1) ? setY(0) : setY(y-scrollRate)
    console.log(y)
  }
  const back = () => {
    y>=0 ? setY(-scrollRate*(ProjectData.length-1)) : setY(y+scrollRate)
    console.log(y)
  }

  return (
    <div className='no-scroll'> 

      
      <button className='next' onClick={next}> Next </button>
      <button className='back' onClick={back}> Back </button>
      <Slider yTranslate={y+'%'}>

      {ProjectData.map((e) => {
        return(
          <SliderItem imgsrc={e.image} key={e.id} >
            <div className='item'>
            <div className='overlay'>
              
            <h1>A Video Series On Health</h1>

            <p>
              This was a series of videos made for
            </p>

            </div>
            </div>
          </SliderItem>
        )
        })}

               
      </Slider>
    </div>
  )
}
