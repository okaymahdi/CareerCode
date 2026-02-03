import Lottie from 'lottie-react';
import { use } from 'react';
import signInLottie from '../../assets/Lotties/SignIn.json';
import { AuthContext } from '../../Context/AuthContext';
import SocialLogin from './SocialLogin';
import { useLocation, useNavigate } from 'react-router';
const SignIn = () => {
  const { signInUserWithEP } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';
  console.log('location', from);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newFormData = Object.fromEntries(formData.entries());
    console.log(newFormData);

    /** Create User in Firebase */
    signInUserWithEP(newFormData.email, newFormData.password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse '>
          <div className='text-center lg:text-left lg:w-1/2 w-full flex justify-center items-center'>
            <Lottie
              animationData={signInLottie}
              loop={true}
              className='w-full max-w-lg'
            />
          </div>
          <div className='card bg-base-100 max-w-sm shrink-0 shadow-2x'>
            <div className='card-body'>
              <h1 className='text-5xl font-bold'>Sign In now!</h1>
              <form onSubmit={handleSignIn}>
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
                  <button className='btn btn-neutral mt-4'>Sign In</button>
                </fieldset>
              </form>
              {/* Social Login Buttons */}
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
