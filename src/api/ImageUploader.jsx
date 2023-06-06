import React, { useState } from 'react';
import axios from 'axios';

export default function ImageUploader({ path, token, imageData }) {
  const [file, setFile] = useState(null);
  
  const handleChange = (e) => {
      setFile(e.target.files[0])
  }
  const handleUpload = async () => {
      const formData = new FormData();
      formData.append('image', file);
      try {
          const res = await axios.post(path, 
          formData,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'
            } 
          });
          imageData(res.data);
      } catch (error) {
      console.log('실패');
      }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>확인</button>
    </div>
  );
}