


var Nav=angular.module('dada',[]);

Nav.controller('NavController',['$scope',function($scope){
    $scope.Navs=[
        {link:'#/',text:'今日一刻',icon: 'icon-home'},
        {link:'#/older',text:'往期内容',icon: 'icon-file-empty'},
        {link:'#/author',text:'热门作者',icon: 'icon-pencil'},
        {link:'#/categeory',text:'栏目浏览',icon: 'icon-menu'},
        {link:'#/favourite',text:'我的喜欢',icon: 'icon-heart'},
        {link:'#/setting',text:'设置',icon: 'icon-cog'}
    ]
    alert(1);
}]) 