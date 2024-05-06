import React from 'react';
import styled from 'styled-components';

// Criando um componente de parágrafo estilizado
const StyledParagraph = styled.p`
  color: blue;
  font-size: 18px;
`;

// Componente funcional React que usa o parágrafo estilizado
function App() {
  return (
    <div>
      <StyledParagraph>
        Este é um parágrafo estilizado usando Styled Components.
      </StyledParagraph>
    </div>
  );
}

export default App;


