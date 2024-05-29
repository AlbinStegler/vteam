const url = {
    getUrl: () => {
        if (process.env.NODE_ENV === 'development') {
            return 'http://localhost:1337'
        } else {
            return 'https://16.16.162.113.nip.io'
        }
    }
}

export default url;