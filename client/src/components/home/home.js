import React, { useState, useEffect } from 'react';
import Navbars from '../../components/navbar/navbar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

import Footer from '../footer/footer';
import { getPosts } from '../../actions/posts';
import Posts from '../posts/posts';
import Form from '../form/form';

import './styles.css';
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
      <Container className='bg_image'>
        <Navbars />
      </Container>
    {/* <LazyLoadImage
    className={classes.banner}
    alt="Flava Ornata"
    src={Banner} /> */}
    {/* <InstagramFeed token="your_access_token"  counter="6"/> */}
    <Footer />
    </>
  );
};

export default Home;