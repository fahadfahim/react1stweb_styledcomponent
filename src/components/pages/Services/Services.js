import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjOne} from './Data'
export default function Services() {

    //homeObjOne this actully pass all of our data
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjOne} />
            
        </>
    )
}
