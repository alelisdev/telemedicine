import React from 'react';

const ImgUpload =({
    onChange,
    src
})=> {
    return (
        <label htmlFor="photo-upload" className="custom-file-upload fas">
            <div className="img-wrap img-upload" >
                <picture><img htmlFor="photo-upload" src={src} alt='image-upload' /></picture>
            </div>
            <input id="photo-upload" type="file" onChange={onChange}/> 
        </label>
    )
}

export default ImgUpload;
    