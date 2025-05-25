const Layout = ({ Books }) => {
  return (
    <div className='flex flex-col bg-slate-700 text-white p-3 rounded-2xl list-none h-full'>
      {Books.map((data, index) => (
        <div key={index} className='mt-2'>
          <img 
            src={data.photo}  
            alt={data.name} 
            className='rounded-md h-32 w-32 object-cover'
          />
          <li>{data.author}</li>
          <li>{`Price: $${data.price}`}</li> 
          <li>{data.description}</li>      
        </div>
      ))}
    </div>
  );
};

export default Layout;
