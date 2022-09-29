import Navbar from './components/navbar';
import Image from 'next/image';

export default function Home() {
  return <div>
      <Navbar/>
      <div class="home-page">
      <div class="gif">
        <Image src="https://media0.giphy.com/media/3o7aD7qEvVKEdCoOtO/giphy.gif" height={300} width={300}/>
      </div>
        <div class="login-box">
          <h2>Login</h2>
          <form>
            <div class='user-box'>
              <input type="text" name="" required="" placeholder='username'/>
            </div>
            <div class='user-box'>
            <input type="password" name="" required="" placeholder='password'/>
            </div>
            <div class='button-form'>
              <a id="submit" href="#">submit</a>
              <div id="register">
                Don't have an account?
                <a href='#'>Register</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
}