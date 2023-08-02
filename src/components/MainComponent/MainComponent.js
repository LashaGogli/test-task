import React from 'react'
import SecondHeader from './SecondHeader'
import CarouselComponent from './CarouselComponent'
import "./MainComponent.css"
import SecondContainer from './SecondContainer'
import "../MainComponent/MainComponent.css"


export default function MainComponent() {
  return (
    <>
      <div className='div-for-everything'>
        <SecondHeader />
        <CarouselComponent />
        <SecondContainer />
      </div>
    </>
  )
}
