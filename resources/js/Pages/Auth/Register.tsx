import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import RegisterStudent from './RegisterStudent';
import RegisterInstructor from './RegisterInstructor';
import '../../assets/styles/GlassEffects.css';

export default function Register() {
    const [role, setRole] = useState('student');

    return (

        <div className="flex items-center justify-center min-h-screen">

            <div className="blurred p-6 m-5 bg-transparent rounded-lg shadow-lg">
                <Link href="/" className="">
                    <ApplicationLogo className="h-60 w-60 fill-current text-gray-100 shadow-lg " />
                </Link>
                <div className="flex justify-center">
                    <button
                        className={`px-6 py-3 mx-2 rounded-lg transition-colors duration-300 ${role === 'student' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setRole('student')}
                    >
                        Student
                    </button>
                    <button
                        className={`px-6 py-3 mx-2 rounded-lg transition-colors duration-300 ${role === 'instructor' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setRole('instructor')}
                    >
                        Instructor
                    </button>
                </div>
            </div>
            <div className="blurred-box p-6 bg-transparent rounded-lg shadow-lg">

                <div className="mt-2">
                    {role === 'student' ? <RegisterStudent /> : <RegisterInstructor />}
                </div>
            </div>


        </div>
    );
}
