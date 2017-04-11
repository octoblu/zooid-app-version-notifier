import styled from 'styled-components'



export default styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  padding: 1em;
  margin: 1em;
  background-color: rgba(64, 64, 64, 0.9);
  color: white;

  transition: transform 500ms ease;
  transform: translateX(${props => props.show ? '0px' : '-1000px'});

  & a,
  & a:visited {
    padding-left: 1em;
    font-weight: bold;
    color: #539dde;
    text-decoration: none;
  }

  & a:hover,
  & a:focus {
    color: rgb(139, 201, 255)
  }
`
