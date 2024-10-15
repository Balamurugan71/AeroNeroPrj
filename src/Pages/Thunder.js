import React from 'react'
import HeaderBlue from '../Components/HeaderSect/HeaderBlue'
import Footer from '../Components/Footer/Footer'
import NeroComp2 from '../Components/NeroComp/NeroComp2'
import HomeComp13 from '../Components/HomeComp/HomeComp13'
import NeroComp6 from '../Components/NeroComp/NeroComp6'
import NeroComp5 from '../Components/NeroComp/NeroComp5'
import NeroComp3 from '../Components/NeroComp/NeroComp3'
import Thunder1Comp from '../Components/ThunderComp/Thunder1Comp'
import ThunderComp4 from '../Components/ThunderComp/ThunderComp4'

const Thunder = () => {
    return (
        <>
            <HeaderBlue />
            <Thunder1Comp />
            <NeroComp2 />
            <NeroComp3 />
            <ThunderComp4 />
            <NeroComp5
                capacity="150 Liters / 24hours, (@RH 80%, 30°C)"
                material="SS body & SS/Food grade plastic water tank"
                usage="Industrial"
                filtration="Sediment, Carbon, UV & Minerals"
                powerSupply="AC, 1 Phase, 110/220V, 50/60Hz"
                netWeight="110 kg / 243 lb"
                powerConsumption="2400 W"
                size="LWH 700711915 mm"
                tankCapacity="100 litres"
                noiseLevel="<72dB(A)"
            />
            <NeroComp6 />
            <HomeComp13 />
            <Footer />
        </>
    )
}

export default Thunder