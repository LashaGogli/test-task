import React from 'react'
import SecondHeader from './SecondHeader'
import CarouselComponent from './CarouselComponent'
import "./MainComponent.css"
import SecondContainer from './SecondContainer'


export default function MainComponent() {
  return (
    <>
      <SecondHeader />
      <CarouselComponent />
      <SecondContainer/>
    </>
  )
}
