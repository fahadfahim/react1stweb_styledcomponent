import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeObjFour } from '../HomePage/Data'
import { homeObjTwo} from './Data'
export default function Products() {

    //homeObjOne this actully pass all of our data
    return (
        <>
     
            <HeroSection {...homeObjFour} />
        </>
    )
}
