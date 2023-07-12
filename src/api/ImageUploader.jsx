import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../components/Modal/Modal';

export default function ImageUploader({ path, token, imageData }) {
  const [file, setFile] = useState(null);
  const [isAccess, setIsAccess] = useState(false);
  
  const handleChange = (e) => {
      setFile(e.target.files[0])
  }
  const handleaccess = () => setIsAccess(true);

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
          if (error.response.status === 400) {
              handleaccess();
          }
      }
  };

  return (
    <div>
      <Modal isOpen={isAccess} onClose={() => setIsAccess(false)}>
        <div className='py-[4rem] text-center text-lg'>
          <p className='text-red-500 font-bold mb-2'>유효하지 않은 사업자등록증입니다.</p>
          <p>다른 이미지를 업로드해주세요.</p>
        </div>
      </Modal>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>확인</button>
    </div>
  );
}