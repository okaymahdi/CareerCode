import axios from 'axios';
import { useState } from 'react';
import { Link, useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const ApplyJob = () => {
  const { id: jobId } = useParams();
  const [role, setRole] = useState('worker');
  const { user } = UseAuth();
  console.log(user);

  const handleApplyJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newFormData = Object.fromEntries(formData.entries());
    console.log(newFormData.linkedin);
    const linkedIn = newFormData.linkedin;
    const gitHub = newFormData.github;
    const phoneNumber = newFormData.phone;
    const userEmail = newFormData.email;
    const resume = newFormData.resume;
    const experience = newFormData.experience;

    const applyJob = {
      jobId,
      applicantBy: user.email,
      linkedIn,
      gitHub,
      phoneNumber,
      userEmail,
      resume,
      experience,
    };
    console.log(applyJob);

    /** Apply Job in Database */
    axios
      .post(`${import.meta.env.VITE_API_URL}/jobs/apply`, applyJob)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <h2 className='text-3xl font-bold mb-4 text-center'>
        Apply for This Job:
        <>
          <Link to={`/jobs/${jobId}`}> Details</Link>
        </>
      </h2>
      <section className='bg-white dark:bg-gray-900'>
        <div className='flex justify-center min-h-screen'>
          <div
            className='hidden bg-cover lg:block lg:w-2/5'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')",
            }}
          ></div>

          <div className='flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5'>
            <div className='w-full'>
              <h1 className='text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white'>
                Apply with Confidence!
              </h1>

              <p className='mt-4 text-gray-500 dark:text-gray-400'>
                Fill out the form below to apply for this position. Make sure
                all information is accurate.
              </p>

              <div className='mt-6'>
                <h1 className='text-gray-500 dark:text-gray-300'>
                  Select type of account
                </h1>

                <div className='mt-3 md:flex md:items-center md:-mx-2'>
                  <button
                    onClick={() => setRole('client')}
                    className={`text-sm font-medium transition flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none
                  ${
                    role === 'client'
                      ? 'bg-blue-500 text-white shadow'
                      : 'text-gray-600 hover:text-blue-500'
                  }
                `}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>

                    <span className='mx-2'>client</span>
                  </button>

                  <button
                    onClick={() => setRole('worker')}
                    className='flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>

                    <span className='mx-2'>worker</span>
                  </button>
                </div>
              </div>

              <form
                onSubmit={handleApplyJob}
                className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2'
              >
                <div>
                  <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                    LinkedIn Profile URL
                  </label>
                  <input
                    type='url'
                    placeholder='https://linkedin.com/in/username'
                    name='linkedin'
                    required
                    className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                    GitHub Profile URL
                  </label>
                  <input
                    type='url'
                    placeholder='https://github.com/username'
                    name='github'
                    required
                    className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                    Phone Number
                  </label>
                  <input
                    type='text'
                    placeholder='XXX-XX-XXXX-XXX'
                    name='phone'
                    required
                    className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                    Email address
                  </label>
                  <input
                    type='email'
                    name='email'
                    required
                    placeholder='johnsnow@example.com'
                    className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                    Resume / CV Link
                  </label>
                  <input
                    type='url'
                    name='resume'
                    required
                    placeholder='https://resume.com/username'
                    className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                    Work Experience
                  </label>
                  <input
                    type='text'
                    name='experience'
                    required
                    placeholder='2+ years in Web Development'
                    className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>

                <button className='flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
                  <span> Submit Application</span>

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 rtl:-scale-x-100'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyJob;
