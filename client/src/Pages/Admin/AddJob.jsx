import axios from 'axios';
import Swal from 'sweetalert2';
import UseAuth from '../../Hooks/UseAuth';

const currencies = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'BDT', name: 'Bangladeshi Taka' },
  { code: 'INR', name: 'Indian Rupee' },
  { code: 'PKR', name: 'Pakistani Rupee' },
  { code: 'LKR', name: 'Sri Lankan Rupee' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'CNY', name: 'Chinese Yuan' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'SEK', name: 'Swedish Krona' },
  { code: 'NOK', name: 'Norwegian Krone' },
  { code: 'DKK', name: 'Danish Krone' },
  { code: 'SAR', name: 'Saudi Riyal' },
  { code: 'AED', name: 'UAE Dirham' },
  { code: 'QAR', name: 'Qatari Riyal' },
  { code: 'KWD', name: 'Kuwaiti Dinar' },
  { code: 'MYR', name: 'Malaysian Ringgit' },
  { code: 'SGD', name: 'Singapore Dollar' },
  { code: 'THB', name: 'Thai Baht' },
  { code: 'IDR', name: 'Indonesian Rupiah' },
  { code: 'KRW', name: 'South Korean Won' },
  { code: 'NGN', name: 'Nigerian Naira' },
  { code: 'ZAR', name: 'South African Rand' },
  { code: 'EGP', name: 'Egyptian Pound' },
  { code: 'BRL', name: 'Brazilian Real' },
  { code: 'ARS', name: 'Argentine Peso' },
  { code: 'MXN', name: 'Mexican Peso' },
];

const AddJob = () => {
  const { user } = UseAuth();
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = data;
    /** Process Salary Range Data */
    newJob.salaryRange = { min, max, currency };

    /** Process Requirements Data */
    const requirementsString = newJob.requirements;
    const requirementsDirty = requirementsString.split(',');
    const requirementsClean = requirementsDirty.map((requirement) =>
      requirement.trim(),
    );
    newJob.requirements = requirementsClean;

    /** Process Responsibilities Data */
    const responsibilitiesString = newJob.responsibilities;
    const responsibilitiesDirty = responsibilitiesString.split(',');
    const responsibilitiesClean = responsibilitiesDirty.map((responsibility) =>
      responsibility.trim(),
    );
    newJob.responsibilities = responsibilitiesClean;

    /** Job Status */
    newJob.status = 'active';

    /** Data Length Check */
    const dataLength = Object.keys(newJob).length;
    console.log(dataLength);

    /** Send Data to Server & Save Job to The Database */
    axios
      .post(`${import.meta.env.VITE_API_URL}/jobs`, newJob)
      .then((response) => {
        if (response.data.insertedId) {
          /** Show Success Message */
          const localApplyDate = new Date(
            new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }),
          );
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Job Added Successfully',
            text: `Job Added Successfully at ${localApplyDate}`,
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='my-12 w-full flex flex-col justify-center items-center'>
      <h2 className='text-3xl'>Add Job</h2>
      <form onSubmit={handleAddJob}>
        {/* Basic Info */}
        <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs p-4'>
          <legend className='fieldset-legend'>Basic Info</legend>

          <label className='label'>Job Title</label>
          <input
            type='text'
            className='input'
            name='title'
            placeholder='Enter Your Job Title'
          />

          <label className='label'>Company Name</label>
          <input
            type='text'
            className='input'
            name='name'
            placeholder='Enter Your Company Name'
          />

          <label className='label'>Location</label>
          <input
            type='text'
            className='input'
            name='location'
            placeholder='Enter Company Location'
          />

          <label className='label'>Logo</label>
          <input
            type='text'
            className='input'
            name='logo'
            placeholder='Logo'
          />
        </fieldset>

        {/* Job Type */}
        <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs border py-4 px-2'>
          <legend className='fieldset-legend'>Job Type</legend>

          <div className='filter'>
            <input
              className='btn btn-square'
              type='reset'
              value='×'
            />
            <input
              className='btn'
              type='radio'
              name='jobType'
              aria-label='On-Site'
              value={'On Site'}
            />
            <input
              className='btn'
              type='radio'
              name='jobType'
              aria-label='Remote'
              value={'Remote'}
            />
            <input
              className='btn'
              type='radio'
              name='jobType'
              aria-label='Hybrid'
              value={'Hybrid'}
            />
          </div>
        </fieldset>

        {/* Job Category */}
        <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4'>
          <legend className='fieldset-legend'>Job Category</legend>

          <select
            defaultValue='Job Category'
            className='select'
            name='category'
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Job Application Deadline */}
        <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4'>
          <legend className='fieldset-legend'>Application Deadline</legend>
          <input
            type='date'
            name='deadline'
            className='input'
          />
        </fieldset>

        {/* Salary Range */}
        <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4'>
          <legend className='fieldset-legend'>Salary Range</legend>
          <div className='flex items-center gap-2'>
            <div>
              <label className='label'>Minimum Salary</label>
              <input
                type='text'
                className='input'
                name='min'
                placeholder='Minimum Salary'
              />
            </div>
            <div>
              <label className='label'>Maximum Salary</label>
              <input
                type='text'
                className='input'
                name='max'
                placeholder='Maximum Salary'
              />
            </div>
            <div>
              <label className='label'>Currency</label>
              <select
                className='select'
                name='currency'
                defaultValue='Select a Currency'
              >
                <option disabled={true}>Select a Currency</option>
                {currencies.map((currency) => (
                  <option
                    key={currency.code}
                    value={currency.code}
                  >
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        {/* Job Description */}
        <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4'>
          <legend className='fieldset-legend'>Job Description</legend>
          <textarea
            className='textarea h-24'
            name='description'
            placeholder='Enter Your Job Description Here!'
          ></textarea>
        </fieldset>

        {/* Job Requirements */}
        <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4'>
          <legend className='fieldset-legend'>Job Requirements</legend>
          <textarea
            className='textarea h-24'
            name='requirements'
            placeholder='Enter Your Job requirements ( Separate by Comma )!'
          ></textarea>
        </fieldset>

        {/* Job Responsibilities */}
        <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4'>
          <legend className='fieldset-legend'>Job Responsibilities</legend>
          <textarea
            className='textarea h-24'
            name='responsibilities'
            placeholder='Enter Your Job Responsibilities ( Separate by Comma )!'
          ></textarea>
        </fieldset>

        {/* HR Related Info */}
        <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4'>
          <legend className='fieldset-legend'>HR Related Info</legend>

          <label className='label'>HR Name</label>
          <input
            type='text'
            className='input'
            name='hr_name'
            placeholder='HR Name'
          />

          <label className='label'>HR Email</label>
          <input
            type='email'
            className='input'
            name='hr_email'
            defaultValue={user?.email}
            placeholder='HR Email'
          />
        </fieldset>

        {/* Submit Button */}
        <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4'>
          <legend className='fieldset-legend'>Submit Job</legend>
          <input
            type='submit'
            className='btn btn-neutral mt-4'
            value='Add Job'
          />
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
