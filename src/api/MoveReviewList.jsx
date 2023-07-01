import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewCards from '../components/Review/ReviewCards';

export default function COProfile({ COdata }) {
  const [data, setData] = useState(null);
  const backURL = process.env.REACT_APP_BACK_BASE_URL;

  useEffect(() => {
    const Data = async () => {
      try {
        const res = await axios.get(`${backURL}accounts/reviews/`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    Data();
  }, []);
  
  return (
    <div>
        <ReviewCards COdata={COdata} review={data}/>
    </div>
  );
}