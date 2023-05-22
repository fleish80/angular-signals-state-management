import axios from 'axios';

export async function getRandomJoke(): Promise<string> {
  const response =  await axios.get<{value: string}>('https://api.chucknorris.io/jokes/random');
  return response.data.value;
}
