import React from 'react'
import HeaderBlue from '../Components/HeaderSect/HeaderBlue'
import Footer from '../Components/Footer/Footer'
import NeroComp2 from '../Components/NeroComp/NeroComp2'
import HomeComp13 from '../Components/HomeComp/HomeComp13'
import NeroComp6 from '../Components/NeroComp/NeroComp6'
import NeroComp5 from '../Components/NeroComp/NeroComp5'
import NeroComp3 from '../Components/NeroComp/NeroComp3'
import Bubble1Comp from '../Components/BubbleComp/Bubble1Comp'
import BubbleComp4 from '../Components/BubbleComp/BubbleComp4'

const Bubble = () => {
    return (
        <>
            <HeaderBlue />
            <Bubble1Comp />
            <NeroComp2 />
            <NeroComp3 />
            <BubbleComp4 />
            <NeroComp5
                capacity="20 Liters / 24hours, (@RH 80%, 30°C)"
                material="ABS body & SS water tank"
                usage="Domestic/Industrial"
                filtration="Sediment, Carbon, UV & Minerals"
                powerSupply="AC, 1 Phase, 110/220V, 50/60Hz"
                netWeight="30 kg / 66 LB"
                powerConsumption="450 W"
                size="LWH 424443598 mm"
                tankCapacity="8 litres"
                noiseLevel="<45dB(A)"
            />
            <NeroComp6 />
            <HomeComp13 />
            <Footer />
        </>
    )
}

export default Bubble