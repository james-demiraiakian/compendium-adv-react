export default async function fetchData(mod) {
  const resp = await fetch(`https://api.publicapis.org/${mod}`);
  const temp = await resp.json();
  return temp;
}
