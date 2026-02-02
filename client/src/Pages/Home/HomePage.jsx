import { useEffect, useState } from 'react';
import { Banner, HotJobs } from '../../Components/Index';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // প্রথমে 3 কার্ড দেখাবে
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

  // Show More / Show Less handler
  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, jobs.length));
  };

  const handleShowLess = () => {
    setVisibleCount((prev) => Math.max(prev - 3, 3)); // প্রতি ক্লিকে 3 কমাবে, কিন্তু 3 এর নিচে নামবে না
  };

  return (
    <div>
      <Banner />
      <HotJobs
        jobs={jobs.slice(0, visibleCount)}
        loading={loading}
        totalJobs={jobs.length}
      />

      {/* Show More / Show Less Buttons */}
      <div className='flex justify-center gap-4 my-4'>
        {visibleCount < jobs.length && (
          <button
            onClick={handleShowMore}
            className='px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition'
          >
            Show More
          </button>
        )}
        {visibleCount > 3 && (
          <button
            onClick={handleShowLess}
            className='px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition'
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
