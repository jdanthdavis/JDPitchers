import React, { useState, useEffect } from 'react';
import Navbars from '../../components/navbar/navbar';
import dotenv from 'dotenv';
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

dotenv.config();

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]); 

  const classes = useStyles();
  const Insta = process.env.REACT_APP_INSTA_KEY;
  
  return (
    <>
      <div className='bg_image'>
        <Navbars />
      </div>
    {/* <InstagramFeed token={Insta}  counter="6"/> */}
    </>
  );
};

export default Home;