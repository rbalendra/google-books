const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
//https://vite.dev/guide/env-and-mode

export async function fetchBooks(query) {
	try {
		//https://developers.google.com/books/docs/v1/using
		const url = `${BASE_URL}?q=${query}&key=${API_KEY}`;
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Failed to fetch books');
		}

		const data = await response.json();
		return data.items || [];
	} catch (error) {
		// Handle errors gracefully
		console.error('Error fetching books:', error);
		return []; // Return an empty array in case of error
	}
}
