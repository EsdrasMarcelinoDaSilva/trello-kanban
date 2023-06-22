export const handleCardSubmission = async (title: string, content: string) => {

const postData = {
    title: title,
    content: content
}
    try {
        const token = localStorage.getItem('token')
        const response = await fetch('https://arnia-kanban.vercel.app/api/card', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
        Authorization: token || '',
},
        body: JSON.stringify(postData)
    })

    if (response.ok) {
        const newCard = await response.json();
        return newCard
    } else {
        console.log('Error sending card.');
    }
    } catch (error) {
        console.log('Error sending card:', error);
    }
}
