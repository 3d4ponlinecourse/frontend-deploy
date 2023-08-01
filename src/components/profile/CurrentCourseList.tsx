import React from 'react'
import { Link } from 'react-router-dom'
import { IEnrollment } from '../../types/enrollment'
import { Button } from '@material-tailwind/react'

interface ICurrentCourseListProp {
  enrollment: IEnrollment
}

const CurrentCourseList = ({ enrollment }: ICurrentCourseListProp) => {
  return (
    <div>
      <div className="p-3 my-4 border border-teal-400 rounded-xl hover:scale-105 transition ease-in delay-3">
        <div className="grid grid-cols-6 grid-rows-1 gap-4">
          <div className="flex flex-col col-start-1 col-span-3 ... p-2 ">
            <h4 className="flex justify-start text-gray-500 ml-6">Course</h4>
            <Link to={`/learn/${enrollment.courseId}`}>
              <button className="flex justify-left font-bold text-xl ml-6">{enrollment.courseName}</button>
            </Link>
          </div>
          <div className="grid content-center justify-between ml-8">
            <Link to={`/learn/${enrollment.courseId}`}>
              <Button color="teal" variant="filled" className="w-40">
                Resume Learning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentCourseList
