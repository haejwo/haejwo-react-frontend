import React, { useState } from 'react';

export default function ImagesUpload({ imageFiles }) {
    const [previewURLs, setPreviewURLs] = useState([]);
    const [imgModal, setImgModal] = useState(false);
    
    const handleImageSelect = (e) => {
        const files = e.target.files;
        const selectedImagesArray = Array.from(files);
        
        const urls = selectedImagesArray.map((image) => URL.createObjectURL(image));
        setPreviewURLs(urls);
    
        imageFiles(selectedImagesArray);
    };
    return (
        <div>
            <input type="file" multiple onChange={handleImageSelect} />
            <button onClick={() => setImgModal((prev) => !prev)} className='w-full my-4 border border-brand p-2 rounded font-semibold text-zinc-400'>파일 확인</button>
            {imgModal &&
                <div className='w-full grid grid-cols-3 gap-1'>
                    {previewURLs.map((url, idx) => (
                        <img key={idx} src={url} alt={`Preview ${idx}`} />
                    ))}
                </div>
            }
      </div>
    );
}