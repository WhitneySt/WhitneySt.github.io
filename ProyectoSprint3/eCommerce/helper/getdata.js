async function getData(url){
    const resp = await fetch(url)
    const data = await resp.json()
    return data
}

export default getData;