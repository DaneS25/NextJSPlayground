import Navbar from './components/navbar';
import Image from 'next/image';

function About() {
    return <div>
        <Navbar/>
        <p>This is the About page</p>
            <div class="gif">
                <Image src="https://media1.giphy.com/media/6fmLmrAHoEz0k/giphy.gif" height={300} width={300}/>
            </div>
        </div>
  }
  
  export default About