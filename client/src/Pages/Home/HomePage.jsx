import { useEffect, useState } from 'react';
import { Banner, HotJobs } from '../../Components/Index';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/jobs`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Banner />
      {loading ? <p>Loading jobs...</p> : <HotJobs jobs={jobs} />}
    </div>
  );
};

export default HomePage;
