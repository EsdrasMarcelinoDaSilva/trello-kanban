export const editCard = async (cardId: string, updatedTitle: string, updatedContent: string, column: "TODO" | "DOING"| "DONE") => {
    try {
        const token = localStorage.getItem('token')
        const response = await fetch(`https://arnia-kanban.vercel.app/api/card/${cardId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
                Authorization: token || '',
            },
            body: JSON.stringify({ title: updatedTitle, content: updatedContent, column }),
        })
        if(response.ok){
            console.log('Card updated successfully')
        }else {
            console.log('Failed to update card')
        }
    }catch(err){
        console.log('Erro ', err)
    }
}