import styled from "@emotion/styled";
import tw from "@tailwindcssinjs/macro";
const Logo = styled.button(tw`
    text-4xl
    font-extrabold
`);
export default () => (
    <div>
        <Logo>🙊Shh..bin</Logo>
        <br />
        <Logo>🤫Shh...bin</Logo> <br />
        <Logo>🤐Shh...bin</Logo>
    </div>
);
