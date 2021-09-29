import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { BRAND_YOUTUBE, BRAND_INSTAGRAM, BRAND_RAVELRY, BRAND_ETSY } from '../utils/constants';

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled(Typography)(
  ({ color, size, align }) => `
    font-size: ${ size ? size : "1.5em" };
    text-align: ${ align ? align : "center" };
    color: ${ color ? color : "palevioletred" };
  `
);


// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled(Box)(
  ({ bgcolor, padding }) => `
  padding: ${padding? padding : "4em"};
  background: ${bgcolor ? bgcolor: "papayawhip"};
`,
);


const linkStyle = {
  fontSize: '1.5em',
  padding: 5,
};

const getBrandColor = brand => {
  if (brand === BRAND_YOUTUBE) return "#E62117";
  else if(brand === BRAND_INSTAGRAM) return "#8a49a1";
  else if(brand === BRAND_RAVELRY) return "#eb6357";
  else if(brand === BRAND_ETSY) return "#eb6d20";
}

export const generateBrandStyles = (brand) => {
  let brandColor = getBrandColor(brand);
    return (
        {
          link: {
          ...linkStyle,
          '&:hover': {
              fontSize: '2em',
              color: brandColor,
          },
        }
      }
    );
}