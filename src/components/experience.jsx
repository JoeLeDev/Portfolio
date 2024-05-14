import HETIC from '../../assets/hetic.webp'
import MARRE from '../../assets/mare-carree.webp'
import UPEC from '../../assets/upec.webp'
import ICC from '../../assets/ICC.png'

const Experience = () => {
  return (
    <div>
      <div className='relative rounded-xl overflow-auto p-8 hover:animate-pulse'>
          <div className='overflow-hidden relative max-w-md mx-auto 
          bg-white-shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6
          dark:bg-slate-800 dark:highlight-white/5'>
              <img src={HETIC} className="absolute -left-6 w-28 h-28 rounded-full
              shadow"/>
          </div>
          <div className='min-w-0 py-5 pl-28 pr-5'>
            <div>
              
            </div>
          </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Experience
