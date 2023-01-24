import React from 'react';
import styled from 'styled-components';
import { FiCameraOff } from 'react-icons/fi';
function InputSection() {
  return (
    <>
      <Section>
        <form action='get'>
          <div className='input_container'>
            <input type='text' className='first_input' />
            <input type='text' className='second_input' />
          </div>
          <button>
            Get a new meme image
            <FiCameraOff className='camera' />
          </button>
        </form>
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
