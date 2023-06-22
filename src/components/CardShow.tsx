import * as C from './Layout'
import { IconArrowLeft, IconArrowRight, IconTrashXFilled, IconEdit } from '@tabler/icons-react'
import { DelCard } from '../userful/delCard'
import { useState } from 'react'
import { editCard } from '../userful/editCard'
import { CardEdit } from './CardEdit'



type CardShowProps = {
    cardId: string
    title: string
    content: string
    column: "TODO" | "DOING" | "DONE" 
    onMove: (cardId: string, targetColumn: "TODO" | "DOING" | "DONE") => void
    onDelete: () => void
    onUpdate: (cardId: string, updatedTitle: string, updatedContent: string) => void
}

export const CardShow: React.FC<CardShowProps > = ({title, content, column, cardId, onDelete, onMove, onUpdate}) => {

    const [isEditing, setIsEditing] = useState(false)

    const handleDelete = async () => {
        await DelCard(cardId)
        onDelete()
    }

    const handleEditClick = () => {
        setIsEditing(true)
    }

    const handleSave = async (cardId: string, updatedTitle: string, updatedContent: string) => {
        await editCard(cardId,  updatedTitle, updatedContent, column)
        setIsEditing(false)
    }

    if (isEditing) {
        return (
            <CardEdit
                cardId={cardId}
                title={title}
                content={content}
                onSave={handleSave}
                onUpdate={onUpdate}
            />
        )
    }
    return(
        <C.Card>
            <C.TitleCard>{title}</C.TitleCard>
            <C.CardButton   style={{ position: 'absolute', top: 0, right: 0 }}
            onClick={handleEditClick}
            >
                <IconEdit width={14}/>
            </C.CardButton>
            <C.ContentFeild>{content}</C.ContentFeild>
            <C.CardFooter>
            {column !== "TODO" && (
            <C.CardButtonLeft onClick={() => onMove(cardId, column === "DOING" ? "TODO" : "DOING")}>
                <IconArrowLeft width={16}/>
            </C.CardButtonLeft>
            )}
            <C.CardButton onClick={handleDelete}>{""}
            <IconTrashXFilled width={16}/>
            </C.CardButton>
            {column !== "DONE" && (
            <C.CardButton onClick={() => onMove(cardId, column === "TODO" ? "DOING" : "DONE")}>
                <IconArrowRight width={16}/>
            </C.CardButton>
            )}
        </C.CardFooter>
        </C.Card>
    )
}