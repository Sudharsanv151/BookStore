import { useLocation } from 'react-router-dom';
import { supabaseimg } from '../App';

const About = ({OnCategory}) => {
  
  const location = useLocation();
  const hidebar = location.pathname === '/about';
  const handleChange = (event) => {
    const value = event.target.getAttribute('data-value');
    console.log(value); 
    if (typeof OnCategory === 'function') {
        OnCategory(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        console.error("OnCategory is not a function.");
    }
  };
  return (
    <>
      <div>
        <h1 className='text-center font-5 text-4xl mb-3 shadow-lg bg-slate-800 text-white h-14 p-2 w-full top-0'> About Bookart</h1>
      <div className="bg-gray-50 pb-32 pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <img
                className="rounded-lg shadow-lg object-cover h-80 w-80 transition duration-500 hover:scale-105"
                src={`${supabaseimg}/assets/img/others/about.jpg`}
                alt="Bookstore"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl leading-6 font-medium text-gray-900 pb-1 font-1">Our mission</h3>
              <p className='text-justify w-auto font-3'>
                We have the best Collection of top rated books in different genres.
                Our books are carefully selected to ensure that you get the best reading experience. <br />
                We offer a reasonable price as well as better user experience. <br />
                <i>Our Popular Genres:</i> </p> <br />
                <ul className="space-y-1 list-disc pl-7 text-slate-800 pb-2 text-md">
                  <li>Contemporary Fiction</li>
                  <li value="Classic Literature">Classic Literature</li>
                  <li value="Mystery/Thriller">Mystery/Thriller</li>
                  <li value="Science Fiction/Fantasy">Science Fiction/Fantasy</li>
                  <li  value="Non-fiction">Non-fiction</li>
                </ul>
                <b>“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.” </b>- <i>George R.R. Martin</i>
             

            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div>
              <div className="text-3xl font-bold font-5 py-16">
                <h1>Bookart </h1>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold ">Popular Categories</h3>
              <ul className="space-y-2  text-white pb-2 text-md list-none mt-4" onClick={handleChange}>
                <li data-value="Contemporary Fiction">Contemporary Fiction</li>
                <li data-value="Classic Literature">Classic Literature</li>
                <li data-value="Mystery/Thriller">Mystery/Thriller</li>
                <li data-value="Science Fiction/Fantasy">Science Fiction/Fantasy</li>
                <li data-value="Non-fiction">Non-fiction</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Our Best Picks</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="" className="hover:underline">The Overstory</a></li>
                <li><a href="" className="hover:underline">Beloved</a></li>
                <li><a href="" className="hover:underline">Dune</a></li>
                <li><a href="" className="hover:underline">Educated</a></li>
                <li><a href="/" className="hover:underline">Big Little Lies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="/home" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/login" className="hover:underline">Login</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <ul className="mt-4 space-y-2">
                <li><b>Email: </b><span className='text-sm'>Bookart@gmail.com</span></li>
                <li><b>Phone:</b><span className='text-sm'>(+91) 9876543210</span></li>
                <li><b>Address: </b><span className='text-sm'>Abc Street, Coimbatore</span></li>
              </ul>
            </div>

          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
             {new Date().getFullYear()} BookArt. All rights reserved.
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

export default About;
