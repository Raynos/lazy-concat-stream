var proxy = require("proxy-stream")
    , reemit = require("re-emitter").reemit
    , WriteStream = require("write-stream")

    , slice = Array.prototype.slice

module.exports = concat

function concat(source) {
    var stream = proxy(source, transformation)
        , flowing = false
        , other = slice.call(arguments, 1)

    other.forEach(emitError, stream)

    return stream

    function transformation(chunk, write, end) {
        var counter = 0
        write(chunk)
        if (!flowing) {
            counter = other.length
            other.forEach(pipe)
            flowing = true
        } else {
           end()
        }

        function pipe(stream) {
            stream.pipe(WriteStream(write, decrement))
        }

        function decrement() {
            counter--
            if (counter === 0) {
                end()
            }
        }
    }
}

function emitError(source) {
    reemit(source, this, ["error"])
}
