import styled from 'styled-components'



export default styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  background-color: rgba(64, 64, 64, 0.9);
  color: white;

  transition: transform 500ms ease;

  @media (min-width: 500px) {
    transform: translateX(${props => props.show ? '0px' : '-1000px'});
    margin: 1em;
  }
  @media (max-width: 499px) {
    transform: translateY(${props => props.show ? '0px' : '300px'});
    width: 100%;
    margin: 0;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  div {
    padding: 1em;
  }

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
