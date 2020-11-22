import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'
export default function Home() {

    //homeObjOne this actully pass all of our data
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <Pricing />
            <HeroSection {...homeObjFour} />
        </>
    )
}
