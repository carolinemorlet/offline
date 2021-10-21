import styled from 'styled-components';

export const ContainerMenuTheme = styled.div`
  text-align: center;
`;

export const MenuTheme = styled.div`
  position: fixed;
  right: -300px;
  top: 0;
  width: 300px;
  height: 100vh;
  padding: 20px;
  z-index: 99;
  background-color: #e9dddd;
  box-shadow: var(--box-shadow);
  transition: right 0.5s var(--transition-cubic);

  .select {
    margin-top: 40px;
  }

  &.active {
    right: 0;
  }
`;

export const CustomizeButton = styled.button`
  padding: 15px;
  border: none;
  margin: 12px;
`;

export const CloseMenuTheme = styled.button`
  position: absolute;
  top: 17px;
  right: 20px;
  background-color: transparent;
  font-size: 1.5rem;
  border: none;
`;

export const ModeList = styled.ul`
  margin-top: 20px;
`;
