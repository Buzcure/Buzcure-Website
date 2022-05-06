import React from 'react'
import Image from 'next/image'

import { FaBeer } from 'react-icons/fa';

import { Service,Grid,ServiceOption, List, Masonry, Mission, Modal, Banner, Product, Header } from './Layer.styled'
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
              <div className='wrap'>

             <Title className='title' text='Our mission is to change your company'/>
             
             <div className='modal-wrap'>
             <Modal>
                <div className='modal-img'>
                  <Image src='/icons/mark.svg' alt='alt' width={50} height={50}/> 
                </div>  
                <div className='modal-text'>
                  <h4>Distracted by the readable </h4>
                  <p>It is a long established fact that a reader will be distracted by the readable </p>
                </div>
             </Modal>
             <Modal>
                <div className='modal-img' >
                  <Image  src='/icons/mark.svg' alt='alt' width={50} height={50}/> 
                </div>  
                <div className='modal-text'>
                  <h4>Distracted by the readable </h4>
                  <p>It is a long established fact that a reader will be distracted by the readable </p>
                </div>
             </Modal>
             <Modal>
                <div className='modal-img'>
                  <Image src='/icons/mark.svg' alt='alt' width={50} height={50}/> 
                </div>  
                <div className='modal-text'>
                  <h4>Distracted by the readable </h4>
                  <p>It is a long established fact that a reader will be distracted by the readable </p>
                </div>
             </Modal>
             </div>

            <div className='img-container'>
              <Image src='/images/board-photo.png' alt='board photo' width={300} height={300}/>
            </div>
              </div>
            </Mission>


            <ServiceOption>
              <Title className='title' text='We take the work off your hands.'/>
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

            <Banner>
              <div className='wrap'>
                <Title className='title' text='The platform of platforms'/>
                <p>Behind every great experience is a great workflow. As the foundation for all digital workflows, the Now Platform® connects people, functions, and systems across your organization.</p>
                <div className='btn'><Button  text='Explore Platform' bg='#54BB6A' color='#fefefe' /></div>
              </div>
            </Banner>


            <Product>
              <Header>
                <Title className='title' text='We take the work off your hands.'/>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </Header>
            </Product>



            
        </div>
    </>
  )
}

export default Layer