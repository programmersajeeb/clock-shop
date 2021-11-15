import * as React from 'react';
import {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#9f7a49',
  border: '2px solid rgba(193,164,130,.3)',
  boxShadow: 24,
  p: 4,
};

const OrderModal = ({openOrder, handleOrderClose, product}) => {
  const {name, price} = product;
  const {user} = useAuth();
  const initialInfo = {buyerName: user.displayName, email: user.email, phone: ''};
  const [orderInfo, setOrderInfo] = useState(initialInfo);

  const handleOnBlur = e  => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo =  {...orderInfo};
    newInfo[field] = value;
    setOrderInfo(newInfo);
  }

  const handleOrderSumit = e => {
    //Collect Data
    const orderProduct={
      ...orderInfo,
      price,
      productName: name
    }
    // Send To The Server
    fetch('http://localhost:5000/orderProducts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(orderProduct)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        handleOrderClose();
      }
    });
    e.preventDefault();
  }

  return (
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openOrder}
        onClose={handleOrderClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          
        }}
      >
        <Fade in={openOrder}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleOrderSumit}>
            <TextField
            sx={{width: '90%', m: 1}}
          id="outlined-size-small"
          name= "buyerName"
          onBlur={handleOnBlur}
          placeholder="Your Name"
          defaultValue={user.displayName}
          size="small"
        />
            <TextField
            sx={{width: '90%', m: 1}}
          id="outlined-size-small"
          name= "email"
          onBlur={handleOnBlur}
          placeholder="Your Email"
          defaultValue={user.email}
          size="small"
        />
            <TextField
            sx={{width: '90%', m: 1}}
          id="outlined-size-small"
          name= "phone"
          onBlur={handleOnBlur}
          placeholder="Phone Number"
          size="small"
        />
            <TextField
            disabled
            sx={{width: '90%', m: 1}}
          id="outlined-size-small"
          placeholder="Product Price"
          defaultValue={price}
          size="small"
        />
        <Button type="submit" variant="contained">Order</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
  );
};

export default OrderModal;