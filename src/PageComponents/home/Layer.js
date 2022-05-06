import React from 'react'
import Image from 'next/image'

import { FaBeer } from 'react-icons/fa';

import { Service,Grid,ServiceOption, List, Masonry, Mission, Modal } from './Layer.styled'
import Title from '../../components/Title/Title';
import Button from '../../Components/Button/Button';

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
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              <List>
                <ul>
                  <li>
                    <Image src='/icons/mark.svg' alt='mark' width={20} height={20} />
                    <p>Ecommerce</p>
                  </li>
                  <li>
                    <Image src='/icons/mark.svg' alt='mark' width={20} height={20} />
                    <p>Point of sale</p>
                  </li>
                  <li>
                    <Image src='/icons/mark.svg' alt='mark' width={20} height={20} />
                    <p>Fintech</p>
                  </li>
                  <li>
                    <Image src='/icons/mark.svg' alt='mark' width={20} height={20} />
                    <p>Distribution and logistics</p>
                  </li>
                </ul>
              </List>
              <div className='btn'><Button  text='Sign up now' bg='#54BB6A' color='#fefefe' /></div>

              <Masonry>
                <div></div>            
            </Masonry>

            </ServiceOption>

            <Mission>
             <Title className='title' text='Our mission is to change your company'/>
             <Modal>
                <div>
                  <Image src='/icons/mark.svg' alt='alt' width={50} height={50}/> 
                </div>  
                <div className='modal-text'>
                  <h4>Distracted by the readable </h4>
                  <p>It is a long established fact that a reader will be distracted by the readable </p>
                </div>
             </Modal>
             <Modal>
                <div >
                  <Image className='modal-img' src='/icons/mark.svg' alt='alt' width={50} height={50}/> 
                </div>  
                <div className='modal-text'>
                  <h4>Distracted by the readable </h4>
                  <p>It is a long established fact that a reader will be distracted by the readable </p>
                </div>
             </Modal>
             <Modal>
                <div>
                  <Image src='/icons/mark.svg' alt='alt' width={50} height={50}/> 
                </div>  
                <div className='modal-text'>
                  <h4>Distracted by the readable </h4>
                  <p>It is a long established fact that a reader will be distracted by the readable </p>
                </div>
             </Modal>

            <div className='img-container'>
              <Image src='/images/board-photo.jpg' alt='board photo' width={300} height={300}/>
            </div>
            </Mission>

            
        </div>
    </>
  )
}

export default Layer