export const getWord = async() => {
        const url = 'https://thatwordleapi.azurewebsites.net/get/'
        const resp = await fetch(url)
        const {Response} = await resp.json()
        return Response.toUpperCase()
    }

export const obtenerPalabra = async(word) => {
        const url = `https://api.datamuse.com/words?ml=${word}&max=1&v=es&sp=?????`
        const resp = await fetch(url)
        const {Response} = await resp.json()
        return Response.toUpperCase()
    }
