import googleIcon from '../assets/google.svg'
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#3855B3]">
      <div className="bg-white w-[370.1px] h-[510.81px] rounded-lg shadow-xl p-6">
        <h1 className="text-center text-[21.25px] font-medium my-2 text-[#181819]">
          Login
        </h1>

        <div className='flex items-center justify-center gap-2 text-[10.72px]'>
            <span className='text-[#181819]'>Don't have an account yet? </span>
            <span className='text-[#3855B3]'> Create account</span>
        </div>

        <div className='bg-transparent border border-gray-300 w-full h-[42.5px] rounded-[3.54px] flex items-center justify-center gap-1 cursor-pointer my-5'>
            <img src={googleIcon} alt="" className='' />
            <p className='font-medium text-[#181819] text-[14.17px]'>Sign up with Google</p>
        </div>

        <div className="flex items-center justify-between gap-4">
            <div className='w-[45%] h-[1px] bg-[#e6e7e9]'></div>
            <span className='uppercase medium text-[12.4px] text-gray-500'>or</span>
            <div className='w-[45%] h-[1px] bg-[#e6e7e9]'></div>
        </div>

        <form className="flex flex-col justify-between w-full mt-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className=" text-[12.4px] font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full h-[42.5px] border border-gray-300 outline-none bg-transparent rounded-[3.54px] p-5"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex w-full items-center justify-between">
                <label
                  htmlFor=""
                  className=" text-[12.4px] font-medium text-gray-700"
                >
                  Password
                </label>

                <span className='text-[#3855b3] text-[12.4px] cursor-pointer'>
                  Remember me
                </span>
              </div>
              <input
                type="password"
                className="w-full h-[42.5px] border border-gray-300 outline-none bg-transparent rounded-[3.54px] p-5"
              />
            </div>
          </div>
          <div className="flex my-3 items-center gap-3">
            <input type="checkbox" name="" id="" className='w-[15.94px] h-[15.94px]' />
            <label htmlFor="" className='text-gray-700 text-[12.4px] mt-1'>Keep me logged in</label>
          </div>

          <button type='submit' className="w-full bg-[#3855B3] h-[42.5px] rounded-[3.54px] hover:bg-opacity-50 text-white mt-6">Login</button>
        </form>

        
      </div>
    </div>
  );
};

export default Login;
