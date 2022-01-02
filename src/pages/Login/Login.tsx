import React from 'react'
import { useHistory } from 'react-router-dom'
import StyledLogin from './Login.styled'

const Login = () => {
  const history = useHistory()
  return (
    <StyledLogin>
      <img
        src='https://www.flyflapper.com/stories/wp-content/uploads/2021/10/FlapperEVE-1_Easy-Resize.com_.jpg'
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
        <button>Entrar</button>
        <p>
          Não possui conta?{' '}
          <span onClick={() => history.push('/register')}>
            Crie uma agora mesmo
          </span>
        </p>
      </div>
    </StyledLogin>
  )
}

export default Login
