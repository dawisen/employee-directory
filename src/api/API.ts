import axios from 'axios';

export default async function getEmployees(): Promise<[]> {
  const { data } = await axios.get('https://randomuser.me/api/?results=20');
  return data.results;
}
