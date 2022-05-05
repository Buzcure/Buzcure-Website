import React from 'react'
import Image from 'next/image'

import { FaBeer } from 'react-icons/fa';

import { Service,Grid,ServiceOption } from './Layer.styled'
import Title from '../../components/Title/Title';

const Layer = () => {
  return (
    <>
        <div >
            <Service >
                <h3>Service</h3>
                <Title text='We Provide Best Services'/>

                <Grid>
                    <div className='grid-item'>
                      <Image src='/icons/laptop_metrics.ico' alt='point of sales' width={40} height={40} />
                      
                      <p>Point of sales</p>
                    </div>
                    <div className='grid-item'>
                    <Image src='/icons/laptop/warehouse.ico' alt='point of sales' width={40} height={40} />
                      <p>Inventory</p>
                    </div>
                    <div className='grid-item active' >
                    <Image src='/icons/department.ico' alt='point of sales' width={40} height={40} />
                      <p>Finance</p>
                    </div>
                    <div className='grid-item'>
                    <Image src='/icons/container_truck.ico' alt='point of sales' width={40} height={40} />
                      <p>Logistics</p>
                    </div>

                </Grid>
            </Service>

            <ServiceOption>
              <Title className='title' text='New to business? No problem'/>
            </ServiceOption>
        </div>
    </>
  )
}

export default Layer