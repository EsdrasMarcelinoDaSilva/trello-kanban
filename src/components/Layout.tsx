import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    background-color: #1A1033;
    justify-content: center;
    padding: 1em;
    gap: 1em;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`
export const Board = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100% ;
    padding: 0.5em;
    background-color: #1A1033;

    @media (max-width: 600px) {
        width: 100%;
    }
`
export const BoardC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8em;
    align-items: center;
    background-color: #1A1033;

    @media (max-width: 600px) {
        width: 100%;
    }
`
export const Header = styled.header`
    background-image: linear-gradient(to left,#3C1E59,#0A3459);
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.4);
    position: sticky;
    top: 0;
    z-index: 50;
    display: flex;
    justify-content: space-between;
    padding: 0.5em;

    .welcome{
        margin-right: .5em;
        font-size: 1.3em;
    }

    .link{
        color: #FBB04D;
        text-decoration: none;
        margin-bottom: .3em;
    }

    @media (max-width: 600px) {
        flex-direction: column;

        .welcome {
            margin-right: 0;
            text-align:center
        }
        
        .link {
            margin-bottom:.5em
        }
        
        padding:.8em
}
`
export const DivSpan = styled.div`
    display:flex ;
    justify-content:end ;
    align-items:flex-end ;
`

export const Field = styled.span`
    font-size :1.7em ;
    color:#ccc ;
    margin-right:.5em ;
`

export const Logo = styled.img`
    margin-left :1em ;
`

export const TitleCard = styled.h4`
    text-align:center ;
    color :#0B3459 ;
    margin-bottom :0 ; 
`

export const TitleBoard = styled.h3`
    color :#fff ;
    margin :0 ;
    padding :.3em ; 
`

export const ContentFeild = styled.div`
    flex-grow :1 ;
    padding :.3em ;
    background-color:#0f0e0d99 ;
    color:#ffffffb5 ;
` 

export const Card = styled.div`
    background-color:#FBB04D ;
    display:flex ;
    gap:.5em ;
    flex-direction :column ;
    align-items:center ;
    padding:.2em ;
    width :90% ;
    margin-bottom:.7em ;
    border-radius :1em ;
    overflow:hidden ;
    position:relative ;

@media (max-width: 600px) {
        width: 100%;
    }
`

export const CardTitle = styled.input`
    width: 90%;
    margin-top: .6em;
    padding: 0.7em;
    border-radius: 2em;
    outline: none;
    border: 1px solid #0e3359e1;

    @media (max-width: 600px) {
        width: 100%;
        margin-top: .3em;
        padding: .5em;
    }
`
export const CardDescription = styled.textarea`
    width: 90%;
    height: 54%;
    overflow-y: hidden;
    border-radius: 1em;
    padding: 0.9em;
    resize: none;
    outline: none;
    border: 1px solid #0e3359e1;

    @media (max-width: 600px) {
        width: 100%;
        height: auto;
        padding:.5em;
        margin-bottom:.5em
}
`
export const CardFooter = styled.footer`
    display:flex ;
    justify-content :space-evenly ;
    align-items :baseline ;
    gap :2em ;

@media (max-width :600px){
    flex-direction :column ;
    align-items:center ;
}
`

export const CardButton = styled.button`
    border:none ;
    border-radius :2em ;
    background-color:#0e3359e1 ;
    color:#fff ;
    cursor:pointer ;

@media (max-width :600px){
    padding:.5em ;
    margin-bottom:.5em ;
}
`

export const CardButtonLeft = styled.button`
    border:none ;
    border-radius :2em ;
    background-color:#0e3359e1;
    color:#fff ;
    cursor:pointer ;

@media (max-width :600px){
    padding:.5em ;
    margin-bottom:.5em ;
}
`
export  const Overlay = styled.div`
    z-index:9999;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #313030d2;
`
export const Box = styled.section`
    width: 24%;
    background-image: linear-gradient(to right,#66135C,#3C1E59,#0A3459);
    border-radius: .5em;
    padding:2em;
`
export const OverlayButton = styled.button`
    background-color:#0e3359e1;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.4);
    color:#fff;
    cursor:pointer;
    border: none;
    border-radius:1em;
    padding: 1em;
    font-size: 1em;
    margin-top: 1em;
    margin-right: 2em;

    &:hover{
        opacity: 0.7;
    }

`
export const Span = styled.span`
    margin-bottom: 1em;
    color:#fff;
`