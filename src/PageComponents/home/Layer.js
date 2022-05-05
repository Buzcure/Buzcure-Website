import React from 'react'
import Image from 'next/image'

import { FaBeer } from 'react-icons/fa';

import { Service,Grid } from './Layer.styled'

const Layer = () => {
  return (
    <>
        <div className='wrap'>
            <Service>
                <h3>Service</h3>
                <h2>We Provide Best Services</h2>

                <Grid>
                    <div className='grid-item'>
                      <Image src='/icons/laptop_metrics.ico' alt='point of sales' width={100} height={100} />
                      
                      <p>Point of sales</p>
                    </div>
                    <div className='grid-item'>
                    <Image src='/icons/laptop/warehouse.ico' alt='point of sales' width={100} height={100} />
                      <p>Inventory</p>
                    </div>
                    <div className='grid-item'>
                    <Image src='/icons/department.ico' alt='point of sales' width={100} height={100} />
                      <p>Finance</p>
                    </div>
                    <div className='grid-item'>
                    <Image src='/icons/container_truck.ico' alt='point of sales' width={100} height={100} />
                      <p>Logistics</p>
                    </div>

                </Grid>
            </Service>
        </div>
    </>
  )
}

export default Layer