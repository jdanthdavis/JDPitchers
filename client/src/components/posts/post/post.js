import React from 'react';
import { Link } from 'react-router-dom';
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
      Name: {post.plantName}
      <br />
      Species: {post.species}
      <br />
      Location: {post.location}
    </Card.Text>
    <Link to={"/inventoryDetails/"+post._id} className="btn btn-primary col-log-5 mx-1 mb-1">More Details</Link>
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