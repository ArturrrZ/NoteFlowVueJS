import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/styles.css'
const app = createApp(App);
app.use(router);
// Create a JSON object to store
const notes = [
    { title: "Title of the Note", body: "Body of the Note" },
    { title: "Example of Title", body: "Example of the body" },
    { title: "LOCAL STORAGE", body: "All notes are saved in local storage" },
];
// Convert the JSON object to a string and store it in localStorage
window.localStorage.setItem("notes", JSON.stringify(notes));
// Retrieve the JSON string from localStorage and parse it back to an object
const storedNotes = JSON.parse(window.localStorage.getItem("notes"));
console.log(storedNotes); // Check the first item in the storedNotes array
// Mount the app
app.mount('#app');
