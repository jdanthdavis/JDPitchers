import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Post from './post/post';

import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
      !posts.length ? <CircularProgress className={classes.progress} /> : (
        <>
        {posts.map((post) => (
          <div className={classes.floatDiv}>
             <Post post={post} setCurrentId={setCurrentId} />
          </div>
          
        ))}
        </>
      )
    );
};

export default Posts;