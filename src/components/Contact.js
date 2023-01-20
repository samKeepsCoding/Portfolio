import React from 'react'

const Contact = () => {
  return (
    <>
        <div className='w-full flex justify-center items-center py-32'>
            <div className='text-center max-w-xl px-4'>
                <h3 className='text-green-300 font-light mb-4'> 
                    03.What's Next?
                </h3>
                <h4 className='text-4xl font-bold'>GET IN TOUCH</h4>
                <p className='mt-6'>
                "I am open to both freelance and employment opportunities. However, if you have any other requests or questions, please feel free to reach out to me."
                </p>
                <button className='border-[0.3px] border-green-300 text-green-300 text-lg rounded-md px-6 py-4 mt-8 hover:bg-green-300 hover:text-slate-900 duration-100 ease-linear'>
                    <a href="mailto:sharris201597@gmail.com">
                        Say Hello
                    </a>
                </button>
            </div>
        </div>
    </>
  )
}

export default Contact