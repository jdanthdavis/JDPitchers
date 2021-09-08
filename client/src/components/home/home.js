import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../posts/posts';
import Form from '../form/form';

import Banner from '../../images/banner.jpg'

import useStyles from './styles';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const classes = useStyles();

  return (
    <>
    <div className={classes.centerImage}>
    <img className={classes.banner} src={Banner} alt="Flava Ornata" />
    </div>
    </>
  );
};

export default Home;