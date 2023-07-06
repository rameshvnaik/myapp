import React, { Fragment, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/home.css';
import { ItemData,ItemDetails } from '../services/api';
import PopUp from './PopUp';

const Home = () => {
    const [data, setData] = useState([])
    const [show, setShow] = useState({flag:false,value:''});
   

    useEffect(() => {
             ItemData()
             .then((res) => {
                // console.log("result",res)
     setData(res.data)

             })
             .catch((err) => {
                console.log(err)
             })
    },[])



    return (
        
        <Fragment>
          <div className='main-div'>
            <h1 className='heading'>Chuck Norries</h1>
           <Container >
            <Row className='grid-row'>
                
                {data?.map((item,index) => {
                    return (
                        <>
                        <button  className='grid-col'  onClick={() => setShow({flag:true,value:item})}>
                            <Col  xs={12} >
                       <h1 className='grid-title'>{item}</h1>  
                            <p className='para'>Unlimited Jokes on {item}</p>
                        </Col></button>
                  
                         </>
                    )
                })}
            </Row>
           {show.flag && <PopUp handleClose={() => setShow({flag:false,value:''})} show={show.flag} item={show.value} />}
           </Container>

           </div>
        </Fragment>
    )
}

export default Home;