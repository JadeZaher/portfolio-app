import React from 'react'
import { Container } from '../Components/Container.styled'
import { Card } from '../Components/Card.styled'

export default function About() {
  return (
    <Container>
    <Card>
    <div>
      <h1>Who is this nerd?</h1>
      <p>
      Ahmed is a Graduate from the <a href='https://dtc.wsu.edu/'>
       Digital Technology and Culture</a> program 
      based in WSU Tri-Cities.<br/> 
       </p>
       <p>
       A interdisciplinary degree that marries
       explorations in media culture,<br/> with investigations in the 
       science of human thinking. <br/>
       </p>
       <p>
       This is paired with intensive
        training in Art, Graphic Design, and Creative Programming. 
      </p>
      <p>
      Since graduating they have applied what they learned to the industries of health/fitness,
       marketing, and graphic design while working at several institutions. <br/>

      </p>
      <p>
        Further honing thier skills as they developed websites, mobile apps,<br/> UI prototypes,
         VR Experiences, design assets, and much more. 
      </p>
    </div>

    </Card>
    </Container>
  )
}
