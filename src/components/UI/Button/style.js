import styled from 'styled-components'

export const ButtonElem = styled.button`
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  
  ${({btnType}) => {
    switch (btnType) {
      case 'primary': 
        return `
          height: 38px;
          border: 2px solid rgba(0, 0, 0, .5);
          border-radius: 5px;
          background: #f6f6f6;
          cursor: pointer;
        `
      case 'secondary':
        return `
          height: 38px;
          padding: 0 10px;
          border: 2px solid rgba(0, 0, 0, .5);
          border-radius: 5px;
          cursor: pointer;
        `
      default: 
        return ''
    }   
  }}
`