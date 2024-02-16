import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@mui/material'
import './about.css'
import uemk from '../../assets/IMGs/uemk_image.png'
import uemkart from '../../assets/IMGs/uemKart.png'
import line1 from '../../assets/SVGs/Union.svg'
import Loader from '../../components/loader/index'

function About() {
  const [fakeLoading, setFakeLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(false)
    }, 2000)
  }, [])

  if (fakeLoading) {
    return <Loader />
  } else {
    return (
      <Container>
       
      </Container>
    )
  }
}

export default About
