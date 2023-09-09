
import Login from "./page/login&register/login/login";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Test(){

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);


        return(
            <>
                <Button variant="primary" onClick={handleShow}>
                    Launch static backdrop modal
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Body>
                       <Login/>
                    </Modal.Body>
                </Modal>
            </>
    )
}