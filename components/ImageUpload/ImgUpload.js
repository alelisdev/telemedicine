import React from 'react';

const ImgUpload =({
    onChange,
    src,
    isAvatar
})=> {
    return (
        <label htmlFor="photo-upload" className={isAvatar ? 'custom-file-upload fas' : 'custom-file-upload-license fas'}>
            <div className={isAvatar ? 'img-wrap img-upload' : 'img-wrap-license img-upload'} >
                <picture><img htmlFor="photo-upload" src={src} alt='image-upload' /></picture>
            </div>
            <input id="photo-upload" type="file" onChange={onChange}/> 
        </label>
    )
}

export default ImgUpload;
    