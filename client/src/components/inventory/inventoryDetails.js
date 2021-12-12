import React, { useState, useEffect } from "react";
import Navbars from '../../components/navbar/navbar';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import * as api from '../../api/index';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Inventory = props => {
    const inventoryState = {
        id: null,
        plantName: "",
        cross: "",
        location: "",
        species: ""
    };

    const [inventoryDetail, setinventoryDetail] = useState(inventoryState);

    const getPost = id => {
        api.findById(id)
          .then(response => {
            setinventoryDetail(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

      useEffect(() => {
        getPost(props.match.params.id);
      }, [props.match.params.id]);

    // For ImageGallery
    const images = [
        {
            original: `${inventoryDetail.selectedFile}`,
            thumbnail: `${inventoryDetail.selectedFile}`
        }
    ];

    return (
        <>
        <Navbars />
        <div className='container'>
            <div className='detailContainer'>
                <div className='split right'>
                    <div className='detailImage'>
                    <ImageGallery 
                    items={images}
                    showPlayButton={false} 
                    showFullscreenButton={true}
                    showThumbnails={false} 
                    showNav={false}
                    lazyLoad={true}>
                    </ImageGallery>
                    </div>
                </div>
                <div className='wordSafe'>
                    <div className=''>
                        <div className='test' >
                        <h1>Plant ID: {inventoryDetail.idTag}</h1>
                        <h2>Species: {inventoryDetail.species}</h2>
                        <p><strong>Cross: </strong>{inventoryDetail.cross}</p>
                        <p><strong>Name: </strong>{inventoryDetail.plantName}</p>
                        <p><strong>Location Data: </strong>{inventoryDetail.location}</p>
                        <p><strong>Notes: </strong>{inventoryDetail.notes}</p>
                        <Link to="/inventory" className="btn btn-primary col-log-5 mx-1 mb-1">Back to Collection</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
      );
    };
    
    export default Inventory;