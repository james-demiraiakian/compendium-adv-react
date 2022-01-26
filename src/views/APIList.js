import API from '../components/API';
import React, { useEffect, useState } from 'react';
import fetchData from '../services/api';
import './APIList.css';

export default function APIList() {
  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('All');
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    const fetchCat = async () => {
      const categories = await fetchData('categories');
      setCatList(categories);
    };
    fetchCat();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      if (category === 'All') {
        const data = await fetchData('entries');
        setApi(data.entries);
        setLoading(false);
      } else {
        const data = await fetchData(`entries?category=${category}`);
        setApi(data.entries);
        setLoading(false);
      }
    };
    fetchApi();
  }, [category]);

  if (loading) return <h1>LOADING</h1>;

  return (
    <>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        {catList.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <div className="card-box">
        {api.map((ap, i) => (
          <API key={`${i}-${ap.API}`} {...ap} /> //In the future, add index as a value in the object, then use THAT as key.
        ))}
      </div>
    </>
  );
}
