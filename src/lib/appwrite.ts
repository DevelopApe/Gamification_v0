import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('YOUR_APPWRITE_PROJECT_ID'); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);

// Add these constants for easier reference
export const DATABASE_ID = 'YOUR_DATABASE_ID';
export const USERS_COLLECTION_ID = 'YOUR_USERS_COLLECTION_ID';
export const CHARACTERS_COLLECTION_ID = 'YOUR_CHARACTERS_COLLECTION_ID';

export { client };