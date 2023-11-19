const axios = require('axios');

const getCosmeticPath = (path) => path
    .replace(/^FortniteGame\/Content/, '/Game')
    .replace(/FortniteGame\/Plugins\/GameFeatures\/BRCosmetics\/Content/, '/BRCosmetics')
    .split('/')
    .slice(0, -1)
    .join('/');

const fetchCosmetic = async (name, type) => {
    try {
        const {
            data
        } = await axios(`https://fortnite-api.com/v2/cosmetics/br/search?name=${encodeURI(name)}&type=${type}`);
        return data.data;
    } catch (err) {
        if (!(err instanceof axios.AxiosError) || err.status !== 404) {
            throw err;
        }

        return undefined;
    }
};

module.exports = { getCosmeticPath, fetchCosmetic };