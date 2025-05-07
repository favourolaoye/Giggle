import heroPic from '../../assets/heroPic.png'
import { Search, MapPin, BriefcaseBusiness, Building2,UsersRound } from 'lucide-react';

export default function Hero() {
  return (
    <div className='bg-lightGray py-32 px-5pct'>
      <div className='flex justify-between'>
        <div className="left">
          <h1 className='font-medium text-[56px]'>
            Find a job that suits 
          </h1>
          <h1 className='font-medium text-[56px] -mt-5'>
            your interest & skills.
          </h1>
          <div className="my-5">
            <p className='text-lg text-gray'>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam </p>
            <p className='text-lg text-gray'>in scelerisque leo, eget sollicitudin velit bestibulum. </p>
          </div>
          <div className="flex bg-white p-3 rounded-lg items-center my-5">
            <div className='flex flex-1 divide-x-1 divide-solid divide-gray-300 gap-3 h-10'>
            <div className='flex flex-1 gap-5 items-center'>
              <Search className='text-primary h-10'/>
              <input type="text" name="jobSearch" id="jobSearch" placeholder='Job tittle, Keyword...' className="placeholder:text-gray-400 text-base outline-0" />
            </div>
            <div className='flex flex-1 items-center gap-5'>
              <MapPin className='text-primary h-10'/>
              <input type="text" name="locationSearch" id="locationSearch" placeholder='Your Location' className="placeholder:text-gray-400 text-base outline-0" />
            </div>
            </div>
            <button className='text-white bg-primary py-4 px-8 rounded-sm cursor-pointer'>Find Job</button>
          </div>
          <p className='text-sm text-gray-700'><span className='text-gray'>Suggestion:</span> Designer, Programming, <span className='text-primary'>Digital Marketing,</span>  Video, Animation</p>
        </div>
        <div className="right">
          <img src={heroPic} alt="" />
        </div>
      </div>
      <div className='flex gap-4 mt-28'>
        <div className='flex-1 flex bg-white rounded-lg p-5 gap-5 items-center'>
          <div className="bg-[#E7F0FA] p-5 rounded-sm">
            <BriefcaseBusiness className='w-10 h-10 text-primary'/>
          </div>
          <div className=''>
            <h3 className='font-medium text-gray-900 text-2xl'>175,324</h3>
            <p className='text-gray-500 text-base font-normal'>Live Job</p>
          </div>
        </div>
        <div className='flex-1 flex bg-white rounded-lg p-5 gap-5 items-center'>
          <div className="bg-primary p-5 rounded-sm">
            <Building2 className='w-10 h-10 text-white'/>
          </div>
          <div className=''>
            <h3 className='font-medium text-gray-900 text-2xl'>97,354</h3>
            <p className='text-gray-500 text-base font-normal'>Companies</p>
          </div>
        </div>
        <div className='flex-1 flex bg-white rounded-lg p-5 gap-5 items-center'>
          <div className="bg-[#E7F0FA] p-5 rounded-sm">
            <UsersRound className='w-10 h-10 text-primary'/>
          </div>
          <div className=''>
            <h3 className='font-medium text-gray-900 text-2xl'>3,847,154</h3>
            <p className='text-gray-500 text-base font-normal'>Candidates</p>
          </div>
        </div>
        <div className='flex-1 flex bg-white rounded-lg p-5 gap-5 items-center'>
          <div className="bg-[#E7F0FA] p-5 rounded-sm">
            <BriefcaseBusiness className='w-10 h-10 text-primary'/>
          </div>
          <div className=''>
            <h3 className='font-medium text-gray-900 text-2xl'>7,532</h3>
            <p className='text-gray-500 text-base font-normal'>New Job</p>
          </div>
        </div>  
      </div>
    </div>
  )
}
