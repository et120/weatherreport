'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IOverview } from '@/Interfaces/Interfaces';


const OverviewComponent = (props: IOverview) => {
    return (
        <section>
            <div className='pt-20 ps-2 w-1/2'>
                <div className='bg-navyblue flex justify-between items-center rounded-t-md h-14 p-4'>
                    <h2 className='font-montserrat font-semibold text-2xl'>{props.city}</h2>
                    <FontAwesomeIcon icon={faHeart} className='text-xl'/>
                </div>

                <div className='bgTransparent rounded-b-md'>
                    <div className='flex justify-evenly items-center py-10 px-2'>
                        <FontAwesomeIcon icon={props.currentIcon} className='text-7xl'/>
                        <p className='font-montserrat text-7xl '>{props.currentTemp} °F</p>
                    </div>

                    <div className='flex justify-between items-center pb-5 px-5'>
                        <p className='font-montserrat font-regular'>{props.description}</p>
                        <p className='font-oswald font-light text-lg tracking-wide'>H: {props.todayHigh} ° L: {props.todayLow} °</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OverviewComponent;
