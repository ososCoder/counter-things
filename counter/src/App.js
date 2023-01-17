import './App.css';
import { useState } from 'react';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <h1 className='text-6xl text-center py-6 font-eater'>Counter Things</h1>
      </header>
      <main className='grow'>
        <h2 className='font-montserrat text-center text-2xl py-3'>
          Wanna count things?
        </h2>
        <Counter />
      </main>
      <footer className='flex justify-center items-center gap-3 py-4 bg-black'>
        <p className='text-xl text-center text-slate-50 font-montserrat'>
          Made by ososCoder
        </p>
        <Link href='https://github.com/ososCoder' src={github} alt='github' />
        <Link
          href='https://www.linkedin.com/in/oscar-ousinde/'
          src={linkedin}
          alt='linkedin'
        />
      </footer>
    </div>
  );
}

//Componente enlaces footer
const Link = ({ href, src, alt }) => {
  return (
    <a href={href} target='_blank' rel='noreferrer'>
      <img src={src} alt={alt} className='w-8'></img>
    </a>
  );
};

//Componente Counter
const Counter = () => {
  //State
  let [count, setCount] = useState(0);

  //counterDisplay
  const counterDisplay = () => {
    setCount(count + 1);
  };

  //resetCounter
  const resetCounter = () => {
    setCount((count = 0));
  };

  return (
    <section className='h-[30rem] flex flex-col justify-around items-center'>
      <p className='font-eater text-9xl'>{count}</p>
      <div className='flex flex-col gap-8'>
        <button
          className='py-4 px-6 text-5xl bg-sky-600 text-sky-300 rounded-lg font-montserrat font-medium shadow-md cursor-pointer uppercase active:bg-sky-700 transition duration-150 ease-in-out active:scale-90'
          onClick={counterDisplay}
        >
          Count
        </button>
        <button
          className='py-4 px-6 text-5xl bg-rose-400 text-rose-800 rounded-lg font-montserrat font-medium shadow-md cursor-pointer uppercase active:bg-rose-500 transition duration-150 ease-in-out active:scale-90'
          onClick={resetCounter}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default App;
