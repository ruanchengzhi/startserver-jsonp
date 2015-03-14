/* ================================================================
 * startserver by xdf(xudafeng[at]126.com)
 *
 * first created at : Mon Jun 02 2014 20:15:51 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2014 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var url = require('url');
var path = require('path');
var qs = require('querystring');

module.exports = function(req, res) {
  var _url = this.req.url;
  var u = url.parse(_url);
  var basename = path.basename(_url, path.extname(_url));
  var pathname = u.pathname;
  var extname = path.extname(pathname);
  var query = u.query;
  query = qs.parse(query);

  if(extname === '.json' && query.callback) {
    this.body = query['callback'] + '(' + this.body + ')';
  }
}
