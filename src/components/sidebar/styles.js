import styled from "styled-components";
import { colors } from "../../theme";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  position: fixed;
`;

export const SidebarWrapper = styled.div`
  min-width: 4.55vw;
  background-color: ${colors.text};
  box-sizing: border-box;

  &:hover {
    min-width: 12vw;
    padding-right: 10px;
  }
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  margin-top: 15.93vh;
  height: 100vh;
  align-items: center;

  &:hover {
    align-items: flex-start;

    text-align: center;
  }
`;

export const SidebarItem = styled.li`
  cursor: pointer;
  min-height: 6.39vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SidebarLink = styled.a`
  text-decoration: none;
  color: ${colors.black};
  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  text-align: start;
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 5px;
  padding: 5px;
  border: none;
  border-radius: 10px;
  margin-left: 20px;

  &:hover {
    background-color: ${colors.input};
  }
`;
