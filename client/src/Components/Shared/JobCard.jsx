import { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {
  GiBriefcase,
  GiDelicatePerfume,
  GiSemiClosedEye,
} from 'react-icons/gi';
import { Link } from 'react-router';
import { MdSendTimeExtension } from 'react-icons/md';
const JobCard = ({ job }) => {
  const [loaded, setLoaded] = useState(false);
  const {
    _id,
    title,
    location,
    jobType,
    category,
    salaryRange,
    description,
    company,
    requirements,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job || {};

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  // কার্ড mount হওয়ার পরে 0.5s পরে loaded=true
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500); // 500ms delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className='relative w-80  h-105 rounded-xl p-px bg-gray-900 overflow-hidden shadow-lg cursor-pointer'
    >
      {/* Glow */}
      <div
        className={`pointer-events-none blur-3xl rounded-full 
          bg-linear-to-r from-blue-500 via-indigo-500 to-purple-300
          size-60 absolute z-0 transition-opacity duration-500 
          ${visible && loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ top: position.y - 120, left: position.x - 120 }}
      />

      {/* Card content */}
      <div className='relative z-10 bg-gray-900/80 p-4 h-full w-full rounded-[11px] flex flex-col text-white'>
        {/* Header */}
        <div className='flex p-4 gap-3 items-center'>
          {!loaded ? (
            <div className='w-16 h-16 bg-gray-700 rounded-full animate-pulse' />
          ) : (
            <img
              src={company_logo}
              alt={company}
              className='w-16 h-16 rounded-full bg-white p-1'
            />
          )}

          <div className='flex-1 space-y-1'>
            {!loaded ? (
              <>
                <div className='h-4 w-32 bg-gray-700 rounded animate-pulse' />
                <div className='h-3 w-20 bg-gray-700 rounded animate-pulse' />
              </>
            ) : (
              <>
                <span className='font-bold text-white text-sm'>{company}</span>
                <p className='text-xs text-gray-400 flex items-center gap-1'>
                  <FaMapMarkerAlt size={16} />
                  {location}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Job Title */}

        <div className='px-4 mb-2 flex items-center gap-4'>
          {!loaded ? (
            <div className='h-5 w-40 bg-gray-700 rounded animate-pulse mb-1' />
          ) : (
            <h6 className='text-gray-100 font-semibold text-sm flex items-center gap-4'>
              {title}{' '}
              <div className='flex items-center gap-2 text-gray-500 border border-indigo-400 rounded-full px-4 py-2'>
                <div className='relative flex size-3.5 items-center justify-center'>
                  <span className='absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 animate-ping duration-300'></span>
                  <span className='relative inline-flex size-2 rounded-full bg-indigo-600'></span>
                </div>
                <span>{status}</span>
              </div>
            </h6>
          )}
        </div>

        {/* Job Type */}
        <div className='px-4 mb-2 flex items-center gap-4'>
          {!loaded ? (
            <div className='h-3 w-20 bg-gray-700 rounded animate-pulse' />
          ) : (
            <p className='text-gray-400 text-xs flex items-center gap-1'>
              <GiBriefcase size={16} />
              {jobType}
            </p>
          )}
          <span className='text-gray-400 text-xs flex items-center gap-1'>
            <MdSendTimeExtension size={16} />
            {category}
          </span>
        </div>

        {/* Description */}
        <div className='px-4 mb-4'>
          {!loaded ? (
            <>
              <div className='h-3 w-full bg-gray-700 rounded animate-pulse mb-1' />
              <div className='h-3 w-11/12 bg-gray-700 rounded animate-pulse mb-1' />
              <div className='h-3 w-10/12 bg-gray-700 rounded animate-pulse' />
            </>
          ) : (
            <p className='text-gray-200 text-xs line-clamp-3'>{description}</p>
          )}
        </div>

        {/* Skills */}
        <div className='px-4 mb-4 flex flex-wrap gap-2'>
          {!loaded
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className='h-5 w-16 bg-gray-700 rounded animate-pulse'
                />
              ))
            : requirements?.slice(0, 3).map((skill, i) => (
                <span
                  key={i}
                  className='bg-gray-700 text-white text-[10px] px-2 py-1 rounded'
                >
                  {skill}
                </span>
              ))}
        </div>

        {/* Footer */}
        <div className='mt-auto px-4 py-3 border-t border-gray-700 flex justify-between items-center'>
          {!loaded ? (
            <div className='flex gap-2'>
              <div className='h-4 w-20 bg-gray-700 rounded animate-pulse' />
              <div className='h-4 w-16 bg-gray-700 rounded animate-pulse' />
            </div>
          ) : (
            <>
              <div className='w-full  flex justify-between items-center mt-4'>
                <div>
                  <span className='text-sm text-green-400 mb-1 font-semibold'>
                    {salaryRange.min} - {salaryRange.max}{' '}
                    {salaryRange.currency.toUpperCase()}
                  </span>
                  <span className='text-gray-400 text-xs'> /Hour</span>
                </div>
                <Link to={`/jobs/${_id}`}>
                  <button className='border border-indigo-400 active:scale-95 hover:bg-white/10 transition rounded-lg px-2 py-1.5 flex items-center'>
                    <GiSemiClosedEye size={20} />
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
