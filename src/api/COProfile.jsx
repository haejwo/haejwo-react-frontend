import React, { useState, useEffect } from 'react';
import axios from 'axios';
import COCards from '../components/COCards/COCards';

export default function COProfile() {
  const [COdata, setCOData] = useState(null);
  const backURL = process.env.REACT_APP_BACK_BASE_URL;

  useEffect(() => {
    const Data = async () => {
      try {
        const res = await axios.get(`${backURL}accounts/companies/`);
        setCOData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    Data();
  }, []);

  return (
    <COCards data={COdata}/>
  );
}