import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] });
import React from 'react';
import Banner from './common/banner';

export default function Home() {
  return (
    <React.Fragment> 
        <Banner/>
    <section>     
      <div className='container'>
       <h1>Welcome to Next Js Tutorial</h1>
       <p>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </p>
      </div>     
    </section>
    </React.Fragment>
  )
}
