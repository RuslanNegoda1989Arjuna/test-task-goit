import axios from 'axios';

const BASE_URL = 'https://639d73671ec9c6657baa7b37.mockapi.io/api/users';


export default async function fetchUsers() {

    // const url = 'https://639d73671ec9c6657baa7b37.mockapi.io/api/users'

  const response = await axios(BASE_URL);

  const data = response.data;
  return data;
}