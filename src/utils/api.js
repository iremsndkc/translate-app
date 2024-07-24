import axios from "axios";
export default axios.create({
    baseURL:"https://text-translator2.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': '9691cc5db6mshc21dc434e16cfdep1313a3jsn4ac5cdbc02f3',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
      },
});