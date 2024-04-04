// api.js
export const resetData = async () => {
    try {
        const response = await fetch('http://localhost:5000/reset', {
            method: 'POST',
        });
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};