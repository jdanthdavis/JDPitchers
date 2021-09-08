import React, { useState, useEffect } from 'react';
import { Card , Button  } from 'react-bootstrap';
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

const Inventory = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

    return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
          </Grid>
        </Grid>
      </Container>
    </Grow>

  );
};

export default Inventory;