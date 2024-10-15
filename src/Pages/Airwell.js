import React from 'react'
import HeaderBlue from '../Components/HeaderSect/HeaderBlue'
import Footer from '../Components/Footer/Footer'
import NeroComp2 from '../Components/NeroComp/NeroComp2'
import HomeComp13 from '../Components/HomeComp/HomeComp13'
import NeroComp6 from '../Components/NeroComp/NeroComp6'
import NeroComp3 from '../Components/NeroComp/NeroComp3'
import AirwellComp5 from '../Components/AirwellComp/AirwellComp5'
import Airwell1Comp from '../Components/AirwellComp/Airwell1Comp'
import AirwellComp4 from '../Components/AirwellComp/AirwellComp4'

const Airwell = () => {
    return (
        <>
            <HeaderBlue />
            <Airwell1Comp />
            <NeroComp2 />
            <NeroComp3 />
            <AirwellComp4 />
            <AirwellComp5
                capacity="5000 Liters / 24hours, (@RH 80%, 30°C)"
                material="SS body & SS/Food grade plastic water tank"
                usage="Industrial"
                filtration="Sediment, Carbon, UV & Minerals"
                powerSupply="AC, 1 Phase, 110/220V, 50/60Hz"
                netWeight="500 kg / 1102 lb"
                powerConsumption="8000 W"
                size="LWH 700711482 mm"
                tankCapacity="15 litres"
                noiseLevel="<140dB(A)"
                generators="3"
            />
            <NeroComp6 />
            <HomeComp13 />
            <Footer />
        </>
    )
}

export default Airwell