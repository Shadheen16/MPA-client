import React from 'react';
import { CourseData } from '../../../Data';
import CourseCard from './CourseCard';
import CourseHeader from './CourseHeader';


const MyCourses = ({handleScroll}) => {
    console.log(CourseData);
    return (
        <div>
            <CourseHeader
                headerText="My Courses"
                handleScroll={handleScroll}
            />
            <div id="my-courses" className="flex overflow-x-scroll scrollbar-hide">
                   {
                CourseData.map(data => <CourseCard
                    key={data.id}
                    data={data}
                />)
            }
            </div>
         
        </div>
    );
};

export default MyCourses;