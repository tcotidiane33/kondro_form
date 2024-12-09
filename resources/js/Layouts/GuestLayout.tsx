import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="items-center bg-blue-100 p-0 sm:justify-center  rounded-lg">
            <div className='flex p-0 m-0 items-center justify-center'>
                {/* <Link href="/" className="">
                    <ApplicationLogo className="h-60 w-60 fill-current text-gray-100" />
                </Link> */}
            </div>

            <div className="mt-0 w-full overflow-hidden bg-transparent px-12 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
