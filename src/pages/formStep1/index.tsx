import { Link } from 'react-router-dom'
import * as C from '../../components/FormComponents'
import { useForm } from '../../contexts/FormContext'
import { useLoginHandlers } from '../../hook/loginhandlers'


export const Login: React.FC = () => {
    const { handleEmail, handlePassword, handleNextStep} = useLoginHandlers()
    const { state } = useForm()

    return (
        <C.FormContainer>
            <C.Form>
            <C.Title>Arnia Trello</C.Title>
                <C.Label htmlFor="email">E-mail</C.Label>
                <C.Input type="email"
                    autoFocus
                    value={state.email}
                    onChange={handleEmail}
                />
                <C.Label htmlFor="password">Password</C.Label>
                <C.Input type="password"
                    autoFocus
                    value={state.password}
                    onChange={handlePassword}
                />
                <C.Button onClick={(e) => handleNextStep(e)}>Enter</C.Button>
                <Link to="/step2" className='link'>Register</Link>
            </C.Form>
        </C.FormContainer>
    )
}


