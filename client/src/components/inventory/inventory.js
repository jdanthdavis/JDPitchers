import React, { useState, useEffect } from 'react';
import Navbars from '../../components/navbar/navbar';
import { Card , Button, Nav  } from 'react-bootstrap';
import { Grid, CircularProgress } from '@material-ui/core';
import { Container, Grow } from '@material-ui/core';
import { Card as bootCard, Button as bootButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Form from '../form/form';
import Posts from '../posts/posts';
import useStyles from '../../styles';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';

const Inventory = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

    return (
      <>
      <Navbars />
      <p className='text-center'><i>Please be aware JDPitchers uses free hosting software. This may increase loading times on this page.</i></p>
      <div className='container'>
        <Posts setCurrentId={setCurrentId} />
      </div>
      </>
  );
};

export default Inventory;