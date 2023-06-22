export const DelCard = async (cardId: string) => {
    try {
        const token = localStorage.getItem('token')
        const response = await fetch(`https://arnia-kanban.vercel.app/api/card/${cardId}`,{
            method: 'DELETE',
            headers:{
                'content-type':'application/json',
                'x-api-key':'52a8b954-e25d-4cc5-86e5-c32e92f994bb',       
                Authorization:  token || '',
            }
        })
    }catch (error) {
        console.log('Erro', error)
    }
}