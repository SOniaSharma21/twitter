
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo-box">
        <img src="./logo.png" alt="logo" className='logo'></img>   
        <h2>Sign in twitter</h2>   
        <button>
          <img src="./google.png"   alt="logo" ></img> Sign in with Google</button>  
      
      <button>
          <img src="./MAC.png"   alt="logo" ></img> Sign in with Apple</button>  
          <hr></hr>
          <span><b>Or</b></span>
          <form>
            <input type="text" placeholder='phone email or username'/>
            <button>Next</button>
            
          </form>
          <button>Forgot Password</button>
          <p>Don't have account<a href='/'>Sign Up</a></p>
      </div>
    </div>
    
  );
}

export default App;
