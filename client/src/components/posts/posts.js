import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Post from './post/post';

import './styles.css';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
      !posts.length ? <CircularProgress classes={classes.progress} /> : (
        <>
        {posts.map((post) => (
            <div className='blocks'>
             <Post post={post} setCurrentId={setCurrentId} />
             </div>
          
        ))}
        </>
      )
    );
};

export default Posts;