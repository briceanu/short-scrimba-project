import React from 'react';
import styled from 'styled-components';
import meme from '../Assets/meme.svg';

function Header() {
  return (
    <>
      <HeaderMemo>
        <div className='meme_container'>
          <img src={meme} alt='funny face' />
          <h3>Meme Generator</h3>
        </div>
        <p>React Course - Project 3</p>
      </HeaderMemo>
    </>
  );
}

export default Header;
const HeaderMemo = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Lalezar&family=Marcellus+SC&family=Pattaya&display=swap');
  font-family: 'Pattaya', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  color: white;
  font-weight: 900;
  font-size: clamp(1.7rem, 2.7vw, 4.2rem);
  letter-spacing: 0.08rem;
  text-align: center;
  background: linear-gradient(90deg, #672280 1.18%, #a626d3 100%);
  @media (width < 600px) {
    flex-direction: column;
    padding: 0.4rem 0;
  }
  .meme_container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img {
    width: 60px;
    height: 60px;
    margin: 0 0.5rem;
  }
  P {
    padding-top: 0.4rem;
    font-size: clamp(1.1rem, 1.9vw, 2.9rem);
  }
`;
