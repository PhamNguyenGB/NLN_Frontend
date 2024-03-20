import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';
import './modalProduct.scss';
import { jwtDecode } from "jwt-decode";
import { useSelector, useDispatch } from 'react-redux';
import { loginStaff } from '../../store/slice/userSlice';
import refreshToken from '../../services/refreshTokenService';
import axios from 'axios';
import { createProduct, fetAllProducts, updateProduct } from '../../store/slice/productSlice';

const ModalProduct = (props) => {
    const { action, dataModelProduct } = props;

    const staff = useSelector((state) => state.user.staff);
    const disPatch = useDispatch();

    let axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(
        async (config) => {
            let date = new Date();
            const decodeToken = jwtDecode(staff.access_token);
            if (decodeToken.exp < date.getTime() / 1000) {
                const data = await refreshToken();
                const refreshStaff = {
                    ...staff,
                    access_token: data.access_token,
                }
                disPatch(loginStaff(refreshStaff));
                config.headers["access_token"] = "Bearer " + data.access_token;
            }
            return config;
        },
        (error) => { return Promise.reject(error); },
    );

    const defaultProducts = {
        name: '',
        destruction: '',
        type: '',
        price: '',
        image: '',
    }

    const validInputDefaults = {
        name: true,
        destruction: true,
        type: true,
        price: true,
        image: true,
    };

    const [validInput, setValidInput] = useState(validInputDefaults);
    const [productData, setProductData] = useState(defaultProducts);
    const [previewImage, setPreviewImage] = useState('');
    const [getFile, setGetFile] = useState('');
    const [error, setError] = useState(true);


    const handleCloseModalProduct = () => {
        setProductData(defaultProducts);
        setValidInput(validInputDefaults);
        props.onHide();
    };

    const handleOnchangeInput = (value, name) => {
        let _productData = _.cloneDeep(productData);
        _productData[name] = value;
        setProductData(_productData);
    };

    const checkValidInputs = () => {
        setValidInput(validInputDefaults);
        let arr = ['name', 'destruction', 'type', 'price', 'image'];
        let check = true;
        for (let i = 0; i < arr.length; i++) {
            if (!productData[arr[i]]) {
                let _validInput = _.cloneDeep(validInputDefaults);
                _validInput[arr[i]] = false;
                setValidInput(_validInput);
                check = false;
                break;
            }
        }
        return check;
    };

    const handleOnchangeImage = async (event) => {
        try {
            let data = event.target.files;
            let file = data[0];
            if (file) {
                let objectUrl = URL.createObjectURL(file);
                setPreviewImage(objectUrl);
                setGetFile(file);
            }
        } catch (error) {

        }
    };

    const handleConfirmProduct = async () => {
        let check = checkValidInputs();
        if (check === true) {
            if (action === 'CREATE') {
                await disPatch(createProduct({ dataproduct: productData, access_token: staff.access_token }));
            } else if (action === 'UPDATE') {
                await disPatch(updateProduct({ dataproduct: productData, access_token: staff.access_token }));
            }
            setProductData(defaultProducts);
            props.onHide();
            setPreviewImage('');
            await disPatch(fetAllProducts());
        } else {
            setError(false);
        }

    };

    useEffect(() => {
        if (action === 'UPDATE') {
            setProductData({ ...dataModelProduct })
        }
    }, [dataModelProduct]);

    return (
        <>
            <Modal size="lg" show={props.isShowModalProduct} className='modal-user' onHide={handleCloseModalProduct} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span>{action === 'CREATE' ? 'Thêm mới sản phẩm' : 'Cập nhật sản phẩm'}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='content-body row '>
                        <div className='col-12 form-group'>
                            <label>Tên sản phẩm: </label>
                            <input
                                className={validInput.name ? 'form-control' : 'form-control is-invalid'}
                                type='text'
                                value={productData.name}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'name')}
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Mô tả </label>
                            <input
                                className={validInput.destruction ? 'form-control' : 'form-control is-invalid'}
                                type='text'
                                value={productData.destruction}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'destruction')}
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Tên loại xe </label>
                            <input
                                className={validInput.type ? 'form-control' : 'form-control is-invalid'}
                                type='text'
                                value={productData.type}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'type')}
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Giá bán</label>
                            <input
                                className={validInput.price ? 'form-control' : 'form-control is-invalid'}
                                type='text'
                                value={productData.price}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'price')}
                            />
                        </div>
                        <div className='form-image'>
                            <form encType="multipart/form-data">
                                <div className=' form-group col-6'>
                                    <label>image:</label>
                                    <input
                                        className={validInput.image ? 'form-control' : 'form-control is-invalid'}
                                        type='file'
                                        name='img'
                                        defaultValue={productData.image}
                                        onChange={(event) => handleOnchangeInput(event.target.files[0], 'image')}
                                        onChangeCapture={(event) => handleOnchangeImage(event)}
                                    />
                                </div>
                                <div className='col-1 check-image'>
                                    <img
                                        src={action === 'UPDATE' && previewImage == '' ? productData.image : previewImage}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='col-12 form-group' hidden={error}>
                            <div className='text-danger'>bạn chưa nhập đủ thông tin!!</div>
                        </div>
                    </div>
                </Modal.Body >
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseModalProduct()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleConfirmProduct()}>
                        {action === "CREATE" ? "Save" : "Update"}
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default ModalProduct;