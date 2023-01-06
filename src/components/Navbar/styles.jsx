import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../Logo/Logo'

export const LogoStyled = styled(Logo)`
  height: -webkit-fill-available;
  width: 48px;
`
export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem 4vw;
  display: flex;
  height: 4rem;
  z-index: 21;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.navcolor};
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
gap: 1rem;
z-index: 20;
@media screen and (max-width: 768px) {
  flex-direction: column;
  width: 100%;
  position: absolute;
  padding-block: 1rem;
  left: 0;
  top: ${({ open }) => (open ? '2rem' : '-50vh')};
  opacity: 1;
  transition: all 0.5s ease-in-out;
  background: ${({ theme }) => theme.colors.navcolor};
} 
`

export const LinksLabel = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  fill: ${({ theme }) => theme.colors.white};
  font-size: 1.1rem;
  z-index: 25;
  opacity: 0.7;
  &.active {
    opacity: 1;
  }
  :hover {
    opacity: 1;
  }
`

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 21;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'white' : 'white'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
