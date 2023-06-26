import axios from "axios";

const searchImages = async (term) => {
  const response =  await axios.get('https://api.unsplash.com/search/photos', {
        headers : {
            Authorization: 'Client-ID 1EoJsaSTKj8ikZyL259OJ7tEfZIPtk1wMlmxE7xNjIE'

        },
        params : {
            query: term

        }
    })

    return response.data.results ;
}

export default searchImages ;