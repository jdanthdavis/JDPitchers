import React, { useState, useEffect } from 'react';
import { Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Form from '../../components/form/form';
import { getPosts } from '../../actions/posts';
    
const Admin = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);
  
      return (
        <Grow in>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grow>
  
    );
  };
  
  export default Admin;