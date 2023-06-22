import * as C from './Layout'
import { Link, useNavigate } from 'react-router-dom'
import arnia  from '../assets/arnia.svg'

type HeaderProps = {
    message: string
}

export const HeaderUser: React.FC<HeaderProps> = ({ message }) => {

    const navigate = useNavigate()
    const userString = localStorage.getItem('user')
    const user = userString ? JSON.parse(userString) :{name: ''}
    const userName = user.name

    const handleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/')
    }

    return(
        <C.Header>
            <C.Logo src={arnia} alt="logo arnia" />
            <C.DivSpan>  
                <C.Field className='welcome'>{message}</C.Field>
                {userName &&
                <C.Field className='name'>{userName}</C.Field>
                }
                <Link to="/" className="link"
                onClick={handleLogout}
                >Exit</Link>
            </C.DivSpan> 
        </C.Header>
    )
} 