import { useState } from 'react'
import * as C from './Layout'

type CardEditProps = {
    cardId: string
    title: string
    content: string
    onSave: (cardId: string, updatedTitle: string, updatedContent: string) => void
    onUpdate: (cardId: string, updatedTitle: string, updatedContent: string) => void
}

export const CardEdit: React.FC<CardEditProps> = ({ cardId, title, content, onSave, onUpdate }) => {
    const [updatedTitle, setUpdatedTitle] = useState(title)
    const [updatedContent, setUpdatedContent] = useState(content)

const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTitle(event.target.value);
}

const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdatedContent(event.target.value)
}

const handleSaveClick = () => {
    onSave(cardId, updatedTitle, updatedContent)
    onUpdate(cardId, updatedTitle, updatedContent)
}
    return (
        <C.Card>
            <C.CardTitle  
            value={updatedTitle}
            onChange={handleTitleChange}
            >
            </C.CardTitle>
                <C.CardDescription
                value={updatedContent}
                onChange={handleContentChange}
                >
                </C.CardDescription>
                <C.CardButton onClick={handleSaveClick}>Save</C.CardButton>
        </C.Card>
    )
}