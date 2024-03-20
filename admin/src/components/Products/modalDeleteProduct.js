import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { deleteProduct, fetAllProducts } from '../../store/slice/productSlice';
import { useDispatch, useSelector } from 'react-redux';


const ModalDeleteProduct = (props) => {

    const disPatch = useDispatch();

    const staff = useSelector((state) => state.user.staff);

    const confirmDeleteProduct = async () => {
        let response = await disPatch(deleteProduct({ idProduct: props.dataModel.id, access_token: staff.access_token }));
        if (response.payload.data.ErrC === 0) {
            props.handleCloseModalDelete();
            await disPatch(fetAllProducts());
        }
    }

    return (
        <>
            <Modal show={props.isShowModalDelete} onHide={props.handleCloseModalDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>CONFIRM DELETE PRODUCT</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure delete this product:
                    <img src={props.dataModel.image} style={{ width: '200px' }} />
                    ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleCloseModalDelete}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={confirmDeleteProduct}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalDeleteProduct;