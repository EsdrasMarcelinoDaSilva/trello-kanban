import * as C from '../../components/FormComponents'
import { useForm } from '../../contexts/FormContext'
import { useSignupHandlers } from '../../hook/signupHandlers'


export const Signup: React.FC = () => {
    const { handleName, handleEmail, handlePassword, handleConfirmPassword, handleNextStep1 } = useSignupHandlers()
    const { state } = useForm()
    
    return (
        <C.FormContainer>
            <C.Form>
            <C.Title>Arnia Trello</C.Title>
            <C.Subtitle>Register</C.Subtitle>
                <C.Label htmlFor="name">Name</C.Label>
                <C.Input type="text"
                    autoFocus
                    value={state.name}
                    onChange={handleName}
                />
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
                <C.Label htmlFor="confirmPassword">Confirm Password</C.Label>
                <C.Input type="password" 
                    autoFocus
                    value={state.confirmPassword}
                    onChange={handleConfirmPassword}
                />
                <C.Button onClick={(e) => handleNextStep1(e)}>Access</C.Button>
            </C.Form>

        </C.FormContainer>
    )
}
