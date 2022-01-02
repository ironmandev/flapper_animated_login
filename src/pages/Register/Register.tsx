import React from 'react'
import { useHistory } from 'react-router-dom'
import StyledRegister from '../Register/Register.styled'

const Register = () => {
  const history = useHistory()

  return (
    <StyledRegister>
      <img
        src='https://www.flyflapper.com/static/0e9dc694cbeae3a7035f1c5d62c504bb/74fd5/Home-opt.jpg'
        alt='aircraft'
      />
      <div className='form'>
        <img
          src='https://upload.wikimedia.org/wikipedia/en/8/89/Flapper_Logo.png'
          alt='logo'
          className='logo'
        />
        <input placeholder='E-mail' type='email' />
        <input placeholder='Senha' type='password' />
        <button>Cadastrar</button>
        <p>
          Já é membro?
          <span onClick={() => history.push('/login')}>Entre agora mesmo</span>
        </p>
      </div>
    </StyledRegister>
  )
}

export default Register
