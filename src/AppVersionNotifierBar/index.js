import styled from 'styled-components'

export default styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  padding: 1em;
  margin: 1em;
  background-color: rgba(1, 1, 1, 0.6);
  color: white;

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
