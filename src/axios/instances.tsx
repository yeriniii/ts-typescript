import axios from "axios";

export const serverInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
