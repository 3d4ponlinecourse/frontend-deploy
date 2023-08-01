import React from 'react'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { Dialog, DialogBody, Card } from '@material-tailwind/react'
interface IPortfolio {
  id: number
  img: string
}
const Portfolio: IPortfolio[] = [
  {
    id: 1,
    img: 'https://cdnb.artstation.com/p/assets/images/images/061/437/681/large/max-marharit-7.jpg?1680788969',
  },
  {
    id: 2,
    img: 'https://cdnb.artstation.com/p/assets/images/images/007/934/201/large/gary-sanchez-gary-sanchez-gary-sanchez-gary-sanchez-gary-sanchez-666-spacex-design-01br-0004b.jpg?1509447784',
  },
  {
    id: 3,
    img: 'https://cdna.artstation.com/p/assets/images/images/011/707/496/large/sergii-golotovskiy-6.jpg?1530980905',
  },
  {
    id: 4,
    img: 'https://cdnb.artstation.com/p/assets/images/images/010/730/103/large/tyler-bolyard-zoot-395-65.jpg?1525912002',
  },
]
const About = () => {
  const [img, setImg] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen((cur) => !cur)

  return (
    <div className="px-4 md:px-12 lg:px-64 py-16 lg:py-32 bg-gray-900 flex flex-col gap-8">
      <div className="  flex flex-col items-start md:flex-row gap-8 lg:gap-16">
        <div className="flex flex-col justify-between gap-8">
          <div className="flex flex-col flex-wrap gap-8 text-white">
            <h2 className="font-bold text-4xl text-teal-400">Meet Jacob Larzuri</h2>
            <h3 className="font-bold text-xl ">
              Hi I’m Jacob. I love making art as well as sharing what I know to everybody who love art.
            </h3>
            <p>
              I created <span className="text-teal-400 font-bold">3D4P</span> to be a place where I can share with you
              everything I know, from digital and traditional sculpting to sketching and illustration... including the
              techniques that I use within my work-flow. I also founded the 3DConceptArtist academy where you can find
              more in-depth courses and specialised workshops on a variety of topics. For me, learning never stops -
              whilst I’m at it - I hope that by sharing what I’ve learnt, I can inspire you and help you with your
              journey too!
            </p>
          </div>
          <div className="text-2xl flex flex-row gap-10 text-white">
            <span className="hover:text-teal-400 hover:cursor-pointer">
              <AiFillFacebook />
            </span>
            <span className="hover:text-teal-400 hover:cursor-pointer">
              {' '}
              <AiOutlineTwitter />
            </span>
          </div>
        </div>

        <img
          className="w-64 h-full md:w-80 rounded-xl order-first"
          // src="https://media1.giphy.com/media/l0HeeIlWnhFoRac4o/giphy.gif?cid=ecf05e472fji1zcznr5y5uirn8xqoh8taakhtjjcr8idonad&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          src="https://blenderartists.org/uploads/default/original/4X/4/2/7/427fd35ed1d3368b26797507889c5d938cd4186f.png"
        />
      </div>
      <div className="flex flex-col gap-4 text-white">
        <h3 className="text-xl font-bold">
          My recent works<span className="text-teal-400">.</span>
        </h3>
        <div className="flex flex-row gap-3 flex-wrap md:flex-nowrap">
          {Portfolio.map((item) => (
            <>
              <Card className="cursor-pointer overflow-hidden transition-opacity hover:opacity-70" onClick={handleOpen}>
                <img
                  className="h-full w-full object-cover object-center"
                  onClick={() => setImg(item.img)}
                  src={item.img}
                />
              </Card>
              <Dialog size="xl" open={open} handler={handleOpen}>
                <DialogBody divider={false} className="p-4">
                  <img className="h-[48rem] w-full object-cover object-center" src={img} />
                </DialogBody>
              </Dialog>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
