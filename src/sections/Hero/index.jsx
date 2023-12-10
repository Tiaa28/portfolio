import tiaa from '@/assets/tiaa.png'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="lg:h-screen h-auto lg:pt-0 pt-24">
      <div className="container mx-auto pt-4 md:px-0 px-4 h-full">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center h-full">
          <div className="w-full h-full md:basis-1/2 basis-full flex justify-center items-end">
            <div className="xl:w-3/5 md:w-full overflow-hidden flex justify-center items-end">
              <Image alt="Tia Niandari" src={tiaa} className="w-full h-auto" />
            </div>
          </div>
          <div className="w-full md:basis-1/2 basis-full">
            <div className="flex flex-col gap-3 items-start justify-center">
              <p className="font-bold text-color-green text-xl">I'am Tia Niandari</p>
              <h1 className="font-bold text-color-white md:text-5xl text-3xl">Frontend Web Developer</h1>
              <p className="text-color-grey">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente cum iusto mollitia id ea officiis excepturi blanditiis libero doloribus natus corporis fugit aperiam, numquam illo totam sed odio suscipit quia praesentium? Ab quia in tempore. Aperiam nemo accusamus adipisci ullam tenetur laborum voluptate recusandae voluptates. Accusantium nostrum perferendis maiores commodi.</p>
              <Link href={'#'} className='bg-gradient rounded-md hover:bg-gradient-hover py-2 px-4 text-color-white'>About Me</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero