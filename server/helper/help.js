const moment = require('moment')

module.exports = {
    formateDate: function(date, format){
        return moment(date).format(format)
    }
}