import { useState } from 'react'
import * as C from './Layout'
import { IconCirclePlus } from '@tabler/icons-react'
import { handleCardSubmission } from '../userful/cardPost'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

type CardType = {
    _id: string
    title: string
    content: string
    column: "TODO" | "DOING" | "DONE"
}

type CardProps = {
    fetchData: (column?: 'TODO' | 'DOING '| 'DONE') => Promise<Array<CardType>>
    setCards: (cards: Array<CardType>) => void
}

export const Card: React.FC<CardProps> = ({ setCards }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleNewCard = async () => {
        const newCard = await handleCardSubmission(title, content)
        setCards(newCard)
        console.log(newCard, 'newCard')

        iziToast.success({
            title: 'OK',
            message: 'Card added successfully',
            position:'topRight'
        })
    }

    return(
        <C.Card>
        <C.CardTitle 
            type="text" placeholder="Card title"
            onChange={(e) => setTitle(e.target.value)}
        />
        <C.CardDescription 
            placeholder="Card description"
            maxLength={161}
            onChange={(e) => setContent(e.target.value)}
        
        />
        <C.CardFooter>
            <C.CardButton 
            onClick={handleNewCard}
            >
                <IconCirclePlus width={16}/>
            </C.CardButton>
        </C.CardFooter>
    </C.Card>
    )
}

