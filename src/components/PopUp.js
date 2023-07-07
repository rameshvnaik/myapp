import React, { Fragment,useEffect,useState } from "react";
import { Button, CloseButton, Modal, ModalDialog } from "react-bootstrap";
import ModalHeader from 'react-bootstrap/ModalHeader';
import {ItemDetails} from '../services/api'
import '../styles/popup.css';
import close from '../images/close.svg'

const PopUp = ({show,handleClose,item}) => {

    const [details,setDetails] = useState('')

    const getInfo = (id) => {
        ItemDetails(id)
        .then((res) => {
           // console.log("info",res?.data?.value)
            setDetails(res?.data?.value)
        })
        .catch((err) => {
            console.log(err)
        })
         }

useEffect(() => {
    console.log("ss", item)
    getInfo(item)
   
},[])

    return (
<Fragment>

    <Modal className="main-body" show={show} onHide={handleClose}>
        <div className="main">
        <CloseButton className="close-btn" onClick={handleClose}><img src={close}  className="close-img"/></CloseButton>
      
        <Modal.Header  className="modal-header" >  
          <Modal.Title className='headings'>{item} </Modal.Title>  
        </Modal.Header>
        <div className="modal-info">
        <Modal.Body className="modal-details">"{details}"</Modal.Body>
        <Modal.Footer className="modal-footer">
          <button className='btn'  onClick={() =>getInfo(item)}>
            Next Joke
          </button>
        </Modal.Footer>
        </div>
        </div>
      </Modal>

</Fragment>

    )
}

export default PopUp;