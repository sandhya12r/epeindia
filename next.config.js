/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                hostname:"epeindia.in"
            }
        ]
    }
}

module.exports = nextConfig
