import { useEffect } from 'react'
import { FormActions, useForm} from '../contexts/FormContext'
import { useNavigate } from 'react-router-dom'

export const useSignupHandlers = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

useEffect(() => {
    dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
    })
    
}, [dispatch])

const handleNextStep1 = async (e: React.FormEvent) => {
    e.preventDefault()

    if (state.name && state.email && state.password && state.confirmPassword !== ''){
        if(state.password === state.confirmPassword){
            try {
                const response = await fetch('https://arnia-kanban.vercel.app/api/user', {
                    method: 'POST',
                    headers: {
                        'x-api-key':'52a8b954-e25d-4cc5-86e5-c32e92f994bb',
                        'Content-Type': 'application/json',
                        'Accept': '*/*'
                    },
                    body: JSON.stringify({
                        name: state.name,
                        email: state.email,
                        password: state.password,
                    }),
                })
                if(response.ok){
                    const data = await response.json();
                    console.log(data)
                    navigate('/')
                }else{
                    alert('Fill in the fields')
                }
            } catch (err) {
                console.log('Erro ao fazer login:', err)
            }   
        }
    }          
}
const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setName, payload: e.target.value })
}
const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setEmail, payload: e.target.value })
}
const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setPassword, payload: e.target.value })
}
const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setConfirmPassword, payload: e.target.value })
}
return { handleNextStep1, handleName, handleEmail, handlePassword, handleConfirmPassword }
}