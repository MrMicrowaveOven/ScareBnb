var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var LocationImageConstants = require('../constants/image_constants');
var LocationImageStore = new Store(AppDispatcher);

var _images = {};

var selImage;

LocationImageStore.all = function () {
  var keys = Object.keys(_images);
  var images = [];
  for (var i = 0; i < keys.length; i++) {
    images.push(_images[keys[i]]);
  }
  return images;
};

LocationImageStore.find = function(id) {
  return _images[id];
};

var resetImages = function(images){
  _images = {};
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    _images[image.id] = image;
  }
};

LocationImageStore.setSelectedImage = function(image){
  selImage = image;
};

LocationImageStore.selectedImage = function(){
  return selImage;
};

LocationImageStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case LocationImageConstants.IMAGES_RECEIVED:
      var result = resetImages(payload.images);
      LocationImageStore.__emitChange();
      break;
    // case LocationConstants.LOCATION_RECEIVED:
    //   LocationStore.setSelectedLocation(payload.image);
    //   LocationStore.__emitChange();
    //   break;
    // case LocationConstants.NEW_LOCATION_RECEIVED:

      // debugger;

      // break;
  }
};



 window.LocationImageStore = LocationImageStore;

module.exports = LocationImageStore;
