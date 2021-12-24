import React from 'react';
import { CourseData } from '../../../Data';
import CourseCard from './CourseCard';
import CourseHeader from './CourseHeader';

const FeaturedCourses = () => {
    return (
        <div>
            <div>
            <CourseHeader
                headerText="Featured Courses"
            />
            <div className="flex overflow-x-scroll scrollbar-hide">
                   {
                CourseData.map(data => <CourseCard
                    key={data.id}
                    data={data}
                />)
            }
            </div>
         
        </div>
        </div>
    );
};

export default FeaturedCourses;