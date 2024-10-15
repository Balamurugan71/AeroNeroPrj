import React from 'react'
import HeaderBlue from '../Components/HeaderSect/HeaderBlue'
import Footer from '../Components/Footer/Footer'
import NeroComp2 from '../Components/NeroComp/NeroComp2'
import HomeComp13 from '../Components/HomeComp/HomeComp13'
import NeroComp6 from '../Components/NeroComp/NeroComp6'
import NeroComp5 from '../Components/NeroComp/NeroComp5'
import NeroComp3 from '../Components/NeroComp/NeroComp3'
import Drizzle1Comp from '../Components/DrizzleComp/Drizzle1Comp'
import DrizzleComp4 from '../Components/DrizzleComp/DrizzleComp4'
const Drizzle = () => {
    return (
        <>
            <HeaderBlue />
            <Drizzle1Comp />
            <NeroComp2 />
            <NeroComp3 />
            <DrizzleComp4 />
            <NeroComp5
                capacity="40 Liters / 24hours, (@RH 80%, 30°C)"
                material="SS body & SS/Food grade plastic water tank"
                usage="Domestic/Industrial"
                filtration="Sediment, Carbon, UV & Minerals"
                powerSupply="AC, 1 Phase, 110/220V, 50/60Hz"
                netWeight="50 kg/110 lb"
                powerConsumption="650 W"
                size="LWH 440460710 mm"
                tankCapacity="15 litres"
                noiseLevel="<45dB(A)"
            />
            <NeroComp6 />
            <HomeComp13 />
            <Footer />
        </>
    )
}

export default Drizzle