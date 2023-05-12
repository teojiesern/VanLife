export async function getVans(){
    const res = await fetch("/api/vans")
    if(!res.ok){
        throw {
            message: "An Error Has Occured!",
            statusText: res.statusText,
            statusCode: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(){
    const res = await fetch("/api/host/vans")
    if(!res.ok){
        throw{
            message: "An Error Has Occured in host vans",
            statusText: res.statusText,
            statusCode: res.status
        }
    }
    const data = await res.json()
    return data.vans
}