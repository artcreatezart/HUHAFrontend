import { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';

// Import customizer hook
import useCustomizer from './hooks/useCustomizer';

// Import Components
import Navbar from './components/Navbar';
import Links from './components/Links';
import Footer from './components/Footer';

const App = () => {
  const { bgColor, headerFontFamily, sectionedColor, primaryBtnColor, secondaryBtnColor} = useCustomizer();

  const isCustomizerLoaded = bgColor && headerFontFamily && sectionedColor && primaryBtnColor && secondaryBtnColor ;

  useEffect(() => {
    if (!isCustomizerLoaded) return;
    console.log('Sectioned Color:', sectionedColor);

    document.documentElement.style.setProperty('--primary-btn-bg', primaryBtnColor);
    document.documentElement.style.setProperty('--secondary-btn-bg', secondaryBtnColor);
    document.documentElement.style.setProperty('--customize-section-color', sectionedColor);

  
    // Set background color and header font for body
    document.body.style.backgroundColor = `#${bgColor}`;
    document.body.style.FontFamily = headerFontFamily ? `'${headerFontFamily}', sans-serif` : '';
  
  }, [bgColor, headerFontFamily, sectionedColor, primaryBtnColor, secondaryBtnColor]);


  return (
    <HashRouter>
      {isCustomizerLoaded ? (
          <div style={{ backgroundColor: `#${bgColor}`, headerFontFamily: headerFontFamily}}>
            <Navbar style={{ backgroundColor: sectionedColor }}/>
            <Links style={{ backgroundColor: sectionedColor }}/>
            <Footer />
          </div>
        ) : (
          <p>Loading</p>
        )}
    </HashRouter>
  )
}

export default App
