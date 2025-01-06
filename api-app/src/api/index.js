export const getPost = async() => {
   const response = await fetch('https://dummyjson.com/products',{
        method:"GET",

    });
    return await response.json();
}