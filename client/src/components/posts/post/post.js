import React from 'react';
// import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import moment from 'moment';


import { Card , Button  } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
// import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

import useStyles from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <>
    <Card style={{ width: '12rem' }} title={post.title}>
    <Card.Img variant="top" src={post.selectedFile} />
    <Card.Body>
    <Card.Title>{post.idTag}</Card.Title>
    <Card.Text>
      Cross: {post.cross}
      <br/>
      Species: {post.species}
      <br />
      Name: {post.plantName}
      <br/>
      Notes: {post.notes}
      <br />
      Location: {post.location}
    </Card.Text>
    {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
      <Button size="sm" color="primary" onClick={() => setCurrentId(post._id)}><Edit fontSize="small" /> Edit</Button>
    )}
    &nbsp;&nbsp;
    {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
      <Button size="sm" color="secondary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
    )}
    </Card.Body>
    </Card>
    </>
  )
};

export default Post;