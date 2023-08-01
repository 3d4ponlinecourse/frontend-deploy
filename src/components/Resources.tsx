import React from 'react'
import { BiBox } from 'react-icons/bi'
import { motion } from 'framer-motion'

interface IResource {
  id: number
  img: string
  header: string
  type: string
  isNew: boolean
}

const resource: IResource[] = [
  {
    id: 1,
    img: 'https://uploads-ssl.webflow.com/615e05a19db5888071c7cff5/61f375de3a774b53888d1af9_general-sculpting-brushes.jpg',
    header: 'Clay brushes',
    type: 'BRUSH',
    isNew: true,
  },
  {
    id: 2,
    img: 'https://uploads-ssl.webflow.com/615e05a19db5888071c7cff5/61f3637dd975d0e8ca6a5f8a_advanced-brushes-pack.jpg',
    header: 'Rock brushes pack',
    type: 'BRUSH',
    isNew: false,
  },
  {
    id: 3,
    img: 'https://uploads-ssl.webflow.com/615e05a19db5888071c7cff5/61f8d186af157505946bf65e_metallic-materials.jpg',
    header: 'Metallic Materials',
    type: 'MATERIALS',
    isNew: false,
  },
  {
    id: 4,
    img: 'https://uploads-ssl.webflow.com/615e05a19db5888071c7cff5/61f35f80ad6a2a143dc52405_environment-brushes-hero.jpg',
    header: 'Environment Brushes',
    type: 'BRUSH',
    isNew: false,
  },
]

const cardMotion = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
}

const textMotion = {
  start: {},
  hover: {
    color: 'teal',
  },
}

const Resources = () => {
  return (
    <div className="px-4 md:px-12 lg:px-64 py-8 lg:pt-32 flex flex-col gap-8">
      <div className="flex flex-row justify-between items-end  pb-4">
        <div className="flex flex-row items-center gap-2">
          <span className="text-teal-400">
            <BiBox size={36} />
          </span>
          <h2 className="font-bold text-3xl md:text-4xl ">
            Featured Resources<span className="text-teal-400">.</span>
          </h2>
        </div>

        <p className="font-bold hidden md:block hover:text-teal-400 hover:cursor-pointer">SEE ALL</p>
      </div>
      <div className="flex flex-row gap-2 justify-center flex-wrap lg:flex-nowrap">
        {resource.map((item) => (
          <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="w-80  bg-zinc-900 shadow-xl overflow-hidden rounded-lg relative  cursor-pointer"
            key={item.id}
          >
            <motion.div variants={cardMotion} transition={{ ease: 'easeInOut' }}>
              <img className="" src={item.img} />
            </motion.div>

            <div className="bg-gradient-to-t absolute top-30 from-black w-full h-32"></div>
            <motion.div variants={textMotion} className="absolute bottom-4 left-8">
              <h3 className="font-bold text-white hover:text-teal-200">{item.header}</h3>
              <p className="text-xs font-bold text-gray-400">{item.type}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Resources
