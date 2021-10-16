import React, { useState, useEffect } from 'react';
import Navbars from '../../components/navbar/navbar';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';


import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
    
const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({idTag: '', species: '', plantName: '', cross: '', selectedFile: '', notes: '', location: ''});
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
  
    useEffect(() => {
      if (post) setPostData(post);
    }, [post]);
  
    const clear = () => {
      setCurrentId(0);
      setPostData({idTag: '', species: '', plantName: '', cross: '', selectedFile: '', notes: '', location: ''});
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (currentId === 0) {
        dispatch(createPost({ ...postData, name: user?.result?.name }));
        clear();
      } else {
        dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
        clear();
      }
    };
  
    if (!user?.result?.name) {
      return (
        " "
      );
    }


    return (
      <>
      <Navbars />
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant='h6'>{currentId ? 'Editing' : 'Add' } a plant</Typography>
            <TextField name='idTag' variant='outlined' label='ID' fullWidth value={postData.idTag}onChange={(e) => setPostData({ ...postData, idTag: e.target.value })} />
            <TextField name='species' variant='outlined' label='Species' fullWidth value={postData.species}onChange={(e) => setPostData({ ...postData, species: e.target.value })} />
            <TextField name='plantName' variant='outlined' label='Name' fullWidth value={postData.plantName}onChange={(e) => setPostData({ ...postData, plantName: e.target.value })} />
            <TextField name='cross' variant='outlined' label='Cross' fullWidth value={postData.cross}onChange={(e) => setPostData({ ...postData, cross: e.target.value })} />
            <TextField name='location' variant='outlined' label='Location' fullWidth value={postData.location}onChange={(e) => setPostData({ ...postData, location: e.target.value })} />
            <TextField name='notes' variant='outlined' label='Notes' fullWidth value={postData.notes}onChange={(e) => setPostData({ ...postData, notes: e.target.value })} />
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
            <Button className={classes.buttonSubmit} color='primary' size='large' type='submit' fullWidth>{currentId ? 'Update' : 'Submit' }</Button>
            <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
      </>
    );
}

export default Form;