import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import SheetHead from '@/myComponents/sheets/SheetHead'


const page = () => {

    const courses2 = [
        {
            courseCode: "HUM-2342",
            creditHours: "2",
            courseName: "Civics and Community Engagement",
            type: "Theory",
            grade: "B+", // Example: Solid performance
            gradePoints: "3.3",
            remarks: "Good effort",
            status: "Completed", // Changed to 'Completed'
        },
        {
            courseCode: "CSC-2022",
            creditHours: "2",
            courseName: "Computer Networks",
            type: "Theory",
            grade: "A-", // Example: Strong performance in a core CS course
            gradePoints: "3.7",
            remarks: "Excellent grasp of concepts",
            status: "Completed",
        },
        {
            courseCode: "CSC-2021",
            creditHours: "1",
            courseName: "Computer Networks - LAB",
            type: "Lab",
            grade: "A", // Example: Top grade in practical work
            gradePoints: "4.0",
            remarks: "Outstanding practical skills",
            status: "Completed",
        },
        {
            courseCode: "CSC-2133",
            creditHours: "3",
            courseName: "Data Structures",
            type: "Theory",
            grade: "A", // Example: High achievement in a crucial topic
            gradePoints: "4.0",
            remarks: "Distinction in Data Structures",
            status: "Completed",
        },
        {
            courseCode: "CSC-2131",
            creditHours: "1",
            courseName: "Data Structures - LAB",
            type: "Lab",
            grade: "A+", // Example: Perfect score, showing strong practical skills
            gradePoints: "4.0", // Often maxed at 4.0 even for A+
            remarks: "Exceptional lab work",
            status: "Completed",
        },
        {
            courseCode: "MGT-2352",
            creditHours: "2",
            courseName: "Entrepreneurship",
            type: "Theory",
            grade: "B", // Example: Decent performance
            gradePoints: "3.0",
            remarks: "Met all requirements",
            status: "Completed",
        },
        {
            courseCode: "HUM-2332",
            creditHours: "2",
            courseName: "Ideology and Constitution of Pakistan",
            type: "Theory",
            grade: "B+",
            gradePoints: "3.3",
            remarks: "Good participation",
            status: "Completed",
        },
        {
            courseCode: "ENG3065",
            creditHours: "3",
            courseName: "Communication Skills (Domain Supporting 1)",
            type: "Theory",
            grade: "A-",
            gradePoints: "3.7",
            remarks: "Excellent presentation skills",
            status: "Completed",
        }
    ]

    const courses = [
        {
            courseCode: "MGT-1312",
            creditHours: 2,
            courseName: "Introduction to Management",
            type: "Theory", // Inferred type
            grade: "A",
            gradePoints: 3.66,
            remarks: "Outstanding",
            status: "Completed", // Inferred status
        },
        {
            courseCode: "MTH-1413",
            creditHours: 3,
            courseName: "Calculus and Analytical Geometry (QR-2)",
            type: "Theory",
            grade: "D",
            gradePoints: 1.0,
            remarks: "Unsatisfactory",
            status: "Completed",
        },
        {
            courseCode: "ENG-1213",
            creditHours: 3,
            courseName: "Functional English",
            type: "Theory",
            grade: "B+",
            gradePoints: 3.33,
            remarks: "Excellent",
            status: "Completed",
        },
        {
            courseCode: "CSC-1012",
            creditHours: 2,
            courseName: "Application of Information & Communication Technologies",
            type: "Theory",
            grade: "A",
            gradePoints: 3.66,
            remarks: "Outstanding",
            status: "Completed",
        },
        {
            courseCode: "CSC-1011",
            creditHours: 1,
            courseName: "Application of Information & Communication Technologies - LAB",
            type: "Lab",
            grade: "A+",
            gradePoints: 4.0,
            remarks: "Exceptional",
            status: "Completed",
        },
        {
            courseCode: "CSC-1111",
            creditHours: 1,
            courseName: "Programming Fundamentals - LAB",
            type: "Lab",
            grade: "A",
            gradePoints: 3.66,
            remarks: "Outstanding",
            status: "Completed",
        },
        {
            courseCode: "CSC-1113",
            creditHours: 3,
            courseName: "Programming Fundamentals",
            type: "Theory",
            grade: "B",
            gradePoints: 3.0,
            remarks: "Very Good",
            status: "Completed",
        },
        {
            courseCode: "HUM-1312",
            creditHours: 2,
            courseName: "Islamic Studies/Ethics",
            type: "Theory",
            grade: "B",
            gradePoints: 3.0,
            remarks: "Very Good",
            status: "Completed",
        },
    ];

    return (
        <div className='flex flex-col gap-5 mx-3'>
            <div className='flex gap-5 justify-center  max-sm:flex-col bg-[#ffffff] text-[#000000] rounded-xl px-20 max-sm:px-5 py-10 drop-shadow-md'>
                <img src="../assets/student2.jpg" alt="student picture"  className='rounded-full border-5 border-[#1F50CC] w-32 h-32 object-cover'/>
                <div className="text-container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-x-8 overflow-x-auto">

                        <div className="font-bold whitespace-nowrap">Name:</div>
                        <div className="whitespace-nowrap">Anonymous Student</div>

                        <div className="font-bold lg:col-start-3 whitespace-nowrap">Student ID:</div>
                        <div className="lg:col-start-4 whitespace-nowrap">123456789</div>

                        <div className="font-bold whitespace-nowrap">Email:</div>
                        <div className="whitespace-nowrap">amnaahmad.iisat.edu.pk</div>

                        <div className="font-bold lg:col-start-3 whitespace-nowrap">Account ID:</div>
                        <div className="lg:col-start-4 whitespace-nowrap">123456789</div>

                        <div className="font-bold whitespace-nowrap">Program:</div>
                        <div className="whitespace-nowrap">Information Technology</div>

                    </div>
                </div>
            </div>
            <div className="sheet-container">
                <SheetHead title="Fall 2024" />
                <Table className={"border-2 border-[#cdd1fd] rounded-2xl "}>
                    <TableHeader>
                        <TableRow className={"bg-[#cdd1fd]"}>
                            <TableHead className="w-[100px]">Course Code</TableHead>
                            <TableHead>Credit Hours</TableHead>
                            <TableHead>Course Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Grade</TableHead>
                            <TableHead>Grade Points</TableHead>
                            <TableHead>Remarks</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {courses.map((course) => (
                            <TableRow key={course.courseCode}>
                                <TableCell >{course.courseCode}</TableCell>
                                <TableCell>{course.creditHours}</TableCell>
                                <TableCell>{course.courseName}</TableCell>
                                <TableCell>{course.type}</TableCell>
                                <TableCell>{course.grade}</TableCell>
                                <TableCell>{course.gradePoints}</TableCell>
                                <TableCell>{course.remarks}</TableCell>
                                <TableCell>{course.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="sheet-container">
                <SheetHead title="Spring 2025" />
                <Table className={"border-2 border-[#cdd1fd] rounded-2xl "}>
                    <TableHeader>
                        <TableRow className={"bg-[#cdd1fd]"}>
                            <TableHead className="w-[100px]">Course Code</TableHead>
                            <TableHead>Credit Hours</TableHead>
                            <TableHead>Course Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Grade</TableHead>
                            <TableHead>Grade Points</TableHead>
                            <TableHead>Remarks</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {courses2.map((course) => (
                            <TableRow key={course.courseCode}>
                                <TableCell>{course.courseCode}</TableCell>
                                <TableCell>{course.creditHours}</TableCell>
                                <TableCell>{course.courseName}</TableCell>
                                <TableCell>{course.type}</TableCell>
                                <TableCell>{course.grade}</TableCell>
                                <TableCell>{course.gradePoints}</TableCell>
                                <TableCell>{course.remarks}</TableCell>
                                <TableCell>{course.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default page