import { color } from '../../styles/var.style'
import styled from 'styled-components'

const isVisible = props => {
  switch (props.visibles) {
    case 'exited':
      return `opacity: 0;`
    case 'entered':
      return `opacity: 1;`
    case 'exiting':
      return `opacity: 0;`
    default:
      return ``
  }
}
export const LoginWrapper = styled.div`
  z-index: 1000;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease;
  background-color: rgba(0, 0, 0, 0.7);
  ${props => isVisible(props)}
`;
const isExit = props => {
  switch (props.visibles) {
    case 'entered':
      return `transform: scale(1);`
    case 'exiting':
      return `transform: scale(3);`
    default:
      return ``
  }
}
export const LoginModal = styled.div`
	width: 400px;
	border-radius: 2px;
	background-color: #FFFFFF;
  box-shadow: 0 10px 30px 0 rgba(0,0,0,0.15);
  transition: 0.4s ease;
  
  ${props => isExit(props)}
`;

export const ModalHolder = styled.div`
  /* padding: 0 97.25px 67.79px 87.5px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CloseBar = styled.div`
  padding: 18.09px 20.09px 0 0;
  display: flex;
  justify-content: flex-end;

  & > * {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  margin-top: ${props => props.top}px;
  margin-bottom: ${props => props.bottom}px;
`;


export const Title = styled.div`
	color: #485C6E;
	font-family: Calibri, Arial,sans-serif;
	font-size: 28px;
	font-weight: 500;
	letter-spacing: -1px;
	line-height: 36px;
	text-align: center;
`;

export const HelpText = styled.div`
  width: 355px;
	color: #676767;
	font-family: "Avenir Next";
	font-size: 16px;
	letter-spacing: -0.4px;
	line-height: 24px;
	text-align: center;

  margin-top: 19px;
`;

export const InputRow = styled.div`
  margin-bottom: ${props => `${props.marginBottom}px`};
  position:relative;
`;

export const InputLabel = styled.label`
	color: #8B939A;
	font-family: Calibri, Arial,sans-serif;
	font-size: 12px;
	font-weight: 500;
  line-height: 16px;

  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all;
  -moz-transition:0.2s ease all;
  -webkit-transition:0.2s ease all;
`;

export const Input = styled.input`
  width: 302.5px;
	color: #485C6E;
	font-family: Calibri, Arial,sans-serif;
	font-size: 16px;
	font-weight: 500;
  line-height: 22px;
  border: 1px solid #B5B9BC;
  border-width: 0 0 1px 0;
  outline: 0;
  padding: 5.5px 0 13.5px 0;

  &:focus ~ ${InputLabel}, &:valid ~ ${InputLabel} {
    top:-20px;
    left: 0;
    font-size:12px;
    color: ${color.prymary};
  }

  &:focus {
    border-color: ${color.prymary};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    color: #485C6E;
    font-family: Calibri, Arial,sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    border: 1px solid #DD8680;
    border-width: 0 0 1px 0;
    outline: 0;
    padding: 5.5px 0 13.5px 0;
    -webkit-text-fill-color: #485C6E;
    -webkit-box-shadow: none;
    transition: none;
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

export const Checkbox = styled.input`
  position: absolute; // take it out of document flow
  opacity: 0; // hide it

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
    color: #485C6E;
    font-family: Calibri, Arial,sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.5px;
    line-height: 22px;
  }

  // Box.
  & + label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 18.5px;
    height: 18.5px;
    border: 1.5px solid #C3CDD5;
    border-radius: 50%;
    margin-top: -3px;
  }

  // Box hover
  &:hover + label:before {
    background: rgba(221, 134, 128, 0.53)
  }

  // Box focus
  &:focus + label:before {
    /* box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12); */
  }

  // Box checked
  &:checked + label:before {
    border-color: #DD8680;
    background: #DD8680;
  }
`;

export const LoginButton = styled.button`
	height: 49px;
	width: 302.5px;
	border-radius: 10px;
  background-color: ${color.primary};
  box-shadow: 0 8px 15px 0 rgba(0, 91, 255, 0.45);
  padding: 15px 0 12px 0;
	color: ${color.light};
	font-family: Calibri, Arial,sans-serif;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: -0.47px;
	line-height: 22px;
  text-align: center;

  cursor: pointer;
  border: none;
  outline: 0;

  &:focus {
    outline: 0;
  }

  &[disabled] {
    background-color: rgba(221, 134, 128, .4);
    border: none;
  }
`;

export const Footer = styled.div`
  margin-top: ${props => props.top}px;
  margin-bottom: ${props => props.bottom}px;
`;

export const Link = styled.div`
	height: 22px;
	width: 113px;
	color: #485C6E;
	font-family: Calibri, Arial,sans-serif;
	font-size: 16px;
	font-weight: 500;
	letter-spacing: -0.47px;
  line-height: 22px;

  margin-top: 40.21px;
  cursor: pointer;
`;