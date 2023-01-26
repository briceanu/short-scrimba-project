import React from 'react';
import styled from 'styled-components';
import { FiCameraOff } from 'react-icons/fi';
import { useState } from 'react';
import { data } from './memesData.jsx';

function InputSection() {
  const [dateInput1, setDate1] = useState();
  const [dateInput2, setDate2] = useState();
  const [image, setImage] = useState('');
  const dataImages = data.data.memes.map((item) => item.url);

  function getMeme() {
    setImage(dataImages[Math.floor(Math.random() * dataImages.length)]);
  }
  return (
    <>
      <Section>
        <div className='input_container'>
          <input
            type='text'
            className='first_input'
            placeholder='Top text'
            onChange={(e) => setDate1(e.target.value)}
            value={dateInput1 || ''}
          />
          <input
            type='text'
            className='second_input'
            placeholder='Bottom text'
            onChange={(e) => setDate2(e.target.value)}
            value={dateInput2 || ''}
          />
        </div>
        <button onClick={getMeme}>
          Get a new meme image
          <FiCameraOff className='camera' />
        </button>
        <Container>
          <div
            className='text_container'
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h1 className='text'>{dateInput1}</h1>
            <h1 className='text'> {dateInput2}</h1>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default InputSection;
const Section = styled.section`
  width: 60vw;
  margin: 2rem auto;
  .input_container {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    @media (width < 600px) {
      flex-direction: column;
    }
    input {
      width: 100%;
      border-radius: 5px;
      padding: 1rem 0;
      border: 1px solid grey;
      font-size: clamp(0.7rem, 1.5vw, 2.5rem);
      text-indent: 8px;
    }
  }
  button {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7rem 0;
    background: linear-gradient(90.41deg, #711f8d 1.14%, #a818da 100%);
    border-radius: 5px;
    color: white;
    border: 1px solid grey;
    font-weight: 700;
    font-size: clamp(1.1rem, 1.9vw, 2.9rem);
    font-family: 'Marcellus SC', serif;
    cursor: pointer;
    @media (width < 600px) {
      flex-direction: column;
      .camera {
        margin: 0;
      }
    }
  }
  .camera {
    width: 25px;
    height: 25px;
    margin-left: 1.5rem;
  }
`;
const Container = styled.main`
  width: 60vw;
  height: 50vh;
  margin: 2rem auto;
  .text_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    height: 100%;
    width: 100%;
  }
  .text {
    font-size: clamp(2rem, 2.5vw, 3.5rem);
  }
`;
