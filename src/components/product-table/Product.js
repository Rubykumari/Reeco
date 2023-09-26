import React, { useState } from 'react'
import Avacado from '../../images/Avocado.jpg'
import { Button, Modal } from 'react-bootstrap';
import './Product.scss'

function Product() {
    const [modal, setModal] = useState({ show: false });
    const [status, setStatus] = useState(null);

    const handleModal = () => {
        setModal({ show: true })
    }
    const approveProduct = () => {
        setStatus("Approved")
    }
    const updateStatus = () => {
        setStatus("Missing Urgent")
        closeModal()
    }
    const missingProduct = () => {
        setStatus("Missing")
        closeModal()
    }
    const closeModal = () => {
        setModal({ show: false })
    }
    return (
        <>
            <table>
                <tr>
                    <td className='product-name'>
                        <img src={Avacado} alt="" />
                        <span>Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid</span>
                    </td>
                    <td>Homel Black Labelmany</td>
                    <td>$60</td>
                    <td>15</td>
                    <td>$750</td>
                    <td>{status}</td>
                    <td>
                        <table>
                            <tr className='icons'>
                                <td onClick={approveProduct}>&#x2713;</td>
                                <td onClick={handleModal}>&#10060;</td>
                                <td>Edit</td>
                            </tr>
                        </table>

                    </td>
                </tr>
            </table>
            <div className="popupModal">
                <Modal show={modal.show} onHide={closeModal}>
                    <Modal.Header closeButton>Missing Product</Modal.Header>
                    <Modal.Body>Is 'Chicken Breast Fillets, Boneless ...' urgent ?</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={missingProduct}>No</Button>
                        <Button onClick={updateStatus}>Yes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default Product