import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeObjFour, homeObjThree, homeObjTwo } from '../HomePage/Data'
import {homeObjOne} from './Data'
export default function SignUp() {

    //homeObjOne this actully pass all of our data
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjTwo} />
        </>
    )
}
