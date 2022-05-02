import React, { useState, useEffect} from 'react'
import { SliderWrapper } from '../Components/SliderWrapper.styled'
import { Slider } from '../Components/Slider.styled'
import { SliderItem } from '../Components/Slider-Item.styled'
import Atmosphere from "../Assets/Atmosphere.PNG"


export default function Projects() {
  var scroll = useState('0');
  
  scroll =()=>{
    
  }

  return (
    <SliderWrapper> 

      <button className='more' onClick={()=>scroll(20)}> More </button>

      
      <Slider scrollheight={scroll}>

        <SliderItem imgsrc={Atmosphere}>
          <div className='item'>
          <div className='overlay'>
            
          <h1>A Video Series On Health</h1>

          <p>
            This was a series of videos made for
          </p>

          </div>
          </div>
        </SliderItem>        
        <SliderItem imgsrc={Atmosphere}>
          <div className='item'>
          <div className='overlay'>
            
          <h1>A Video Series On Health</h1>

          </div>
          </div>
        </SliderItem>        
        <SliderItem imgsrc={Atmosphere}>
          <div className='item'>
          <div className='overlay'>
            
          <h1>A Video Series On Health</h1>

          </div>
          </div>
        </SliderItem>        
          <SliderItem imgsrc={Atmosphere}>
            <div className='item'>
            <div className='overlay'>
              
            <h1>A Video Series On Health</h1>

            </div>
            </div>
          </SliderItem>        
     
               
      </Slider>
    </SliderWrapper>
  )
}
