import { ShieldAlert } from 'lucide-react';

const ErrorPage = () => {
    return (
    <section className='h-screen flex items-center justify-center w-full animated-background bg-gradient-to-b from-green-200 via-green-200 to-blue-200'>
        <div className='flex flex-col items-center justify-center bg-white p-20 rounded-2xl shadow-md gap-8'>
            <h1 className='text-3xl font-bold'>I'm sorry</h1>
            <p className='text-lg'>It seems like you've stumbled upon a page that doesn't exist (yet).</p>
            <ShieldAlert size={128} fill='yellow' />
        </div>
    </section>
    );
}

export default ErrorPage;
