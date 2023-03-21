export default async function fetcher(url) {
  try {
    const res = await fetch(url);
    return res.json();
  } catch(error) {
    console.error('There was an error while fetching...', error);
  }
}