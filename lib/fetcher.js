export default async function fetcher(url) {
  const res = await fetch(url);

  if(res.ok) {
    return res.json();
  }
  console.error('There was an error while fetching...', error);
  throw new Error(`Something went wrong while fetching ${url}`);
}