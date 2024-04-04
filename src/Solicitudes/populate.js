export const populateData = async () => {
    try {
        const response = await fetch('http://localhost:5000/populate', {
            method: 'POST',
        });
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};