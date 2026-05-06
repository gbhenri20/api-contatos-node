
const middlewareError = (req , res) => {
    res.status(404).json({
        status: 'error',
        message: 'rota não encontrada'
    });

};
module.exports = middlewareError;
