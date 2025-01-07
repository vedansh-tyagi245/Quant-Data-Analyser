import React, { useState } from 'react';
import UploadFile from '../File-Upload-components/UploadFile';
import HomePage from './HomePage';

function Welcome() {

    const [link, setLink] = useState("/");

    return (
        <div>
            {link === '/' && <HomePage link={link} setLink={setLink}/>}

            {link === '/UploadFile' && <UploadFile link={link} setLink={setLink}/>}
        </div>
    );
}

export default Welcome;
