export const resetData = async () => {
    try {
        const response = await fetch('https://iic3103-t1-wrappergaj.onrender.com/reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}