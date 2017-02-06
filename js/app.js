angular.module('toDoApp', []);
var model = {
    user: "Adam"
};
angular.module('toDoApp')
    .run(function($http) {
        $http.get("todo.json")
            .success(function(data) {
                model.items = data;
            });
    });

angular.module('toDoApp')
    .filter("checkedItems", function() {
        return function(items, showComplete) {
            var resultArr = [];
            angular.forEach(items, function(item) {
                if (item.done == false || showComplete == true) {
                    resultArr.push(item);
                }
            });
            return resultArr;
        }
    });
