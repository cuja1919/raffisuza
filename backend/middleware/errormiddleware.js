const errorHandler = (err,  req, res, next) => {
    const statuscode = res.statuscode ? res.statuscode : 500

    res.status (statuscode)

res.json({
    massage: err.massage,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
})

}

module.exports ={
    errorHandler,
}