import * as C from '../Layout'

type Props = {
    isOpen: boolean
    onDelete: () => void
    onCancel: () => void

}

export default function Confirm ({ isOpen, onDelete, onCancel }: Props): React.ReactElement | null {
    if (!isOpen) return null
    return (
        <C.Overlay>
            <C.Box>
                <C.Span>Do you really want to delete the card</C.Span>
            <C.OverlayButton onClick={onCancel}>Cancel</C.OverlayButton>
            <C.OverlayButton onClick={onDelete}>Delete</C.OverlayButton>
            </C.Box>
        </C.Overlay>
    )
}