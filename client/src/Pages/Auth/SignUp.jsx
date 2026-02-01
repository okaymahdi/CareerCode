import Lottie from 'lottie-react';
import signUpLottie from '../../assets/Lotties/SignUp.json';

const SignUp = () => {
  return (
    <>
      <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <Lottie
              style={{ width: '100%' }}
              animationData={signUpLottie}
              loop={true}
            />
          </div>
          <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
            <div className='card-body'>
              <h1 className='text-5xl font-bold'>Register now!</h1>
              <form>
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
