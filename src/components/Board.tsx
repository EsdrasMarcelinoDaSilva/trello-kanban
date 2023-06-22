import * as C from './Layout'

type BoardType = {
    column: string,
    children: React.ReactNode
}
export const BoardCol: React.FC<BoardType> = ({ column, children }) => {
    
    return(
        <C.Board>
            <C.TitleBoard>{column}</C.TitleBoard>
            {children}
        </C.Board>
    )
}