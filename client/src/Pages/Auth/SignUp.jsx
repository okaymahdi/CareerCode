import Lottie from 'lottie-react';
import { use } from 'react';
import signUpLottie from '../../assets/Lotties/SignUp.json';
import { AuthContext } from '../../Context/AuthContext';

const formFields = [
  {
    id: 1,
    label: 'Name',
    type: 'text',
    name: 'name',
  },
  {
    id: 2,
    label: 'Email',
    type: 'email',
    name: 'email',
  },
  {
    id: 3,
    label: 'Image',
    type: 'file',
    name: 'image',
  },
];
const SignUp = () => {
  const { createUserWithEP } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newFormData = Object.fromEntries(formData.entries());
    console.log(newFormData);

    /** Create User in Firebase */
    createUserWithEP(newFormData.email, newFormData.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left lg:w-1/2 w-full flex justify-center items-center'>
            <Lottie
              animationData={signUpLottie}
              loop={true}
              className='w-full max-w-lg'
            />
          </div>
          <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
            <div className='card-body'>
              <h1 className='text-5xl font-bold'>Register now!</h1>
              <form onSubmit={handleSignUp}>
                <fieldset className='fieldset'>
                  <label className='label'>Email</label>
                  <input
                    type='email'
                    className='input'
                    name='email'
                    placeholder='Email'
                  />
                  <label className='label'>Password</label>
                  <input
                    type='password'
                    className='input'
                    name='password'
                    placeholder='Password'
                  />
                  <div>
                    <a className='link link-hover'>Forgot password?</a>
                  </div>
                  <button className='btn btn-neutral mt-4'>Register</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
