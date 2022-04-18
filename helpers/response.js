const messages = {
    '200': 'Sukses',
    '201': 'Sukses menyimpan data'
}

function successResponse(
    res,
    code,
    data,
    meta = {}
) {
    res.status(code).json({
        data: data,
        meta: {
            code: code,
            message: messages[code.toString()],
            ...meta
        }
    })
}

module.exports = {
    successResponse
}