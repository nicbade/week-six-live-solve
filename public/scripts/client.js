var nameApp = angular.module('nameApp', []);

nameApp.controller('MessageController', [function() {
    console.log('nameApp controller loaded');

    var self = this;
    self.newMessage = { list: [] };

}]);