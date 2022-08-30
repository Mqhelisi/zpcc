import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: black;
    font-size:32px;
    color:white;
    padding: 7px 10px;
    background-color: ${props => props.bg === "black" ? "black":"blue"}
`;

export const StyledContainer = styled.section.attrs((props) => ({
    width: props.width || "100%",
    hasPadding: props.hasPadding || false,
  }))`
    --container-padding: 20px;
    width: ${(props) => props.width}; // Falls back to 100%
    padding: ${(props) =>
      (props.hasPadding && "var(--container-padding)") || "none"};
  `;

export const StyledContainer2 = styled.section`
  width:100%;
  padding: 0 20px ;
  margin: 0 auto 10px 10px;
  background-color: ${props => props.bg === "black" ? "black":props.bg}
  
`;

// Inherit StyledContainer in StyledSmallConatiner
export const StyledSmallContainer = styled(StyledContainer2)`
  padding: 0 10px;
  
`;
