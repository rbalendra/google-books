const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
//TODO - NEED TO HIDE THIS API KEY IN THE BACKEND!!!!!!!!
//https://vite.dev/guide/env-and-mode

/* this function fetches the books from google books API based on the search query. It makes an async request to the API and returns the results.
It handles errors gracefully by logging them to the console and returning an empty array in case of an error. */

export async function fetchBooks(query) {
	try {
		//https://developers.google.com/books/docs/v1/using
		const url = `${BASE_URL}?q=${query}&orderBy=newest&maxResults=40&key=${API_KEY}`;
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Failed to fetch books');
		}

		const data = await response.json();
		return data.items || []; // Return an empty array if no items are found
	} catch (error) {
		console.error('Error fetching books:', error);
		return []; // Return an empty array in case of error
	}
}
