import styled from 'styled-components'

const StyledLogin = styled.div`
  width: 90vw;
  max-width: 900px;
  height: 90vh;
  min-height: 600px;
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: 5vw;
  box-shadow: 4px 4px 20px #0002;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  .form {
    color: #222;
    height: 100%;
    display: flex;
    padding: 30px;
    box-sizing: border-box;
    flex-direction: column;
    place-content: center;
  }

  .form input {
    font-family: 'Montserrat', sans-serif;
    width: 85%;
    height: 50px;
    border-radius: 8px;
    padding: 8px;
    box-sizing: border-box;
    border: 2px solid #ddd;
    margin: 10px auto;
    outline: none;
    color: #333;
    font-weight: 500;
    transition: border 0.2s linear;
  }

  .form .logo {
    height: 40px;
    margin-bottom: 20px;
    object-fit: contain;
  }

  .form input:focus {
    border-color: #009688;
  }

  .form button {
    width: 80%;
    height: 50px;
    background-color: #009688;
    cursor: pointer;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    border: none;
    margin: 10px auto 0 auto;
    transition: transform 0.2s linear, box-shadow 0.2s linear;
    font-family: 'Montserrat', sans-serif;
  }

  .form button:hover {
    box-shadow: 4px 4px 10px #ddd;
  }

  .form button:active {
    transform: translateY(-10px);
  }

  .form p {
    margin-top: 30px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
  }

  .form span {
    color: #009688;
    cursor: pointer;
  }

  @media screen and (min-width: 600px) {
    max-height: 600px;
    margin: 5vh auto;
    flex-direction: row;

    img {
      width: 40%;
      height: 100%;
      margin: 0 auto;
      object-position: center;
    }

    .form {
      width: 60%;
      height: 100%;
    }
  }
`
export default StyledLogin
