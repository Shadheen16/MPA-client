import React from 'react';
import { CourseData } from '../../../Data';
import CourseCard from './CourseCard';
import CourseHeader from './CourseHeader';


const MyCourses = () => {
    return (
        <div>
            <CourseHeader
                headerText="My Courses"
            />
            <div className="flex overflow-x-scroll">
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