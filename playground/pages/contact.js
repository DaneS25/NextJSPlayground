import Navbar from './components/navbar';
import Image from 'next/image';

function Contact() {
    return <div>
        <Navbar/>
        <p>This is the Contact page</p>
            <div class="gif">
                <Image src="https://media1.giphy.com/media/VLvKl9ufS5CRW/giphy.gif" height={300} width={300}/>
            </div>
        </div>
  }
  
  export default Contact