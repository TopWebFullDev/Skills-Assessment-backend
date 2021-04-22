
exports.get_random_number = (req, res, next) => {
    const random_number = Math.round(Math.random() * 9 + 1)
    res.send(random_number.toString())
}