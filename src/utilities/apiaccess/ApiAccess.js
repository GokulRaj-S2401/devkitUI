const axios = require('axios').default;

export default class Networking {

    static PostAxios(url, data = null) {

        var config = {
            method: 'Post',
            url: url,
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json'
            },
            data: data ? JSON.stringify(data) : ''
        };

        return axios(config)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    }

    static GetAxios(url, data = null) {

        const params = data ? new URLSearchParams(data).toString() : '';
        url = `${url}?${params}`;

        var config = {
            method: 'Get',
            url: url,
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json'
            }
        };

        return axios(config)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    }
}