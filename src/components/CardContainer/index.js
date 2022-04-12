import React from 'react'
import { useState } from 'react'

import styles from './styles.module.css'
import Card from '../Card'
import Button from '../Button'
import { carouselData as data } from '../../constants/data'

const CardContainer = () => {
  
  const [scrollView, setScrollView] = useState(0)

  const handleNext = () => {
    // check if we are at last image then decrement by image width
    if(scrollView > -((data.length*320)-320))setScrollView(scrollView - 320)
  }

  const handlePrev = () => {
    // check if we are at first image then increment by image width
    if(scrollView < 0)setScrollView(scrollView + 320)
  }


  return (
    <section className={styles.container}>

    <div className={`${styles.buttonBox} ${styles.nextButtonBox} ${scrollView < - (data.length*270) ? styles.buttonInvisible : ''}`}>
    <Button next={true} handleClick={handleNext}/>
    </div>


    <div className={`${styles.buttonBox} ${styles.prevButtonBox} ${scrollView === 0 ? styles.buttonInvisible : ''}`}>
    <Button prev={true} handleClick={handlePrev}/>
    </div>


    <div className={styles.headingBox}>
      <h1>NETFLIX</h1>
      <p>inspired slider</p>
    </div>

    <main style={{transform: `translateX(${scrollView}px)`}}>
    
    {data.map((item, index)=>{
      return (
        <div key={index} className={styles.imageContainer}>
          <Card title={item.title} url={item.url} body={item.body}/>
        </div>
      )
    })}
    </main>
    
    </section>
  )
}

export default CardContainer