import React, { useState, useEffect } from 'react';
import { Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Form from '../../components/form/form';
import { getPosts } from '../../actions/posts';

import './styles.css'
    
const Admin = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);
  
      return (
        <>
        <div className='floatDiv'>
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
        </>
    );
  };
  
  export default Admin;