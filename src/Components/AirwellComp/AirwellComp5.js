import React from 'react'

const AirwellComp5 = ({ capacity, material, usage, filtration, powerSupply,
    netWeight, powerConsumption, size, tankCapacity, noiseLevel, generators
}) => {
    return (
        <>
            <div className='Nero5Container'>
                <div className='Nero5Holder'>
                    <h2 className='Nero2Head'><span className='highlightSpan'>Specifications</span></h2>
                    <div className='TableNero5Cont'>
                        <table className='Nero5Table'>
                            <tbody className='Nero5TBody'>
                                <tr className='Nero5TR'>
                                    <td className='Nero5TD TDBold'>Capacity:</td>
                                    <td className='Nero5TD'>{capacity}</td>
                                    <td className='Nero5TD TDBold'>Material:</td>
                                    <td className='Nero5TD'>{material}</td>
                                </tr>
                                <tr className='Nero5TR'>
                                    <td className='Nero5TD TDBold'>Usage:</td>
                                    <td className='Nero5TD'>{usage}</td>
                                    <td className='Nero5TD TDBold'>Filtration:</td>
                                    <td className='Nero5TD'>{filtration}</td>
                                </tr>
                                <tr className='Nero5TR'>
                                    <td className='Nero5TD TDBold'>Power Supply:</td>
                                    <td className='Nero5TD'>{powerSupply}</td>
                                    <td className='Nero5TD TDBold'>Net Weight:</td>
                                    <td className='Nero5TD'>{netWeight}</td>
                                </tr>
                                <tr className='Nero5TR'>
                                    <td className='Nero5TD TDBold'>Power Consumption:</td>
                                    <td className='Nero5TD'>{powerConsumption}</td>
                                    <td className='Nero5TD TDBold'>Size:</td>
                                    <td className='Nero5TD'>{size}</td>
                                </tr>
                                <tr className='Nero5TR'>
                                    <td className='Nero5TD TDBold'>Tank Capacity:</td>
                                    <td className='Nero5TD'>{tankCapacity}</td>
                                    <td className='Nero5TD TDBold'>Noise level:</td>
                                    <td className='Nero5TD'>{noiseLevel}</td>
                                </tr>
                                <tr className='Nero5TR'>
                                    <td className='Nero5TD TDBold'>Total no. of Generators:</td>
                                    <td className='Nero5TD'>{generators}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AirwellComp5