'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');
var cache = require('*/cartridge/scripts/middleware/cache');
var Logger = require('dw/system/Logger');


server.post('Show',
    function (req, res, next) {
        var LinkedHashMap = require('dw/util/LinkedHashMap');
        var File = require('dw/io/File');
        var filename: String;
        var params: HttpParameterMap = request.httpParameterMap;
        var files: LinkedHashMap = new LinkedHashMap(); // callback function
        var closure: Object = function (field, ct, oname) {
            filename = oname;
            return new File(File.IMPEX + "/" + oname);
        };
        files = params.processMultipart(closure);
        res.render('SFRAResultTemplate', {
            file: filename
        });
        next();

    });
module.exports = server.exports();





















// server.post('Show', cache.applyDefaultCache,
//     function (req, res, next) {
//         var param = req.httpParameterMap;
//         var file = req.form.file;



//         res.render('SFRAResultTemplate', {
//             file: file
//         });
//         next();
//     });

// module.exports = server.exports();