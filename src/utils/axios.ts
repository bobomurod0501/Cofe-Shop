import axios from "axios";

export const request = axios.create({
  baseURL: "https://0ee4c7d692a7184d.mokky.dev",
  timeout: 1000 * 60 * 1,
});
