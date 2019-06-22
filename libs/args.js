const args = {
    get : (arg) => {
        const _args = process.argv.slice(2).filter( _arg => {
            const pair = _arg.split('=');
            if (pair[0] == arg && pair.length===2) return true
        })
        if (_args.length == 0) throw new Error('Argument not found');
        return _args.pop().split('=').pop();
    }
}

module.exports = args;