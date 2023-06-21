import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import FormClima from './components/FormClima';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header className='bg-danger p-2 mb-2 text-center'>
        <h1 className='text-light'>Climapp <i className="bi bi-cloud-sun-fill"></i></h1>
      </header>
      <main className="container">
        <FormClima></FormClima>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
