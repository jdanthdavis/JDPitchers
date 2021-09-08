import React from 'react';
import { Card , Button  } from 'react-bootstrap';
import { Grid, CircularProgress } from '@material-ui/core';
import { Card as bootCard, Button as bootButton } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Post from './post/post';
import useStyles from './styles';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles()

    return (
      !posts.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )
    );
};


// return (
//   <div class="post">
//   {posts.map((post) => {
//     return (
//       <div>
//           <table>
//               <tr>
//                   <td class="postTd">
//                   <Post post={post} setCurrentId={setCurrentId} />
//                   </td>
//               </tr>
//           </table>
//       </div>
//     );
//   })}
//   </div>

// );
export default Posts;