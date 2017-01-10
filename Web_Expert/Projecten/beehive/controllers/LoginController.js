/**
 * Created by Bram on 9/12/2016.
 */
myApp.controller("loginController",loginController);
registerController.$inject = ['userFactory','$location'];
function loginController(userFactory, $location) {
    var vm = this;
    vm.login = function(user){
      var password = SHA256(user.password);
      var username = user.username;
      userFactory.login(username, password).success(function(data,status,header,config){
              sessionStorage.permissions_level = data.role.permissions_level;
              console.log(data);

              sessionStorage.username = data.username;
              sessionStorage.password = data.password;
              $location.path("/dashboard");
              location.reload();

        }).error(function(data,status,header,config){
          vm.error = 1;
          vm.errorMessage = "De gebruikersnaam of het wachtwoord is incorrect";
      });
    };
    vm.logout =  function(){
      sessionStorage.clear();
        window.location.replace("index.html#/")
        location.reload();
    };
    if(sessionStorage.getItem("username") != null){
        vm.isLogin = true;
        vm.username = sessionStorage.getItem("username");
    }else{
        vm.isLogin = false;
    }
}