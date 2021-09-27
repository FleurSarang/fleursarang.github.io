
import { Title, Wrapper } from '../Styles/styles';

// const LabelComponent = ({text}) => {
//     return (
//         <Wrapper bgcolor="#ff9ca8" padding="1.5em">
//         <Title color="#cbcacc">
//           {text}
//         </Title>
//       </Wrapper>
//     );
// };

// export default LabelComponent;

const LabelComponent = ({text, titleColor, bgcolor, padding}) => {
  return (
      <Wrapper bgcolor={bgcolor} padding={padding}>
      <Title color={titleColor}>
        {text}
      </Title>
    </Wrapper>
  );
};

export default LabelComponent;

