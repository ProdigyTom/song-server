const fs = require('fs');

module.exports = {
    1: {
        data: fs.readFileSync('./tabData/1.txt', 'utf8'),
    }
}
