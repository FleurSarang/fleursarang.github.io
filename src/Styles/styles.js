import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

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

