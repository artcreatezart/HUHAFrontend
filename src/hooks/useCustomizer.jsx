import { useState, useEffect } from 'react';
import axios from 'axios';

const useCustomizer = () => {
  
  const [bgColor, setBgColor] = useState('');
  const [headerFontFamily, setHeaderFontFamily] = useState('');
  const [sectionedColor, setSectionedColor] = useState('')
  const [primaryBtnColor, setPrimaryBtnColor] = useState('');
  const [secondaryBtnColor, setSecondaryBtnColor] = useState('');
  
  const baseURL = import.meta.env.VITE_WP_BASEURL;

  useEffect(() => {
    axios.get(`${baseURL}wp-json/custom-theme/v1/customizer-settings`)
        .then((response) => {
            const {backgroundColor, headerFontFamily, sectionedColor, primaryButtonColor, secondaryButtonColor} = response.data;
            setBgColor(backgroundColor);
            setHeaderFontFamily(headerFontFamily);
            setSectionedColor(sectionedColor);
            setPrimaryBtnColor(primaryButtonColor);
            setSecondaryBtnColor(secondaryButtonColor);
        })
        .catch((error) => {
            console.error('Error fetching customizer settings: ', error)
        })
  }, [baseURL]);

  return {bgColor, headerFontFamily, sectionedColor, primaryBtnColor, secondaryBtnColor};
};

export default useCustomizer;
