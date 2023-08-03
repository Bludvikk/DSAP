const isProduction = process.env.NODE_ENV === 'production';


const domain = 'dsap.vercel.app'
const local = 'localhost:3000'
const home = isProduction ? domain : local

const url = {
    homeWithoutApp: home,
    home: `//${home}`,
    api: `${isProduction ? 'https://' : 'http://'}${home}`,
    serverApi: `${isProduction ? 'https://' : 'http://'}${home}`,
}

export default url