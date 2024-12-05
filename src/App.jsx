import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

function App() {
  
  return (
    <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
      <div>
        <div className='sticky top-14 grid grid-rows-[35%_45%_20%] h-[87vh]'>
          <div className='flex flex-col gap-2'>
            <div className='text-3xl text-primaryTitle font-semibold'>Wiwat Chaichana</div>
            <div className='text-primaryAccent font-semibold'>Software Developer-between jobs</div>
            <div className='text-sm w-5/6'>From concept reality, bridging the gap with code, tranforming ideas into tangible digital solution.</div>
            <div className='mt-4'>
              <a href='#'>
                <span className='rounded-md bg-primaryTitle text-gray-200 py-2 px-4 '>
                  Viwe Resume

                  <span className='rotate-90 inline-block ml-2 text-sm'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/></span>
                </span>
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-3 font-semibold'>
            <div>
              <FontAwesomeIcon className='mr-2 text-primaryTitle' icon={faArrowRight} />
              About
            </div>
            <div>Experience</div>
            <div>project</div>
            <div>Article</div>
          </div>
          <div className='flex items-end gap-4 text-2xl'>
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGithub} />
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faMedium} />
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faLinkedin} />
          </div>
        </div>
      </div>
      <div>
        <div>About</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
      </div>
    </div>
  )
}

export default App
