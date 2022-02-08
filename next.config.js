module.exports = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'https://next-js-11-basic-authentication-example.vercel.app/' // development api
            : 'https://next-js-11-basic-authentication-example.vercel.app/' // production api
    }
}
