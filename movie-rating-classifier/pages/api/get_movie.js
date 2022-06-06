import movies from '../../utils/movies'
const getRandomMovie = () => movies[Math.floor(Math.random() * movies.length)]


module.exports = async (req, res) => {
    res.send(getRandomMovie())
}
