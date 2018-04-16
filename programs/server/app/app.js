var require = meteorInstall({"lib":{"lib.js":function(require){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/lib.js                                                        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
_ = require('lodash');
faker = require('faker');
Test = new Mongo.Collection('test');
///////////////////////////////////////////////////////////////////////

}},"server":{"main.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Test.remove({});

const test = _.times(100, n => ({
  title: faker.lorem.sentences()
}));

Test.batchInsert(test);
Meteor.publish(null, function () {
  return Test.find();
});
Meteor.methods({
  test() {
    return Test.find().fetch();
  }

});
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./lib/lib.js");
require("./server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2xpYi5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsiXyIsInJlcXVpcmUiLCJmYWtlciIsIlRlc3QiLCJNb25nbyIsIkNvbGxlY3Rpb24iLCJyZW1vdmUiLCJ0ZXN0IiwidGltZXMiLCJuIiwidGl0bGUiLCJsb3JlbSIsInNlbnRlbmNlcyIsImJhdGNoSW5zZXJ0IiwiTWV0ZW9yIiwicHVibGlzaCIsImZpbmQiLCJtZXRob2RzIiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLElBQUlDLFFBQVEsUUFBUixDQUFKO0FBQ0FDLFFBQVFELFFBQVEsT0FBUixDQUFSO0FBRUFFLE9BQU8sSUFBSUMsTUFBTUMsVUFBVixDQUFxQixNQUFyQixDQUFQLEM7Ozs7Ozs7Ozs7O0FDSEFGLEtBQUtHLE1BQUwsQ0FBWSxFQUFaOztBQUVBLE1BQU1DLE9BQU9QLEVBQUVRLEtBQUYsQ0FBUSxHQUFSLEVBQWFDLE1BQU07QUFDOUJDLFNBQU9SLE1BQU1TLEtBQU4sQ0FBWUMsU0FBWjtBQUR1QixDQUFOLENBQWIsQ0FBYjs7QUFJQVQsS0FBS1UsV0FBTCxDQUFpQk4sSUFBakI7QUFFQU8sT0FBT0MsT0FBUCxDQUFlLElBQWYsRUFBcUIsWUFBWTtBQUMvQixTQUFPWixLQUFLYSxJQUFMLEVBQVA7QUFDRCxDQUZEO0FBSUFGLE9BQU9HLE9BQVAsQ0FBZTtBQUNiVixTQUFPO0FBQ0wsV0FBT0osS0FBS2EsSUFBTCxHQUFZRSxLQUFaLEVBQVA7QUFDRDs7QUFIWSxDQUFmLEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIl8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuZmFrZXIgPSByZXF1aXJlKCdmYWtlcicpXG5cblRlc3QgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigndGVzdCcpXG4iLCJUZXN0LnJlbW92ZSh7fSlcblxuY29uc3QgdGVzdCA9IF8udGltZXMoMTAwLCBuID0+ICh7XG4gIHRpdGxlOiBmYWtlci5sb3JlbS5zZW50ZW5jZXMoKVxufSkpXG5cblRlc3QuYmF0Y2hJbnNlcnQodGVzdClcblxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gVGVzdC5maW5kKClcbn0pXG5cbk1ldGVvci5tZXRob2RzKHtcbiAgdGVzdCgpIHtcbiAgICByZXR1cm4gVGVzdC5maW5kKCkuZmV0Y2goKVxuICB9XG59KVxuIl19
