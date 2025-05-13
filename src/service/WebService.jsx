import axios from "axios";

class WebService
{
    getAPICall(url,token)
    {
        var result = axios.get(url)
        return result;
    }
    getAPICallWithId(url,data)
    {
        var result = axios.get(url , data)
        return result;
    }

   
}
export default new WebService()