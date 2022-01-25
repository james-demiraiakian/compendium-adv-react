import API from '../components/API';
import React, { useEffect, useState } from 'react';
import fetchData from '../services/api';
import './APIList.css';

export default function APIList() {
  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    const fetchCat = async () => {
      const categories = await fetchData('categories');
      setCatList(categories);
      console.log(catList);
    };
    fetchCat();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchData('entries');
      setApi(data.entries);
      setLoading(false);
    };
    fetchApi();
  }, []);

  if (loading) return <h1>LOADING</h1>;

  return (
    <>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {catList.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
      <div className="card-box">
        {api.map((ap) => (
          <API key={ap.api} {...ap} />
        ))}
      </div>
    </>
  );
}
