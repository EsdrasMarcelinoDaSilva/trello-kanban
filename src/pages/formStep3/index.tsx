import { useFetchData } from '../../hook/requests'
import * as C from '../../components/Layout'
import { Card } from '../../components/Card'
import { useEffect, useState } from 'react'
import { CardShow } from '../../components/CardShow'
import { BoardCol } from '../../components/Board'
import { HeaderUser } from '../../components/Header'
import Confirm from '../../components/confirm'

type CardType = {
    _id: string
    title: string
    content: string
    column: "TODO" | "DOING" | "DONE"
}

export const Cards: React.FC = () => {
    const [cards, setCards] = useState<Array<CardType>>([])
    const { fetchData } = useFetchData()
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const [cardToDelete, setCardToDelete] = useState<string | null>(null)

    useEffect(() => {
        const fetchInitialData = async () => {
            const initialCards = await fetchData()
            setCards(initialCards)
        }
        fetchInitialData()
    }, [])

    const moveCard = (cardId: string, targetColumn: "TODO" | "DOING" | "DONE") => {
        const updatedCards = cards.map((card) => {
            if (card._id === cardId) {
                return { ...card, column: targetColumn }
            }
            return card
        })
        setCards(updatedCards)
    }

    const updateCard = (cardId: string, updatedTitle: string, updatedContent: string) => {
        setCards((prevCards) => prevCards.map((card) => {
            if(card._id === cardId) {
                return { ...card, title: updatedTitle, content: updatedContent }
            }
            return card
        }))
    }

    const deleteCard = (cardId: string) => {
        setCards((prevCards) => prevCards.filter((c) => c._id !== cardId))
    }
    

    const handleDeleteClick = (cardId: string) => {
        setIsConfirmOpen(true)
        setCardToDelete(cardId)
    }

    const handleConfirmDelete = () => {
        if (cardToDelete) {
            deleteCard(cardToDelete)
        }
        setIsConfirmOpen(false)
        setCardToDelete(null)
    }

    return(
        <>
        <HeaderUser message='Welcome , '/>
        <Confirm isOpen={isConfirmOpen} 
        onDelete={handleConfirmDelete}
        onCancel={() => setIsConfirmOpen(false)}
        />
        <C.Container>
        
            <BoardCol column={''}>
                <C.BoardC>  
                <Card 
                fetchData={fetchData}
                setCards={setCards}
                />
                </C.BoardC>
            </BoardCol>

            <BoardCol column={"TODO"}>
            <C.Board>
            {cards
            .filter(card => card.column === "TODO")
            .map(card => ( 
                <CardShow 
                    key={card._id}
                    cardId={card._id}
                    title={card.title}
                    content={card.content}
                    column={card.column}
                    onMove={(cardId, targetColumn) => moveCard(cardId, targetColumn)}
                    onDelete={() => handleDeleteClick(card._id)}
                    onUpdate={updateCard}
                    /> 
                ))} 
            </C.Board>
            </BoardCol>

            <BoardCol column={"DOING"}>
            <C.Board>
            {cards
            .filter((card) => card.column === "DOING")
            .map((card) => (
                <CardShow
                    key={card._id}
                    cardId={card._id}
                    title={card.title}
                    content={card.content}
                    column={card.column}
                    onMove={(cardId, targetColumn) => moveCard(cardId, targetColumn)}
                    onDelete={() => handleDeleteClick(card._id)}
                    onUpdate={updateCard}
                    />
                ))}
            </C.Board>
            </BoardCol>

            <BoardCol  column={"DONE"}>
            <C.Board>
            {cards
            .filter((card) => card.column === "DONE")
            .map((card) => (
                <CardShow
                    key={card._id}
                    cardId={card._id}
                    title={card.title}
                    content={card.content}
                    column={card.column}
                    onMove={(cardId, targetColumn) => moveCard(cardId, targetColumn)}  
                    onDelete={() => handleDeleteClick(card._id)}
                    onUpdate={updateCard}              
                    />
                ))}
            </C.Board>
            </BoardCol>

        </C.Container>
        </>
    )
}
