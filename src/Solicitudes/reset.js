// api.js
export const resetData = async () => {
    try {
        const response = await fetch('https://iic3103-t1-wrappergaj.onrender.com/reset', {
            method: 'POST',
        });
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};