export const getData = async(url)=>{
    try{
        const resp = await fetch(url);
        const data = await resp.json();
        return data?.results
    }catch(error){
        Swal.fire('error en la ejecución', error)
    }
}