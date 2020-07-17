import styled from "@emotion/styled";
import tw from "@tailwindcssinjs/macro";
import Emoji from "./Emoji";

const Logo = styled.div(tw`
    text-4xl
    font-extrabold
`);

export default () => (
    <div>
        <Logo>
            <Emoji label="zipped mouth">🤐</Emoji>Shh...bin
        </Logo>
    </div>
);
