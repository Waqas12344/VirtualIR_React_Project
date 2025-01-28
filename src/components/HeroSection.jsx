import video1 from '../assets/video1.mp4'
const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ">
            VirtualIR build tools
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> {" "}for developers</span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor quae repellendus aliquid quibusdam commodi. Hic, soluta suscipit dolore, nostrum quas consectetur harum doloribus nesciunt ad corporis nisi natus  
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>
                Start for free
            </a>
            <a href="#" className='py-3 px-4 mx-3 border rounded-md'>
                Documentation
            </a>
        </div>
    </div>
  )
}

export default HeroSection