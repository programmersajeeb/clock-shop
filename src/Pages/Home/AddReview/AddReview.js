import React from 'react';
import axios from 'axios'
import {useForm} from 'react-hook-form';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import './AddReview.css'

const AddReview = () => {
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios
            .post('http://localhost:5000/rating', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Rating successfully');
                    reset();
                }
            })
    }
    return (
        <Box marginBottom="30px">
            <Container>
            <div>
            <div>
                <h2 style={{fontSize:"35px"}}>Reviews as Client</h2>
                <iframe width="100%" height="300px"
                    src="http://localhost:3000/clientReview"
                    title="Our Client Review"></iframe>
            </div>
            <div className="reviewForm" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <h2>Review Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="number"
                        {...register("rate", { required: true, maxLength: 1 })}
                        placeholder="Rating(1-5)"/>
                    <textarea {...register("discription")} placeholder="Write Reviews (Click submite and reload web)"/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
        </Container>
        </Box>
    );
};

export default AddReview;
