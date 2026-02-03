import { FaArrowRightFromBracket, FaArrowRightLong } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    salaryRange,
    description,
    company_logo,
    company,
    applicationDeadline,
    responsibilities,
    requirements,
    hr_name,
    hr_email,
  } = useLoaderData();

  return (
    <section className='relative my-12 overflow-hidden'>
      {/* Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }`}
      </style>

      {/* Background SVG (NOW RESPECTS ROOT WIDTH) */}
      <svg
        className='absolute inset-0 -z-10 w-full top-20'
        viewBox='0 0 1440 676'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='-92'
          y='-948'
          width='1624'
          height='1324'
          rx='812'
          fill='url(#a)'
        />
        <defs>
          <radialGradient
            id='a'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='rotate(90 428 292) scale(812)'
          >
            <stop
              offset='.63'
              stopColor='#372AAC'
              stopOpacity='0'
            />
            <stop
              offset='1'
              stopColor='#372AAC'
            />
          </radialGradient>
        </defs>
      </svg>

      {/* Job Details Card */}
      <div className='flex justify-center px-4'>
        <div className='w-full max-w-4xl bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-600 rounded-2xl p-8 text-white backdrop-blur'>
          {/* Header */}
          <div className='flex items-center gap-4'>
            <img
              src={company_logo}
              alt={company}
              className='w-14 h-14 rounded-md object-cover bg-white'
            />
            <div>
              <h2 className='text-2xl font-semibold'>{title}</h2>
              <p className='text-slate-300'>{company}</p>
            </div>
          </div>

          {/* Meta */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-sm'>
            <div>
              <p className='text-slate-400'>Location</p>
              <p>{location}</p>
            </div>
            <div>
              <p className='text-slate-400'>Job Type</p>
              <p>{jobType}</p>
            </div>
            <div>
              <p className='text-slate-400'>Category</p>
              <p>{category}</p>
            </div>
            <div>
              <p className='text-slate-400'>Deadline</p>
              <p>{applicationDeadline}</p>
            </div>
          </div>

          {/* Description */}
          <div className='mt-8'>
            <h3 className='text-lg font-medium mb-2'>Job Description</h3>
            <p className='text-slate-300 leading-relaxed'>{description}</p>
          </div>

          {/* Responsibilities */}
          <div className='mt-8'>
            <h3 className='text-lg font-medium mb-2'>Responsibilities</h3>
            <ul className='list-disc list-inside space-y-1 text-slate-300'>
              {responsibilities.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className='mt-8'>
            <h3 className='text-lg font-medium mb-2'>Requirements</h3>
            <div className='flex flex-wrap gap-2'>
              {requirements.map((skill, i) => (
                <span
                  key={i}
                  className='px-3 py-1 border border-slate-500 rounded-full text-sm'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Salary & HR */}
          <div className='flex flex-col md:flex-row justify-between gap-6 mt-10'>
            <div>
              <p className='text-slate-400'>Salary Range</p>
              <p className='text-lg font-medium'>
                {salaryRange.min} – {salaryRange.max}{' '}
                {salaryRange.currency.toUpperCase()}
              </p>
            </div>

            <div>
              <p className='text-slate-400'>HR Contact</p>
              <p>{hr_name}</p>
              <p>{hr_email}</p>
            </div>
          </div>

          {/* Actions */}
          <div className='flex items-center gap-4 mt-8'>
            <Link to={`/applyJob/${_id}`}>
              <button className='flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-lg px-7 h-11'>
                Apply Job
                <FaArrowRightLong className='w-4 h-4' />
              </button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className='border border-slate-400 hover:bg-white/10 active:scale-95 rounded-lg px-8 h-11'
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
