import axios from 'axios';
import { useState } from 'react';

export default function Profile(){

    const [commentArray, setCommentArray]= usestate([])

    const getComments = () => {
        axios.get('http://localhost:9000/commentSchema')
        .then(res => setCommentArray(res.data))
        .catch(err => console.log(err))
    }

    const addData = (newComment) => {
        axios.post('/commentArray', newComment)
        .then(res => {
            setCommentArray(comment => [...comment, res.data])
        })
    }


    return(
        <div>

        </div>
    )
}