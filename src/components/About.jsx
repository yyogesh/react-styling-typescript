import React from 'react'
import styles from './About.module.scss'
import styled from "styled-components";


const Button = styled.button`
background: ${props => props.inverted ? 'limegreen' : 'white'};
color: ${props => props.inverted ? "white" : "limegreen"};
  border: 2px solid limegreen;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  &:hover {
    opacity: 0.9;
  }
`;

const About = () => {
  return (
    <header className={styles.Appheader}>
      <p>
        About page <code>src/App.tsx</code> and save to reload.
      </p>
      <Button >Submit</Button>
      <Button inverted={true}>Submit</Button>
    </header>
  )
}

export default About