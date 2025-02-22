import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import ProductsCart from './ProductsCart';
//import Cart from './ProductsCart';
import ProductCard from './productCart';

const App = () => {
  const [products,setProducts]=useState([]);
  const [error,setError]=useState(false)
  const [loading, setisLoading]=useState(false);
  const [search,setSearch]=useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);
   // Debounce search input
   useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // 500ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [search]);
  useEffect(()=>{
    const controller=new AbortController
    ;(async()=>{
      try {
        setisLoading(true)
       setError(false);
        const response=await axios.get('/api/products?search='+search,{
          signal:controller.signal
        })
        console.log(response.data)
        setProducts(response.data)
        setisLoading(false)
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Request canceled',error.message)
          return
        }
        setError(true)
        
      }finally{
        setisLoading(false)
      }
    })()
    //cleanup
    return()=>{
      controller.abort()
    }
  },[debouncedSearch])
  
  // if(error){
  //   return <p>Something went wrong</p>
  // }
  // if(loading){
  //   return <p>Loading...</p>
  // }
  return (
    <>
    <div className=''>
      <h1 className='text-red-700 text-3xl flex justify-center'>Api handling tutorial</h1>
      <div className='flex flex-col items-center justify-center '>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='border border-gray-500 m-6'/>
        {loading && <p>Loading ...</p>}
      {error ? <p>Something went wrong</p>:<p className=''>Number of products : {products.length}</p>}
      </div>  
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4'>
        {products.map((product)=>(
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
     
    </div>
   </>
  )
}

export default App
