import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'


export default function Login() {
  const [isDisabled, setIsDisabled] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userRole, setUserRole] = useState(null)

  const history = useHistory();

  useEffect(() => {
    if(validateEmail(email) && validatePassword(password)) {
      setIsDisabled(false)
    }
  }, [email, password])

  const setField = (field, value) => {
    if (field === 'Email') {
      setEmail(value)
    } else if (field === 'Senha') {
      setPassword(value)
    }
  }

  const validateEmail = (email) => {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/

    return regexEmail.test(email)
  }

  const validatePassword = (password) => {
    const regexPassword = /[a-z0-9]+/

    return (regexPassword.test(password) && password.length >= 6)
  }

  const userRedirect = (role) => {
    if (role === 'admin') {
      history.push('/admin/profile')
    } else if (role === 'client'){
      history.push('/products')
    } else {
      return null
    }
  }

  return (
    <div>
      <form>
        <Input title="Email" type="text" testId="email-input" value={email} onChange={setField}/>
        <Input title="Senha" type="password" testId="password-input" value={password} onChange={setField} userRole={userRole}/>
        <Button title="ENTRAR" testId="signin-btn" isDisabled={isDisabled} onClick={userRedirect}/>
        <Button title="Ainda não tenho conta" testId="no-account-btn" onClick={() => history.push('/register')}/>
      </form>
    </div>
  );
}