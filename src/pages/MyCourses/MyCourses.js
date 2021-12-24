import React from 'react';
import CourseBanner from './MyCoursesComponents/CourseBanner';
import CourseLeftBar from './MyCoursesComponents/CourseLeftBar';

const MyCourses = () => {
    return (
        <div className=" bg-clr-primary">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-12 bg-clr-primary">
                {/* left bar */}
                <div className="col-span-3 row-span-12">
                    <CourseLeftBar />
                </div>
                {/* banner */}
                <div className="col-span-9 row-span-4 banner-container">
                   <CourseBanner/>
                </div>
                {/* content */}
                <div className="col-span-4 row-span-8">

                </div>

            </div>
        </div>
    );
};

export default MyCourses;