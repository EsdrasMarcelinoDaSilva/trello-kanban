import { useEffect } from "react"
import { FormActions, useForm } from "../contexts/FormContext"
import { useNavigate } from "react-router-dom"
import iziToast from "izitoast"
import 'izitoast/dist/css/iziToast.min.css'

export const useLoginHandlers = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()


    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
        
    }, [dispatch])

    const handleNextStep =  async (e: React.FormEvent) => {
        e.preventDefault()

        if (state.email && state.password !== ''){
        try{
            const response = await fetch('https://arnia-kanban.vercel.app/api/user/login',{
            method: 'POST',
            headers: {
                'x-api-key':'52a8b954-e25d-4cc5-86e5-c32e92f994bb',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: state.email,
                password: state.password,
            }),
            })
            if(response.ok){
                const data = await response.json()
                const {token, name } = data
                const user = { email: state.email, name}
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('token', token)
                navigate('/step3')
            }else{
                iziToast.error({
                    title: 'Error',
                    message: 'Invalid email or password',
                    position: 'topCenter'
                })
            }
        }catch(error){
            console.log('Error when logging in:', error)
        }
    }
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: FormActions.setEmail, payload: e.target.value })
    }
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: FormActions.setPassword, payload: e.target.value })
    }
    return {handleEmail, handlePassword, handleNextStep}
}