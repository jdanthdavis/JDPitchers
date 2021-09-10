import React from 'react';
import { Link } from 'react-router-dom';


const Viewmore = () => {
    return (
      <ul>
          <li><Link to='/2016crosses'>2016 crosses</Link></li>
          <li><Link to='/2015crosses'>2015 crosses</Link></li>
          <li><Link to='/2014crosses'>2014 crosses</Link></li>
      </ul>
    );
  };
  
  export default Viewmore;