import styled from 'styled-components'

export const ButtonElem = styled.button`
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  height: 38px;
  border: 2px solid rgba(0, 0, 0, .5);
  border-radius: 5px;
  cursor: pointer;
  
  ${({btnType}) => {
    switch (btnType) {
      case 'primary': 
        return `
          background: #f6f6f6;
                    
          &:hover {
            background: #e8e8e8;
          }
        `
      case 'secondary':
        return `
          padding: 0 10px;
        `
      default: 
        return ''
    }   
  }}
`