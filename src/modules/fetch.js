import axios from 'axios';
const baseUrl = `https://api.github.com/`;
// https://api.github.com/users/KalimaPz/repos
const user = `users/KalimaPz`;
let fetch = axios.create({ baseURL: baseUrl, timeout: 5000 })
const getProfile = async () => {
    try {
        let res = await fetch.get(user)
        return {
            msg: true,
            data: res.data.avatar_url
        }
    } catch (err) {

        return {
            msg: false,
            data: null
        };
    }

}

const getRepos = async () => {
    try {
        let res = await fetch.get(`${user}/repos`)

        return {
            msg: true,
            data: res.data
        }
    } catch (err) {
        return {
            msg: false,
            data: []
        }

    }
}
export { getProfile, getRepos };
