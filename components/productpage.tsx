

import { getProjects } from '@/sanity/sanity-utils';
import Link from 'next/link';
import Image from 'next/image';

import Share from './share';


export default async function Productpage() {

  const projects = await getProjects();


  return (
    <div className='justify-center items-center text-center mt-20'>
      <h1 className="text-3xl font-extrabold font-bodoni-moda">Guide</h1>
      <p className="mt-3 text-xl text-gray-600 mx-10">A short guide to finding valuable items in your home</p>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center text-center p-10 md:mx-20 ">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-4 border-gray-2 rounded-xl p-1 hover:scale-105 hover:border-blue-500 transition">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={200}
              height={200}
              className="object-cover text-center mx-auto"
            />
          )}
          <div className="mt-2 font-extrabold bg-black bg-clip-text text-transparent">
            {project.name}
          </div>

          
        </Link>
      ))}


      </div>
      <div className='flex flex-col p-10 md:pt-10 bg-purple-200 rounded-xl m-10 mx-auto md:w-[80%] justify-content-center'>
        <p className="text-center text-lg text-gray-600 font-lato pt-5 p-1 md:p-10">
          Dont have what youre looking for? <br />
          Dont worry. Theres a wide range of collectables and even if we dont have a guide for that category at the moment, it doesnt mean your item isnt valuable. <br />
          Send us a message and we will get back to you about whatever it is you think might be collectable. <br />
        </p>

      </div>
      <div className='flex flex-col p-10 pt-5 bg-purple-200 rounded-xl m-10 mx-auto md:w-[80%] justify-content-center'>
        <p className='text-center text-xl text-gray-600 font-lato pt-5 p-5'>
          Have some friends that could benefit from this information?
          <br />
          How about sharing this website with them.</p>

        <Share />
      </div >
    </div>
  )
}



