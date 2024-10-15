import React from 'react'
import HeaderBlue from '../Components/HeaderSect/HeaderBlue'
import Footer from '../Components/Footer/Footer'
import NeroComp1 from '../Components/NeroComp/NeroComp1'
import NeroComp2 from '../Components/NeroComp/NeroComp2'
import HomeComp13 from '../Components/HomeComp/HomeComp13'
import NeroComp6 from '../Components/NeroComp/NeroComp6'
import NeroComp5 from '../Components/NeroComp/NeroComp5'
import NeroComp4 from '../Components/NeroComp/NeroComp4'
import NeroComp3 from '../Components/NeroComp/NeroComp3'

const Nero = () => {
    return (
        <>
            <HeaderBlue />
            <NeroComp1 />
            <NeroComp2 />
            <NeroComp3 />
            <NeroComp4 />
            <NeroComp5
                capacity="10 Litres / 24 hours (@RH 80%, 30℃)"
                material="ABS body & SS water tank"
                usage="Domestic"
                filtration="Sediment, Carbon & Minerals"
                powerSupply="AC, 1 Phase, 110/220V, 50/60Hz"
                netWeight="13.5 kg / 30 lb"
                powerConsumption="220 W"
                size="LWH 260300660 mm"
                tankCapacity="7 litres"
                noiseLevel="<36dB(A)"
            />
            <NeroComp6 />
            <HomeComp13 />
            <Footer />
        </>
    )
}

export default Nero