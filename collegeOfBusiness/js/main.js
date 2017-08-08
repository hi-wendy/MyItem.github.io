var app = angular.module('myApp', ['ui.router']);
/*路由部分*/
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/home');
    $stateProvider
        .state("home", {
            url: "/home",
            /*设置地址栏的地址*/
            views: {
                "main": {
                    templateUrl: "html/home.html",
                    controller: 'home'
                },
                "header": {
                    templateUrl: "html/header.html",
                    controller: 'header'
                },
                "footer": {
                    templateUrl: "html/footer.html",
                    controller: 'footer'
                }
            }
        }).state("main", {
            url: "/main",
            views: {
                "main": {
                    templateUrl: "html/main.html",
                    controller: "main"
                },
                "header": {
                    templateUrl: "html/header.html",
                    controller: 'header'
                },
                "footer": {
                    templateUrl: "html/footer.html",
                    controller: 'footer'
                }
            }
        }).state("main.schoolProfile", {
            url: "/schoolProfile",
            views: {
                "mainView": { /*学院简介*/
                    templateUrl: "html/detail.html",
                    controller: "schoolProfile"
                }
            }
        }).state("main.leadership", {
            url: "/leadership",
            views: {
                "mainView": { /*学院领导*/
                    templateUrl: "html/detail.html",
                    controller: "leadership"
                }
            }
        }).state("main.organization", {
            url: "/organization",
            views: {
                "mainView": { /*组织机构*/
                    templateUrl: "html/listOfText.html",
                    controller: "organization"
                }
            }
        }).state("main.organizationD", {
            url: "/organizationD",
            views: {
                "mainView": { /*组织机构-详情*/
                    templateUrl: "html/detail.html",
                    controller: "organizationD"
                }
            }
        }).state("main.teachers", {
            url: "/teachers",
            views: {
                "mainView": { /*师资队伍*/
                    templateUrl: "html/detail.html",
                    controller: "teachers"
                }
            }
        }).state("main.governance", {
            url: "/governance",
            views: {
                "mainView": { /*治理结构*/
                    templateUrl: "html/detail.html",
                    controller: "governance"
                }
            }
        }).state("main.institutional", {
            url: "/institutional",
            views: {
                "mainView": { /*制度规范*/
                    templateUrl: "html/listOfText.html",
                    controller: "institutional"
                }
            }
        }).state("main.institutionalD", {
            url: "/institutionalD",
            views: {
                "mainView": { /*制度规范-详情*/
                    templateUrl: "html/detail.html",
                    controller: "institutionalD"
                }
            }
        }).state("main.plan", {
            url: "/plan",
            views: {
                "mainView": { /*计划总结*/
                    templateUrl: "html/listOfText.html",
                    controller: "plan"
                }
            }
        }).state("main.planD", {
            url: "/planD",
            views: {
                "mainView": { /*计划总结*/
                    templateUrl: "html/detail.html",
                    controller: "planD"
                }
            }
        }).state("main.organizationP", {
            url: "/organizationP",
            views: {
                "mainView": { /*组织机构*/
                    templateUrl: "html/detail.html",
                    controller: "organizationP"
                }
            }
        }).state("main.institutionP", {
            url: "/institutionP",
            views: {
                "mainView": { /*党务制度*/
                    templateUrl: "html/listOfText.html",
                    controller: "institutionP"
                }
            }
        }).state("main.institutionPD", {
            url: "/institutionPD",
            views: {
                "mainView": { /*党务制度-详情*/
                    templateUrl: "html/detail.html",
                    controller: "institutionPD"
                }
            }
        }).state("main.activityP", {
            url: "/activityP",
            views: {
                "mainView": { /*党建活动*/
                    templateUrl: "html/listOfText.html",
                    controller: "activityP"
                }
            }
        }).state("main.activityPD", {
            url: "/activityPD",
            views: {
                "mainView": { /*党建活动-详情*/
                    templateUrl: "html/detail.html",
                    controller: "activityPD"
                }
            }
        }).state("main.memberP", {
            url: "/memberP",
            views: {
                "mainView": { /*党员风采*/
                    templateUrl: "html/listOfText.html",
                    controller: "memberP"
                }
            }
        }).state("main.memberPD", {
            url: "/memberPD",
            views: {
                "mainView": { /*党员风采-详情*/
                    templateUrl: "html/detail.html",
                    controller: "memberPD"
                }
            }
        }).state("main.notice", {
            url: "/notice",
            views: {
                "mainView": { /*通知公告*/
                    templateUrl: "html/listOfText.html",
                    controller: "notice"
                }
            }
        }).state("main.noticeD", {
            url: "/noticeD",
            views: {
                "mainView": { /*通知公告-详情*/
                    templateUrl: "html/detail.html",
                    controller: "noticeD"
                }
            }
        }).state("main.collegeFile", {
            url: "/collegeFile",
            views: {
                "mainView": { /*学院文件*/
                    templateUrl: "html/listOfText.html",
                    controller: "collegeFile"
                }
            }
        }).state("main.collegeFileD", {
            url: "/collegeFileD",
            views: {
                "mainView": { /*学院文件-详情*/
                    templateUrl: "html/detail.html",
                    controller: "collegeFileD"
                }
            }
        }).state("main.administrative", {
            url: "/administrative",
            views: {
                "mainView": { /*行政制度*/
                    templateUrl: "html/listOfText.html",
                    controller: "administrative"
                }
            }
        }).state("main.administrativeD", {
            url: "/administrativeD",
            views: {
                "mainView": { /*行政制度-详情*/
                    templateUrl: "html/detail.html",
                    controller: "administrativeD"
                }
            }
        }).state("main.recruitment", {
            url: "/recruitment",
            views: {
                "mainView": { /*人才招聘*/
                    templateUrl: "html/listOfText.html",
                    controller: "recruitment"
                }
            }
        }).state("main.recruitmentD", {
            url: "/recruitmentD",
            views: {
                "mainView": { /*人才招聘-详情*/
                    templateUrl: "html/detail.html",
                    controller: "recruitmentD"
                }
            }
        }).state("main.teacherTraining", {
            url: "/teacherTraining",
            views: {
                "mainView": { /*师资培养*/
                    templateUrl: "html/listOfText.html",
                    controller: "teacherTraining"
                }
            }
        }).state("main.teacherTrainingD", {
            url: "/teacherTrainingD",
            views: {
                "mainView": { /*师资培养-详情*/
                    templateUrl: "html/detail.html",
                    controller: "teacherTrainingD"
                }
            }
        }).state("main.enDynamic", {
            url: "/enDynamic",
            views: {
                "mainView": { /*创业动态*/
                    templateUrl: "html/listOfText.html",
                    controller: "enDynamic"
                }
            }
        }).state("main.enDynamicD", {
            url: "/enDynamicD",
            views: {
                "mainView": { /*创业动态-详情*/
                    templateUrl: "html/detail.html",
                    controller: "enDynamicD"
                }
            }
        }).state("main.enEvent", {
            url: "/enEvent",
            views: {
                "mainView": { /*创业赛事*/
                    templateUrl: "html/graphicList.html",
                    controller: "enEvent"
                }
            }
        }).state("main.enEventD", {
            url: "/enEventD",
            views: {
                "mainView": { /*创业赛事-详情*/
                    templateUrl: "html/detail.html",
                    controller: "enEventD"
                }
            }
        }).state("main.enResults", {
            url: "/enResults",
            views: {
                "mainView": { /*创业成果*/
                    templateUrl: "html/graphicList.html",
                    controller: "enResults"
                }
            }
        }).state("main.enResultsD", {
            url: "/enResultsD",
            views: {
                "mainView": { /*创业成果-详情*/
                    templateUrl: "html/detail.html",
                    controller: "enResultsD"
                }
            }
        }).state("main.enTeam", {
            url: "/enTeam",
            views: {
                "mainView": { /*创业团队*/
                    templateUrl: "html/graphicList.html",
                    controller: "enTeam"
                }
            }
        }).state("main.enTeamD", {
            url: "/enTeamD",
            views: {
                "mainView": { /*创业团队-详情*/
                    templateUrl: "html/detail.html",
                    controller: "enTeamD"
                }
            }
        }).state("main.enBase", {
            url: "/enBase",
            views: {
                "mainView": { /*创业基地*/
                    templateUrl: "html/detail.html",
                    controller: "enBase"
                }
            }
        }).state("main.teachingNotice", {
            url: "/teachingNotice",
            views: {
                "mainView": { /*教学通知*/
                    templateUrl: "html/listOfText.html",
                    controller: "teachingNotice"
                }
            }
        }).state("main.teachingNoticeD", {
            url: "/teachingNoticeD",
            views: {
                "mainView": { /*教学通知-详情*/
                    templateUrl: "html/detail.html",
                    controller: "teachingNoticeD"
                }
            }
        }).state("main.professional", {
            url: "/professional",
            views: {
                "mainView": { /*专业介绍*/
                    templateUrl: "html/listOfText.html",
                    controller: "professional"
                }
            }
        }).state("main.professionalD", {
            url: "/professionalD",
            views: {
                "mainView": { /*专业介绍-详情*/
                    templateUrl: "html/detail.html",
                    controller: "professionalD"
                }
            }
        }).state("main.trainingPlan", {
            url: "/trainingPlan",
            views: {
                "mainView": { /*培养计划*/
                    templateUrl: "html/listOfText.html",
                    controller: "trainingPlan"
                }
            }
        }).state("main.trainingPlanD", {
            url: "/trainingPlanD",
            views: {
                "mainView": { /*培养计划-详情*/
                    templateUrl: "html/detail.html",
                    controller: "trainingPlanD"
                }
            }
        }).state("main.teachingMAG", {
            url: "/teachingMAG",
            views: {
                "mainView": { /*教学管理*/
                    templateUrl: "html/listOfText.html",
                    controller: "teachingMAG"
                }
            }
        }).state("main.teachingMAGD", {
            url: "/teachingMAGD",
            views: {
                "mainView": { /*教学管理-详情*/
                    templateUrl: "html/detail.html",
                    controller: "teachingMAGD"
                }
            }
        }).state("main.teachingResults", {
            url: "/teachingResults",
            views: {
                "mainView": { /*教学成果*/
                    templateUrl: "html/listOfText.html",
                    controller: "teachingResults"
                }
            }
        }).state("main.teachingResultsD", {
            url: "/teachingResultsD",
            views: {
                "mainView": { /*教学成果-详情*/
                    templateUrl: "html/detail.html",
                    controller: "teachingResultsD"
                }
            }
        }).state("main.studentMAG", {
            url: "/studentMAG",
            views: {
                "mainView": { /*学生管理*/
                    templateUrl: "html/listOfText.html",
                    controller: "studentMAG"
                }
            }
        }).state("main.studentMAGD", {
            url: "/studentMAGD",
            views: {
                "mainView": { /*学生管理-详情*/
                    templateUrl: "html/detail.html",
                    controller: "studentMAGD"
                }
            }
        }).state("main.employment", {
            url: "/employment",
            views: {
                "mainView": { /*学生就业*/
                    templateUrl: "html/listOfText.html",
                    controller: "employment"
                }
            }
        }).state("main.employmentD", {
            url: "/employmentD",
            views: {
                "mainView": { /*学生就业-详情*/
                    templateUrl: "html/detail.html",
                    controller: "employmentD"
                }
            }
        }).state("main.styleOfStudy", {
            url: "/styleOfStudy",
            views: {
                "mainView": { /*学风建设*/
                    templateUrl: "html/listOfText.html",
                    controller: "styleOfStudy"
                }
            }
        }).state("main.styleOfStudyD", {
            url: "/styleOfStudyD",
            views: {
                "mainView": { /*学风建设-详情*/
                    templateUrl: "html/detail.html",
                    controller: "styleOfStudyD"
                }
            }
        }).state("main.classStyle", {
            url: "/classStyle",
            views: {
                "mainView": { /*班级风采*/
                    templateUrl: "html/listOfText.html",
                    controller: "classStyle"
                }
            }
        }).state("main.classStyleD", {
            url: "/classStyleD",
            views: {
                "mainView": { /*班级风采-详情*/
                    templateUrl: "html/detail.html",
                    controller: "classStyleD"
                }
            }
        }).state("main.volunteerService", {
            url: "/volunteerService",
            views: {
                "mainView": { /*志愿服务*/
                    templateUrl: "html/listOfText.html",
                    controller: "volunteerService"
                }
            }
        }).state("main.volunteerServiceD", {
            url: "/volunteerServiceD",
            views: {
                "mainView": { /*志愿服务-详情*/
                    templateUrl: "html/detail.html",
                    controller: "volunteerServiceD"
                }
            }
        }).state("main.enFNList", {
            url: "/enFNList",
            views: {
                "mainView": { /*创友名录*/
                    templateUrl: "html/graphicList.html",
                    controller: "enFNList"
                }
            }
        }).state("main.enFNListD", {
            url: "/enFNListD",
            views: {
                "mainView": { /*创友名录-详情*/
                    templateUrl: "html/detail.html",
                    controller: "enFNListD"
                }
            }
        }).state("main.enFDynamic", {
            url: "/enFDynamic",
            views: {
                "mainView": { /*创友动态*/
                    templateUrl: "html/listOfText.html",
                    controller: "enFDynamic"
                }
            }
        }).state("main.enFDynamicD", {
            url: "/enFDynamicD",
            views: {
                "mainView": { /*创友动态-详情*/
                    templateUrl: "html/detail.html",
                    controller: "enFDynamicD"
                }
            }
        }).state("main.enFED", {
            url: "/enFED",
            views: {
                "mainView": { /*创友风采*/
                    templateUrl: "html/listOfText.html",
                    controller: "enFED"
                }
            }
        }).state("main.enFEDD", {
            url: "/enFEDD",
            views: {
                "mainView": { /*创友风采-详情*/
                    templateUrl: "html/detail.html",
                    controller: "enFEDD"
                }
            }
        }).state("main.cooperation", {
            url: "/cooperation",
            views: {
                "mainView": { /*合作概况*/
                    templateUrl: "html/listOfText.html",
                    controller: "cooperation"
                }
            }
        }).state("main.cooperationD", {
            url: "/cooperationD",
            views: {
                "mainView": { /*合作概况-详情*/
                    templateUrl: "html/detail.html",
                    controller: "cooperationD"
                }
            }
        }).state("main.expertVisits", {
            url: "/expertVisits",
            views: {
                "mainView": { /*专家互访*/
                    templateUrl: "html/listOfText.html",
                    controller: "expertVisits"
                }
            }
        }).state("main.expertVisitsD", {
            url: "/expertVisitsD",
            views: {
                "mainView": { /*专家互访-详情*/
                    templateUrl: "html/detail.html",
                    controller: "expertVisitsD"
                }
            }
        }).state("main.cooperationIRS", {
            url: "/cooperationIRS",
            views: {
                "mainView": { /*合作办学*/
                    templateUrl: "html/listOfText.html",
                    controller: "cooperationIRS"
                }
            }
        }).state("main.cooperationIRSD", {
            url: "/cooperationIRSD",
            views: {
                "mainView": { /*合作办学-详情*/
                    templateUrl: "html/listOfText.html",
                    controller: "cooperationIRSD"
                }
            }
        }).state("main.infoPublic", {
            url: "/infoPublic",
            views: {
                "mainView": { /*信息公开*/
                    templateUrl: "html/detail.html",
                    controller: "infoPublic"
                }
            }
        }).state("main.search", {
            url: "/search",
            views: {
                "mainView": { /*信息公开*/
                    templateUrl: "html/search.html",
                    controller: "search"
                }
            }
        });
}]);
/*主控制器*/
app.controller('Main', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.goto = function(u, w) {
        w ? $location.path(u).search(w) : $location.path(u);
    }
    /*首页*/
    $scope.goHome = function() {
        window.scrollTo(0, 0);
        $location.path("/home");
    }
    $rootScope.rootpath = 'http://119.29.153.250:10002/cyxy-admin';
    /*详情数据加载方法*/
    $rootScope.detail = function(datajson) {
        $rootScope.pnBox = true;
        $rootScope.detaildata = '';
        $rootScope.detailcontent = '';
        $rootScope.predata = '';
        $rootScope.nextdata = '';
        $http({
            method: 'POST',
            url: 'http://119.29.153.250:10001/cyxy-interface/cms/api/article/detail',
            params: { articleId: datajson.currentArticleId }
        }).then(function successCallback(response) {
            $rootScope.detaildata = response.data.data;
            $rootScope.detailcontent = $rootScope.detaildata ? $sce.trustAsHtml($rootScope.detaildata.content) : $sce.trustAsHtml('<p style="text-align:center;">暂无相关内容</p>');
        }, function errorCallback(response) {
            alert('出现错误，请联系管理员。错误信息：' + response);
        });
        /*上一篇*/
        $http({
            method: 'POST',
            url: 'http://119.29.153.250:10001/cyxy-interface/cms/api/article/pre',
            params: datajson
        }).then(function successCallback(response) {
            $rootScope.predata = response.data.data;
        }, function errorCallback(response) {
            alert('出现错误，请联系管理员。错误信息：' + response);
        });

        /*下一篇*/
        $http({
            method: 'POST',
            url: 'http://119.29.153.250:10001/cyxy-interface/cms/api/article/next',
            params: datajson
        }).then(function successCallback(response) {
            $rootScope.nextdata = response.data.data;
        }, function errorCallback(response) {
            alert('出现错误，请联系管理员。错误信息：' + response);
        });
    }

    /*单篇数据加载方法*/
    $rootScope.oneDetail = function(id) {
        $rootScope.pnBox = false;
        $rootScope.detaildata = '';
        $rootScope.detailcontent = '';
        $http({
            method: 'POST',
            url: 'http://119.29.153.250:10001/cyxy-interface/cms/api/article/list',
            params: { columnId: id }
        }).then(function successCallback(response) {
            $rootScope.detaildata = response.data.data.list["0"];
            $rootScope.detailcontent = $rootScope.detaildata ? $sce.trustAsHtml($rootScope.detaildata.content) : $sce.trustAsHtml('<p style="text-align:center;">暂无相关内容</p>');
        }, function errorCallback(response) {
            alert('出现错误，请联系管理员。错误信息：' + response);
        });
    }
    /*文字列表数据加载*/
    $rootScope.listOfText = function(detailpath, id) {
        $rootScope.listdata = '';
        $rootScope.listpage = '';
        $rootScope.detailpath = detailpath;
        $http({
            method: 'POST',
            url: 'http://119.29.153.250:10001/cyxy-interface/cms/api/article/list',
            params: { columnId: id }
        }).then(function successCallback(response) {
            $rootScope.listdata = response.data.data;
            $rootScope.listpage = paging($rootScope.listdata.currentPage, $rootScope.listdata.totalPage);
        }, function errorCallback(response) {
            alert('出现错误，请联系管理员。错误信息：' + response);
        });
    }
}]);
/*头部控制器*/
app.controller('header', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    /*搜索按钮*/
    $scope.searchText = '';
    $scope.msg = '';
    $scope.msgOn = true;
    $scope.searchBtn = function($event, dd) {
        if (dd) { $event.target.blur(); }
        if (!$scope.msgOn) { return; } /*防止多次点击*/
        if ($scope.searchText == '') {
            $scope.msg = '搜索关键字不能为空';
            $scope.msgOn = false;
            $timeout(function() {
                $scope.msg = '';
                $scope.msgOn = true;
            }, 2000);
        } else if ($scope.searchText.length > 20) {
            $scope.msg = '关键字过长不能超过20字';
            $scope.msgOn = false;
            $timeout(function() {
                $scope.msg = '';
                $scope.msgOn = true;
            }, 2000);
        } else {
            $location.path("/main/search").search({ s: $scope.searchText });
            /*搜索内容*/
            $http({
                method: 'POST',
                url: 'http://119.29.153.250:10001/cyxy-interface/cms/api/article/list',
                params: { title: $location.search().s }
            }).then(function successCallback(response) {
                $rootScope.searchdata = response.data.data;
                $rootScope.searchpage = paging($rootScope.searchdata.currentPage, $rootScope.searchdata.totalPage);
            }, function errorCallback(response) {
                alert('出现错误，请联系管理员。错误信息：' + response);
            });
        }
    }

    $scope.keydown = function($event) {
        var keycode = $event.code;
        if (keycode == 'Enter' || keycode == 'NumpadEnter') {
            $scope.searchBtn();
        }
    }
}]);
/*尾部控制器*/
app.controller('footer', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $scope.offtop = false;
    window.onscroll = function() {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        var obj = document.getElementById('goTop');
        obj.className = t > 200 ? 't-show' : 't-hide';

    }
    $scope.goTop = function() {
        //window.scrollTo(0, 0);
        var timer=setInterval(function(){
           var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
           var ispeed=Math.floor(-scrollTop/6);
           if(scrollTop<=0){
               clearInterval(timer);
           }
           document.documentElement.scrollTop=document.body.scrollTop=scrollTop+ispeed;
       },10)
    }
}]);
/*自定义html转纯文本过滤器*/
app.filter('htmlToText',function() {
	return function (data) {
		return data.replace(/<[^<]*>|&nbsp;/g, "");
	};//.replace(/<[^<]*>|&nbsp;/g, "")
});

/*app.directive('repeatFinish',function () {
   return {
    link:function(scope,element,attr){
        console.log(scope.$index);
        if (scope.$last==true) {
            console.log('wan');
            var swiperObj = document.getElementById('swiper-container');
            var mySwiper = new Swiper(swiperObj, {
                pagination: '.pagination', //分页器
                paginationClickable: true,
                grabCursor: true, //是否可以光标抓取
                centeredSlides: true, //幻灯片是否在中间，false时幻灯片会考左
                slidesPerView: 'auto', //幻灯片视图
                autoplay: 3000, //轮播时间
                autoplayDisableOnInteraction: false, //鼠标操作以后是否停止
                loop: true //是否循环
            });
            scope.$eval(attr.repeatFinish)
        }
    }
   } 
});*/
/*主页控制器*/
app.controller('home', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '武汉理工大学-创业学院';
    $rootScope.nav = 0;
    /*主页数据加载*/

    $http({
        method: 'POST',
        url: 'http://119.29.153.250:10001/cyxy-interface/cms/api/article/list',
        params: { isPage: 0 }
    }).then(function successCallback(response) {
        $scope.homedata = response.data.data;
        /*轮播数据*/
        $scope.swiperdata = [];
        /*主页banner*/
        $scope.banner = [];
        /*创业动态数据*/
        $scope.enDynamic = [];
        /*通知公告*/
        $scope.notice = [];
        /*创业成果*/
        $scope.enResults = [];
        /*教学工作*/
        $scope.teachingMAG = [];
        /*学生工作*/
        $scope.studentMAG = [];
        /*友情链接*/
        $scope.linkList = [];

        for (var i = 0; i < $scope.homedata.length; i++) {
            if ($scope.homedata[i].columnInfo.id == 'ff8080815da203c6015da23f278c0017') {
                $scope.enDynamic.push($scope.homedata[i]);
            } else if ($scope.homedata[i].columnInfo.id == 'ff8080815da203c6015da23b7c940011') {
                $scope.notice.push($scope.homedata[i]);
            } else if ($scope.homedata[i].columnInfo.id == 'ff8080815da203c6015da23f97e90019') {
                $scope.enResults.push($scope.homedata[i]);
            } else if ($scope.homedata[i].rootColumnInfo.id == 'ff8080815da203c6015da2448396001c') {
                $scope.teachingMAG.push($scope.homedata[i]);
            } else if ($scope.homedata[i].rootColumnInfo.id == 'ff8080815da203c6015da24721c60022') {
                $scope.studentMAG.push($scope.homedata[i]);
            } else if ($scope.homedata[i].columnInfo.id == 'ff8080815dab2e2c015dac73d4720024') {
                $scope.swiperdata.push($scope.homedata[i]);
            } else if ($scope.homedata[i].columnInfo.id == 'ff8080815dab2e2c015dac70cff60022') {
                $scope.banner.push($scope.homedata[i]);
            } else if($scope.homedata[i].columnInfo.id=='ff8080815daca3ac015dacc21ef60002'){
            	$scope.linkList.unshift($scope.homedata[i]);
            }
        }
        $scope.banner = $scope.banner.slice(0, 2);
        $scope.enDynamic = $scope.enDynamic.slice(0, 6);
        $scope.notice = $scope.notice.slice(0, 8);
        $scope.enResults = $scope.enResults.slice(0, 4);
        $scope.teachingMAG = $scope.teachingMAG.slice(0, 5);
        $scope.studentMAG = $scope.studentMAG.slice(0, 5);
        /*轮播驱动*/
        $timeout(function() {
            var swiperObj = document.getElementById('swiper-container');
            var mySwiper = new Swiper(swiperObj, {
                pagination: '.pagination', //分页器
                paginationClickable: true,
                grabCursor: true, //是否可以光标抓取
                centeredSlides: true, //幻灯片是否在中间，false时幻灯片会考左
                slidesPerView: 'auto', //幻灯片视图
                autoplay: 3000, //轮播时间
                autoplayDisableOnInteraction: false, //鼠标操作以后是否停止
                loop: true //是否循环
            });
        }, 500);
    }, function errorCallback(response) {
        alert('出现错误，请联系管理员。错误信息：' + response);
    });
    /*$scope.renderFinsh = function () {
        console.log('wanc');
    }*/
}]);
/*banner 侧边栏控制器*/
app.controller('main', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    /*子页banner*/
    $http({
        method: 'POST',
        url: 'http://119.29.153.250:10001/cyxy-interface/cms/api/article/list',
        params: { columnId: 'ff8080815dab2e2c015dac716c790023' }
    }).then(function successCallback(response) {
        $rootScope.bannerc = response.data.data.list[0].coverImageUrl;
    }, function errorCallback(response) {
        alert('出现错误，请联系管理员。错误信息：' + response);
    });
}]);
/*学院概况-学院简介 控制器*/
app.controller('schoolProfile', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学院概况-学院简介';
    $rootScope.nav = 1;
    $rootScope.topT = [
        { n: '学院概况', u: '/main/schoolProfile' },
        { n: '学院简介', u: '/main/schoolProfile' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学院概况',
        nav: [
            { t: '学院简介', c: 'active', u: '/main/schoolProfile' },
            { t: '学院领导', c: '', u: '/main/leadership' },
            { t: '组织机构', c: '', u: '/main/organization' },
            { t: '师资队伍', c: '', u: '/main/teachers' },
            { t: '治理结构', c: '', u: '/main/governance' },
            { t: '制度规范', c: '', u: '/main/institutional' },
            { t: '计划总结', c: '', u: '/main/plan' }
        ]
    };
    /*单篇数据加载*/
    $rootScope.oneDetail('ff8080815da203c6015da21dfe1b0004');
}]);
/*学院概况-学院领导 控制器*/
app.controller('leadership', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学院概况-学院领导';
    $rootScope.nav = 1;
    $rootScope.topT = [
        { n: '学院概况', u: '/main/schoolProfile' },
        { n: '学院领导', u: '/main/leadership' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学院概况',
        nav: [
            { t: '学院简介', c: '', u: '/main/schoolProfile' },
            { t: '学院领导', c: 'active', u: '/main/leadership' },
            { t: '组织机构', c: '', u: '/main/organization' },
            { t: '师资队伍', c: '', u: '/main/teachers' },
            { t: '治理结构', c: '', u: '/main/governance' },
            { t: '制度规范', c: '', u: '/main/institutional' },
            { t: '计划总结', c: '', u: '/main/plan' }
        ]
    };
    /*单篇数据加载*/
    $rootScope.oneDetail('ff8080815da203c6015da21e4f3c0005');
}]);
/*学院概况-组织机构 控制器*/
app.controller('organization', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学院概况-组织机构';
    $rootScope.nav = 1;
    $rootScope.topT = [
        { n: '学院概况', u: '/main/schoolProfile' },
        { n: '组织机构', u: '/main/organization' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学院概况',
        nav: [
            { t: '学院简介', c: '', u: '/main/schoolProfile' },
            { t: '学院领导', c: '', u: '/main/leadership' },
            { t: '组织机构', c: 'active', u: '/main/organization' },
            { t: '师资队伍', c: '', u: '/main/teachers' },
            { t: '治理结构', c: '', u: '/main/governance' },
            { t: '制度规范', c: '', u: '/main/institutional' },
            { t: '计划总结', c: '', u: '/main/plan' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/organizationD', 'ff8080815da203c6015da21ea1f40006');
}]);
/*学院概况-组织机构-详情 控制器*/
app.controller('organizationD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学院概况-组织机构';
    $rootScope.nav = 1;
    $rootScope.topT = [
        { n: '学院概况', u: '/main/schoolProfile' },
        { n: '组织机构', u: '/main/organization' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学院概况',
        nav: [
            { t: '学院简介', c: '', u: '/main/schoolProfile' },
            { t: '学院领导', c: '', u: '/main/leadership' },
            { t: '组织机构', c: 'active', u: '/main/organization' },
            { t: '师资队伍', c: '', u: '/main/teachers' },
            { t: '治理结构', c: '', u: '/main/governance' },
            { t: '制度规范', c: '', u: '/main/institutional' },
            { t: '计划总结', c: '', u: '/main/plan' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da21ea1f40006' });
    $scope.article = function(id) {
    	if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da21ea1f40006' });
    	}
    }
}]);
/*学院概况-师资队伍 控制器*/
app.controller('teachers', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学院概况-师资队伍';
    $rootScope.nav = 1;
    $rootScope.topT = [
        { n: '学院概况', u: '/main/schoolProfile' },
        { n: '师资队伍', u: '/main/teachers' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学院概况',
        nav: [
            { t: '学院简介', c: '', u: '/main/schoolProfile' },
            { t: '学院领导', c: '', u: '/main/leadership' },
            { t: '组织机构', c: '', u: '/main/organization' },
            { t: '师资队伍', c: 'active', u: '/main/teachers' },
            { t: '治理结构', c: '', u: '/main/governance' },
            { t: '制度规范', c: '', u: '/main/institutional' },
            { t: '计划总结', c: '', u: '/main/plan' }
        ]
    };
    /*单篇数据加载*/
    $rootScope.oneDetail('ff8080815da203c6015da21ef72b0007');
}]);
/*学院概况-治理结构 控制器*/
app.controller('governance', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学院概况-治理结构';
    $rootScope.nav = 1;
    $rootScope.topT = [
        { n: '学院概况', u: '/main/schoolProfile' },
        { n: '治理结构', u: '/main/governance' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学院概况',
        nav: [
            { t: '学院简介', c: '', u: '/main/schoolProfile' },
            { t: '学院领导', c: '', u: '/main/leadership' },
            { t: '组织机构', c: '', u: '/main/organization' },
            { t: '师资队伍', c: '', u: '/main/teachers' },
            { t: '治理结构', c: 'active', u: '/main/governance' },
            { t: '制度规范', c: '', u: '/main/institutional' },
            { t: '计划总结', c: '', u: '/main/plan' }
        ]
    };
    /*单篇数据加载*/
    $rootScope.oneDetail('ff8080815da203c6015da21fa3670008');
}]);
/*学院概况-制度规范 控制器*/
app.controller('institutional', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学院概况-制度规范';
    $rootScope.nav = 1;
    $rootScope.topT = [
        { n: '学院概况', u: '/main/schoolProfile' },
        { n: '制度规范', u: '/main/institutional' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学院概况',
        nav: [
            { t: '学院简介', c: '', u: '/main/schoolProfile' },
            { t: '学院领导', c: '', u: '/main/leadership' },
            { t: '组织机构', c: '', u: '/main/organization' },
            { t: '师资队伍', c: '', u: '/main/teachers' },
            { t: '治理结构', c: '', u: '/main/governance' },
            { t: '制度规范', c: 'active', u: '/main/institutional' },
            { t: '计划总结', c: '', u: '/main/plan' }
        ]
    };
    $rootScope.listOfText('/main/institutionalD', 'ff8080815da203c6015da21fea530009');
}]);
/*学院概况-制度规范-详情 控制器*/
app.controller('institutionalD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学院概况-制度规范';
    $rootScope.nav = 1;
    $rootScope.topT = [
        { n: '学院概况', u: '/main/schoolProfile' },
        { n: '制度规范', u: '/main/institutional' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学院概况',
        nav: [
            { t: '学院简介', c: '', u: '/main/schoolProfile' },
            { t: '学院领导', c: '', u: '/main/leadership' },
            { t: '组织机构', c: '', u: '/main/organization' },
            { t: '师资队伍', c: '', u: '/main/teachers' },
            { t: '治理结构', c: '', u: '/main/governance' },
            { t: '制度规范', c: 'active', u: '/main/institutional' },
            { t: '计划总结', c: '', u: '/main/plan' }
        ]
    };

    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da21fea530009' });
    $scope.article = function(id) {
        if (id) {
            $location.search({ id: id });
            $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da21fea530009' });
        }

    }
}]);
/*学院概况-计划总结 控制器*/
app.controller('plan', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学院概况-计划总结';
    $rootScope.nav = 1;
    $rootScope.topT = [
        { n: '学院概况', u: '/main/schoolProfile' },
        { n: '计划总结', u: '/main/plan' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学院概况',
        nav: [
            { t: '学院简介', c: '', u: '/main/schoolProfile' },
            { t: '学院领导', c: '', u: '/main/leadership' },
            { t: '组织机构', c: '', u: '/main/organization' },
            { t: '师资队伍', c: '', u: '/main/teachers' },
            { t: '治理结构', c: '', u: '/main/governance' },
            { t: '制度规范', c: '', u: '/main/institutional' },
            { t: '计划总结', c: 'active', u: '/main/plan' }
        ]
    };
    $rootScope.listOfText('planD', 'ff8080815da203c6015da220327e000a');
}]);
/*学院概况-计划总结-详情 控制器*/
app.controller('planD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学院概况-计划总结';
    $rootScope.nav = 1;
    $rootScope.topT = [
        { n: '学院概况', u: '/main/schoolProfile' },
        { n: '计划总结', u: '/main/plan' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学院概况',
        nav: [
            { t: '学院简介', c: '', u: '/main/schoolProfile' },
            { t: '学院领导', c: '', u: '/main/leadership' },
            { t: '组织机构', c: '', u: '/main/organization' },
            { t: '师资队伍', c: '', u: '/main/teachers' },
            { t: '治理结构', c: '', u: '/main/governance' },
            { t: '制度规范', c: '', u: '/main/institutional' },
            { t: '计划总结', c: 'active', u: '/main/plan' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da220327e000a' });
    $scope.article = function(id) {
    	if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da220327e000a' });
    	}
    }
}]);
/*党群工作-组织机构 控制器*/
app.controller('organizationP', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '党群工作-组织机构';
    $rootScope.nav = 2;
    $rootScope.topT = [
        { n: '党群工作', u: '/main/organizationP' },
        { n: '组织机构', u: '/main/organizationP' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '党群工作',
        nav: [
            { t: '组织机构', c: 'active', u: '/main/organizationP' },
            { t: '党务制度', c: '', u: '/main/institutionP' },
            { t: '党建活动', c: '', u: '/main/activityP' },
            { t: '党员风采', c: '', u: '/main/memberP' }
        ]
    };
    /*单篇数据加载*/
    $rootScope.oneDetail('ff8080815da203c6015da239dc60000c');
}]);
/*党群工作-党务制度 控制器*/
app.controller('institutionP', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '党群工作-党务制度';
    $rootScope.nav = 2;
    $rootScope.topT = [
        { n: '党群工作', u: '/main/organizationP' },
        { n: '党务制度', u: '/main/institutionP' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '党群工作',
        nav: [
            { t: '组织机构', c: '', u: '/main/organizationP' },
            { t: '党务制度', c: 'active', u: '/main/institutionP' },
            { t: '党建活动', c: '', u: '/main/activityP' },
            { t: '党员风采', c: '', u: '/main/memberP' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/institutionPD', 'ff8080815da203c6015da23a20ce000d');
}]);
/*党群工作-党务制度-详情 控制器*/
app.controller('institutionPD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '党群工作-党务制度';
    $rootScope.nav = 2;
    $rootScope.topT = [
        { n: '党群工作', u: '/main/organizationP' },
        { n: '党务制度', u: '/main/institutionP' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '党群工作',
        nav: [
            { t: '组织机构', c: '', u: '/main/organizationP' },
            { t: '党务制度', c: 'active', u: '/main/institutionP' },
            { t: '党建活动', c: '', u: '/main/activityP' },
            { t: '党员风采', c: '', u: '/main/memberP' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da23a20ce000d' });
    $scope.article = function(id) {
    	if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da23a20ce000d' });
    	}
    }
}]);
/*党群工作-党建活动 控制器*/
app.controller('activityP', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '党群工作-党建活动';
    $rootScope.nav = 2;
    $rootScope.topT = [
        { n: '党群工作', u: '/main/organizationP' },
        { n: '党建活动', u: '/main/activityP' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '党群工作',
        nav: [
            { t: '组织机构', c: '', u: '/main/organizationP' },
            { t: '党务制度', c: '', u: '/main/institutionP' },
            { t: '党建活动', c: 'active', u: '/main/activityP' },
            { t: '党员风采', c: '', u: '/main/memberP' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/activityPD', 'ff8080815da203c6015da23a6370000e');
}]);
/*党群工作-党建活动-详情 控制器*/
app.controller('activityPD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '党群工作-党建活动';
    $rootScope.nav = 2;
    $rootScope.topT = [
        { n: '党群工作', u: '/main/organizationP' },
        { n: '党建活动', u: '/main/activityP' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '党群工作',
        nav: [
            { t: '组织机构', c: '', u: '/main/organizationP' },
            { t: '党务制度', c: '', u: '/main/institutionP' },
            { t: '党建活动', c: 'active', u: '/main/activityP' },
            { t: '党员风采', c: '', u: '/main/memberP' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da23a6370000e' });
    $scope.article = function(id) {
        if (id) {
        	$location.search({ id: id });
        	$rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da23a6370000e' });
        }
    }
}]);
/*党群工作-党员风采 控制器*/
app.controller('memberP', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '党群工作-党员风采';
    $rootScope.nav = 2;
    $rootScope.topT = [
        { n: '党群工作', u: '/main/organizationP' },
        { n: '党员风采', u: '/main/memberP' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '党群工作',
        nav: [
            { t: '组织机构', c: '', u: '/main/organizationP' },
            { t: '党务制度', c: '', u: '/main/institutionP' },
            { t: '党建活动', c: '', u: '/main/activityP' },
            { t: '党员风采', c: 'active', u: '/main/memberP' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/memberPD', 'ff8080815da203c6015da23aa609000f');
}]);
/*党群工作-党员风采-详情 控制器*/
app.controller('memberPD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '党群工作-党员风采';
    $rootScope.nav = 2;
    $rootScope.topT = [
        { n: '党群工作', u: '/main/organizationP' },
        { n: '党员风采', u: '/main/memberP' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '党群工作',
        nav: [
            { t: '组织机构', c: '', u: '/main/organizationP' },
            { t: '党务制度', c: '', u: '/main/institutionP' },
            { t: '党建活动', c: '', u: '/main/activityP' },
            { t: '党员风采', c: 'active', u: '/main/memberP' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da23aa609000f' });
    $scope.article = function(id) {
        if (id) {
        	$location.search({ id: id });
        	$rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da23aa609000f' });
        }
    }
}]);

/*行政工作-通知公告 控制器*/
app.controller('notice', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '行政工作-通知公告';
    $rootScope.nav = 3;
    $rootScope.topT = [
        { n: '行政工作', u: '/main/notice' },
        { n: '通知公告', u: '/main/notice' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '行政工作',
        nav: [
            { t: '通知公告', c: 'active', u: '/main/notice' },
            { t: '学院文件', c: '', u: '/main/collegeFile' },
            { t: '行政制度', c: '', u: '/main/administrative' },
            { t: '人才招聘', c: '', u: '/main/recruitment' },
            { t: '师资培养', c: '', u: '/main/teacherTraining' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/noticeD', 'ff8080815da203c6015da23b7c940011');
}]);
/*行政工作-通知公告-详情 控制器*/
app.controller('noticeD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '行政工作-通知公告';
    $rootScope.nav = 3;
    $rootScope.topT = [
        { n: '行政工作', u: '/main/notice' },
        { n: '通知公告', u: '/main/notice' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '行政工作',
        nav: [
            { t: '通知公告', c: 'active', u: '/main/notice' },
            { t: '学院文件', c: '', u: '/main/collegeFile' },
            { t: '行政制度', c: '', u: '/main/administrative' },
            { t: '人才招聘', c: '', u: '/main/recruitment' },
            { t: '师资培养', c: '', u: '/main/teacherTraining' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da23b7c940011' });
    $scope.article = function(id) {
        if (id) {
        	$location.search({ id: id });
        	$rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da23b7c940011' });
        }
    }
}]);
/*行政工作-学院文件 控制器*/
app.controller('collegeFile', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '行政工作-学院文件';
    $rootScope.nav = 3;
    $rootScope.topT = [
        { n: '行政工作', u: '/main/notice' },
        { n: '学院文件', u: '/main/collegeFile' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '行政工作',
        nav: [
            { t: '通知公告', c: '', u: '/main/notice' },
            { t: '学院文件', c: 'active', u: '/main/collegeFile' },
            { t: '行政制度', c: '', u: '/main/administrative' },
            { t: '人才招聘', c: '', u: '/main/recruitment' },
            { t: '师资培养', c: '', u: '/main/teacherTraining' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/collegeFileD', 'ff8080815da203c6015da23bbc280012');
}]);
/*行政工作-学院文件-详情 控制器*/
app.controller('collegeFileD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '行政工作-学院文件';
    $rootScope.nav = 3;
    $rootScope.topT = [
        { n: '行政工作', u: '/main/notice' },
        { n: '学院文件', u: '/main/collegeFile' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '行政工作',
        nav: [
            { t: '通知公告', c: '', u: '/main/notice' },
            { t: '学院文件', c: 'active', u: '/main/collegeFile' },
            { t: '行政制度', c: '', u: '/main/administrative' },
            { t: '人才招聘', c: '', u: '/main/recruitment' },
            { t: '师资培养', c: '', u: '/main/teacherTraining' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da23bbc280012' });
    $scope.article = function(id) {
        if (id) {
        	$location.search({ id: id });
        	$rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da23bbc280012' });
        }
    }
}]);
/*行政工作-行政制度 控制器*/
app.controller('administrative', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '行政工作-行政制度';
    $rootScope.nav = 3;
    $rootScope.topT = [
        { n: '行政工作', u: '/main/notice' },
        { n: '行政制度', u: '/main/administrative' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '行政工作',
        nav: [
            { t: '通知公告', c: '', u: '/main/notice' },
            { t: '学院文件', c: '', u: '/main/collegeFile' },
            { t: '行政制度', c: 'active', u: '/main/administrative' },
            { t: '人才招聘', c: '', u: '/main/recruitment' },
            { t: '师资培养', c: '', u: '/main/teacherTraining' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/administrativeD', 'ff8080815da203c6015da23da91d0013');
}]);
/*行政工作-行政制度-详情 控制器*/
app.controller('administrativeD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '行政工作-行政制度';
    $rootScope.nav = 3;
    $rootScope.topT = [
        { n: '行政工作', u: '/main/notice' },
        { n: '行政制度', u: '/main/administrative' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '行政工作',
        nav: [
            { t: '通知公告', c: '', u: '/main/notice' },
            { t: '学院文件', c: '', u: '/main/collegeFile' },
            { t: '行政制度', c: 'active', u: '/main/administrative' },
            { t: '人才招聘', c: '', u: '/main/recruitment' },
            { t: '师资培养', c: '', u: '/main/teacherTraining' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da23da91d0013' });
    $scope.article = function(id) {
        if (id) {
        	$location.search({ id: id });
        	$rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da23da91d0013' });
        }
    }
}]);
/*行政工作-人才招聘 控制器*/
app.controller('recruitment', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '行政工作-人才招聘';
    $rootScope.nav = 3;
    $rootScope.topT = [
        { n: '行政工作', u: '/main/notice' },
        { n: '人才招聘', u: '/main/recruitment' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '行政工作',
        nav: [
            { t: '通知公告', c: '', u: '/main/notice' },
            { t: '学院文件', c: '', u: '/main/collegeFile' },
            { t: '行政制度', c: '', u: '/main/administrative' },
            { t: '人才招聘', c: 'active', u: '/main/recruitment' },
            { t: '师资培养', c: '', u: '/main/teacherTraining' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/recruitmentD', 'ff8080815da203c6015da23de99f0014');
}]);
/*行政工作-人才招聘-详情 控制器*/
app.controller('recruitmentD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '行政工作-人才招聘';
    $rootScope.nav = 3;
    $rootScope.topT = [
        { n: '行政工作', u: '/main/notice' },
        { n: '人才招聘', u: '/main/recruitment' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '行政工作',
        nav: [
            { t: '通知公告', c: '', u: '/main/notice' },
            { t: '学院文件', c: '', u: '/main/collegeFile' },
            { t: '行政制度', c: '', u: '/main/administrative' },
            { t: '人才招聘', c: 'active', u: '/main/recruitment' },
            { t: '师资培养', c: '', u: '/main/teacherTraining' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da23de99f0014' });
    $scope.article = function(id) {
        if (id) {
        	$location.search({ id: id });
        	$rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da23de99f0014' });
        }
    }
}]);
/*行政工作-师资培养 控制器*/
app.controller('teacherTraining', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '行政工作-师资培养';
    $rootScope.nav = 3;
    $rootScope.topT = [
        { n: '行政工作', u: '/main/notice' },
        { n: '师资培养', u: '/main/teacherTraining' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '行政工作',
        nav: [
            { t: '通知公告', c: '', u: '/main/notice' },
            { t: '学院文件', c: '', u: '/main/collegeFile' },
            { t: '行政制度', c: '', u: '/main/administrative' },
            { t: '人才招聘', c: '', u: '/main/recruitment' },
            { t: '师资培养', c: 'active', u: '/main/teacherTraining' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/teacherTrainingD', 'ff8080815da203c6015da23e45b00015');
}]);
/*行政工作-师资培养-详情 控制器*/
app.controller('teacherTrainingD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '行政工作-师资培养';
    $rootScope.nav = 3;
    $rootScope.topT = [
        { n: '行政工作', u: '/main/notice' },
        { n: '师资培养', u: '/main/teacherTraining' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '行政工作',
        nav: [
            { t: '通知公告', c: '', u: '/main/notice' },
            { t: '学院文件', c: '', u: '/main/collegeFile' },
            { t: '行政制度', c: '', u: '/main/administrative' },
            { t: '人才招聘', c: '', u: '/main/recruitment' },
            { t: '师资培养', c: 'active', u: '/main/teacherTraining' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da23e45b00015' });
    $scope.article = function(id) {
        if (id) {
        	$location.search({ id: id });
        	$rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da23e45b00015' });
        }
    }
}]);

/*创新创业-创业动态 控制器*/
app.controller('enDynamic', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '创新创业-创业动态';
    $rootScope.nav = 4;
    $rootScope.topT = [
        { n: '创新创业', u: '/main/enDynamic' },
        { n: '创业动态', u: '/main/enDynamic' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '创新创业',
        nav: [
            { t: '创业动态', c: 'active', u: '/main/enDynamic' },
            { t: '创业赛事', c: '', u: '/main/enEvent' },
            { t: '创业成果', c: '', u: '/main/enResults' },
            { t: '创业团队', c: '', u: '/main/enTeam' },
            { t: '创业基地', c: '', u: '/main/enBase' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/enDynamicD', 'ff8080815da203c6015da23f278c0017');
}]);
/*创新创业-创业动态-详情 控制器*/
app.controller('enDynamicD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '创新创业-创业动态';
    $rootScope.nav = 4;
    $rootScope.topT = [
        { n: '创新创业', u: '/main/enDynamic' },
        { n: '创业动态', u: '/main/enDynamic' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '创新创业',
        nav: [
            { t: '创业动态', c: 'active', u: '/main/enDynamic' },
            { t: '创业赛事', c: '', u: '/main/enEvent' },
            { t: '创业成果', c: '', u: '/main/enResults' },
            { t: '创业团队', c: '', u: '/main/enTeam' },
            { t: '创业基地', c: '', u: '/main/enBase' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da23f278c0017' });
    $scope.article = function(id) {
        if (id) {
        	$location.search({ id: id });
        	$rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da23f278c0017' });
        }
    }
}]);
/*创新创业-创业赛事 控制器*/
app.controller('enEvent', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '创新创业-创业赛事';
    $rootScope.nav = 4;
    $rootScope.topT = [
        { n: '创新创业', u: '/main/enDynamic' },
        { n: '创业赛事', u: '/main/enEvent' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '创新创业',
        nav: [
            { t: '创业动态', c: '', u: '/main/enDynamic' },
            { t: '创业赛事', c: 'active', u: '/main/enEvent' },
            { t: '创业成果', c: '', u: '/main/enResults' },
            { t: '创业团队', c: '', u: '/main/enTeam' },
            { t: '创业基地', c: '', u: '/main/enBase' }
        ]
    };
    /*图文列表数据加载*/
    $rootScope.listOfText('/main/enEventD', 'ff8080815da203c6015da23f66270018');
}]);
/*创新创业-创业赛事-详情 控制器*/
app.controller('enEventD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '创新创业-创业赛事';
    $rootScope.nav = 4;
    $rootScope.topT = [
        { n: '创新创业', u: '/main/enDynamic' },
        { n: '创业赛事', u: '/main/enEvent' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '创新创业',
        nav: [
            { t: '创业动态', c: '', u: '/main/enDynamic' },
            { t: '创业赛事', c: 'active', u: '/main/enEvent' },
            { t: '创业成果', c: '', u: '/main/enResults' },
            { t: '创业团队', c: '', u: '/main/enTeam' },
            { t: '创业基地', c: '', u: '/main/enBase' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da23f66270018' });
    $scope.article = function(id) {
        if (id) {
        	$location.search({ id: id });
        	$rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da23f66270018' });
        }
    }
}]);
/*创新创业-创业成果 控制器*/
app.controller('enResults', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '创新创业-创业成果';
    $rootScope.nav = 4;
    $rootScope.topT = [
        { n: '创新创业', u: '/main/enDynamic' },
        { n: '创业成果', u: '/main/enResults' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '创新创业',
        nav: [
            { t: '创业动态', c: '', u: '/main/enDynamic' },
            { t: '创业赛事', c: '', u: '/main/enEvent' },
            { t: '创业成果', c: 'active', u: '/main/enResults' },
            { t: '创业团队', c: '', u: '/main/enTeam' },
            { t: '创业基地', c: '', u: '/main/enBase' }
        ]
    };
    /*图文列表数据加载*/
    $rootScope.listOfText('/main/enResultsD', 'ff8080815da203c6015da23f97e90019');
}]);
/*创新创业-创业成果-详情 控制器*/
app.controller('enResultsD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '创新创业-创业成果';
    $rootScope.nav = 4;
    $rootScope.topT = [
        { n: '创新创业', u: '/main/enDynamic' },
        { n: '创业成果', u: '/main/enResults' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '创新创业',
        nav: [
            { t: '创业动态', c: '', u: '/main/enDynamic' },
            { t: '创业赛事', c: '', u: '/main/enEvent' },
            { t: '创业成果', c: 'active', u: '/main/enResults' },
            { t: '创业团队', c: '', u: '/main/enTeam' },
            { t: '创业基地', c: '', u: '/main/enBase' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da23f97e90019' });
    $scope.article = function(id) {
        if (id) {
        	$location.search({ id: id });
        	$rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da23f97e90019' });
        }
    }
}]);
/*创新创业-创业团队 控制器*/
app.controller('enTeam', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '创新创业-创业团队';
    $rootScope.nav = 4;
    $rootScope.topT = [
        { n: '创新创业', u: '/main/enDynamic' },
        { n: '创业团队', u: '/main/enTeam' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '创新创业',
        nav: [
            { t: '创业动态', c: '', u: '/main/enDynamic' },
            { t: '创业赛事', c: '', u: '/main/enEvent' },
            { t: '创业成果', c: '', u: '/main/enResults' },
            { t: '创业团队', c: 'active', u: '/main/enTeam' },
            { t: '创业基地', c: '', u: '/main/enBase' }
        ]
    };
    /*图文列表数据加载*/
    $rootScope.listOfText('/main/enTeamD', 'ff8080815da203c6015da23fd701001a');
}]);
/*创新创业-创业团队-详情 控制器*/
app.controller('enTeamD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '创新创业-创业团队';
    $rootScope.nav = 4;
    $rootScope.topT = [
        { n: '创新创业', u: '/main/enDynamic' },
        { n: '创业团队', u: '/main/enTeam' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '创新创业',
        nav: [
            { t: '创业动态', c: '', u: '/main/enDynamic' },
            { t: '创业赛事', c: '', u: '/main/enEvent' },
            { t: '创业成果', c: '', u: '/main/enResults' },
            { t: '创业团队', c: 'active', u: '/main/enTeam' },
            { t: '创业基地', c: '', u: '/main/enBase' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da23fd701001a' });
    $scope.article = function(id) {
        if (id) {
        	$location.search({ id: id });
        	$rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da23fd701001a' });
        }
    }
}]);
/*创新创业-创业基地 控制器*/
app.controller('enBase', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '创新创业-创业基地';
    $rootScope.nav = 4;
    $rootScope.topT = [
        { n: '创新创业', u: '/main/enDynamic' },
        { n: '创业基地', u: '/main/enBase' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '创新创业',
        nav: [
            { t: '创业动态', c: '', u: '/main/enDynamic' },
            { t: '创业赛事', c: '', u: '/main/enEvent' },
            { t: '创业成果', c: '', u: '/main/enResults' },
            { t: '创业团队', c: '', u: '/main/enTeam' },
            { t: '创业基地', c: 'active', u: '/main/enBase' }
        ]
    };
    /*单篇数据加载*/
    $rootScope.oneDetail('ff8080815da203c6015da24012c8001b');
}]);

/*教学工作-教学通知 控制器*/
app.controller('teachingNotice', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '教学工作-教学通知';
    $rootScope.nav = 5;
    $rootScope.topT = [
        { n: '教学工作', u: '/main/teachingNotice' },
        { n: '教学通知', u: '/main/teachingNotice' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '教学工作',
        nav: [
            { t: '教学通知', c: 'active', u: '/main/teachingNotice' },
            { t: '专业介绍', c: '', u: '/main/professional' },
            { t: '培养计划', c: '', u: '/main/trainingPlan' },
            { t: '教学管理', c: '', u: '/main/teachingMAG' },
            { t: '教学成果', c: '', u: '/main/teachingResults' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/teachingNoticeD', 'ff8080815da203c6015da244d8b6001d');
}]);
/*教学工作-教学通知-详情 控制器*/
app.controller('teachingNoticeD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '教学工作-教学通知';
    $rootScope.nav = 5;
    $rootScope.topT = [
        { n: '教学工作', u: '/main/teachingNotice' },
        { n: '教学通知', u: '/main/teachingNotice' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '教学工作',
        nav: [
            { t: '教学通知', c: 'active', u: '/main/teachingNotice' },
            { t: '专业介绍', c: '', u: '/main/professional' },
            { t: '培养计划', c: '', u: '/main/trainingPlan' },
            { t: '教学管理', c: '', u: '/main/teachingMAG' },
            { t: '教学成果', c: '', u: '/main/teachingResults' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da244d8b6001d' });
    $scope.article = function(id) {
    	if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da244d8b6001d' });
    	}
    }
}]);
/*教学工作-专业介绍 控制器*/
app.controller('professional', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '教学工作-专业介绍';
    $rootScope.nav = 5;
    $rootScope.topT = [
        { n: '教学工作', u: '/main/teachingNotice' },
        { n: '专业介绍', u: '/main/professional' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '教学工作',
        nav: [
            { t: '教学通知', c: '', u: '/main/teachingNotice' },
            { t: '专业介绍', c: 'active', u: '/main/professional' },
            { t: '培养计划', c: '', u: '/main/trainingPlan' },
            { t: '教学管理', c: '', u: '/main/teachingMAG' },
            { t: '教学成果', c: '', u: '/main/teachingResults' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/professionalD', 'ff8080815da203c6015da2451bf1001e');
}]);
/*教学工作-专业介绍-详情 控制器*/
app.controller('professionalD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '教学工作-专业介绍';
    $rootScope.nav = 5;
    $rootScope.topT = [
        { n: '教学工作', u: '/main/teachingNotice' },
        { n: '专业介绍', u: '/main/professional' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '教学工作',
        nav: [
            { t: '教学通知', c: '', u: '/main/teachingNotice' },
            { t: '专业介绍', c: 'active', u: '/main/professional' },
            { t: '培养计划', c: '', u: '/main/trainingPlan' },
            { t: '教学管理', c: '', u: '/main/teachingMAG' },
            { t: '教学成果', c: '', u: '/main/teachingResults' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da2451bf1001e' });
    $scope.article = function(id) {
    	if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da2451bf1001e' });
    	}
    }
}]);
/*教学工作-培养计划 控制器*/
app.controller('trainingPlan', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '教学工作-培养计划';
    $rootScope.nav = 5;
    $rootScope.topT = [
        { n: '教学工作', u: '/main/teachingNotice' },
        { n: '培养计划', u: '/main/trainingPlan' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '教学工作',
        nav: [
            { t: '教学通知', c: '', u: '/main/teachingNotice' },
            { t: '专业介绍', c: '', u: '/main/professional' },
            { t: '培养计划', c: 'active', u: '/main/trainingPlan' },
            { t: '教学管理', c: '', u: '/main/teachingMAG' },
            { t: '教学成果', c: '', u: '/main/teachingResults' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/trainingPlanD', 'ff8080815da203c6015da2457d21001f');
}]);
/*教学工作-培养计划-详情 控制器*/
app.controller('trainingPlanD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '教学工作-培养计划';
    $rootScope.nav = 5;
    $rootScope.topT = [
        { n: '教学工作', u: '/main/teachingNotice' },
        { n: '培养计划', u: '/main/trainingPlan' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '教学工作',
        nav: [
            { t: '教学通知', c: '', u: '/main/teachingNotice' },
            { t: '专业介绍', c: '', u: '/main/professional' },
            { t: '培养计划', c: 'active', u: '/main/trainingPlan' },
            { t: '教学管理', c: '', u: '/main/teachingMAG' },
            { t: '教学成果', c: '', u: '/main/teachingResults' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da2457d21001f' });
    $scope.article = function(id) {
    	if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da2457d21001f' });
    	}
    }
}]);
/*教学工作-教学管理 控制器*/
app.controller('teachingMAG', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '教学工作-教学管理';
    $rootScope.nav = 5;
    $rootScope.topT = [
        { n: '教学工作', u: '/main/teachingNotice' },
        { n: '教学管理', u: '/main/teachingMAG' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '教学工作',
        nav: [
            { t: '教学通知', c: '', u: '/main/teachingNotice' },
            { t: '专业介绍', c: '', u: '/main/professional' },
            { t: '培养计划', c: '', u: '/main/trainingPlan' },
            { t: '教学管理', c: 'active', u: '/main/teachingMAG' },
            { t: '教学成果', c: '', u: '/main/teachingResults' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/teachingMAGD', 'ff8080815da203c6015da245c58f0020');
}]);
/*教学工作-教学管理-详情 控制器*/
app.controller('teachingMAGD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '教学工作-教学管理';
    $rootScope.nav = 5;
    $rootScope.topT = [
        { n: '教学工作', u: '/main/teachingNotice' },
        { n: '教学管理', u: '/main/teachingMAG' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '教学工作',
        nav: [
            { t: '教学通知', c: '', u: '/main/teachingNotice' },
            { t: '专业介绍', c: '', u: '/main/professional' },
            { t: '培养计划', c: '', u: '/main/trainingPlan' },
            { t: '教学管理', c: 'active', u: '/main/teachingMAG' },
            { t: '教学成果', c: '', u: '/main/teachingResults' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da245c58f0020' });
    $scope.article = function(id) {
    	if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da245c58f0020' });
    	}
    }
}]);
/*教学工作-教学成果 控制器*/
app.controller('teachingResults', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '教学工作-教学成果';
    $rootScope.nav = 5;
    $rootScope.topT = [
        { n: '教学工作', u: '/main/teachingNotice' },
        { n: '教学成果', u: '/main/teachingResults' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '教学工作',
        nav: [
            { t: '教学通知', c: '', u: '/main/teachingNotice' },
            { t: '专业介绍', c: '', u: '/main/professional' },
            { t: '培养计划', c: '', u: '/main/trainingPlan' },
            { t: '教学管理', c: '', u: '/main/teachingMAG' },
            { t: '教学成果', c: 'active', u: '/main/teachingResults' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/teachingResultsD', 'ff8080815da203c6015da24603e70021');
}]);
/*教学工作-教学成果-详情 控制器*/
app.controller('teachingResultsD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '教学工作-教学成果';
    $rootScope.nav = 5;
    $rootScope.topT = [
        { n: '教学工作', u: '/main/teachingNotice' },
        { n: '教学成果', u: '/main/teachingResults' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '教学工作',
        nav: [
            { t: '教学通知', c: '', u: '/main/teachingNotice' },
            { t: '专业介绍', c: '', u: '/main/professional' },
            { t: '培养计划', c: '', u: '/main/trainingPlan' },
            { t: '教学管理', c: '', u: '/main/teachingMAG' },
            { t: '教学成果', c: 'active', u: '/main/teachingResults' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da24603e70021' });
    $scope.article = function(id) {
    	if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da24603e70021' });
    	}
    }
}]);

/*学生工作-学生管理 控制器*/
app.controller('studentMAG', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学生工作-学生管理';
    $rootScope.nav = 6;
    $rootScope.topT = [
        { n: '学生工作', u: '/main/studentMAG' },
        { n: '学生管理', u: '/main/studentMAG' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学生工作',
        nav: [
            { t: '学生管理', c: 'active', u: '/main/studentMAG' },
            { t: '学生就业', c: '', u: '/main/employment' },
            { t: '学风建设', c: '', u: '/main/styleOfStudy' },
            { t: '班级风采', c: '', u: '/main/classStyle' },
            { t: '志愿服务', c: '', u: '/main/volunteerService' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/studentMAGD', 'ff8080815da203c6015da247697d0023');
}]);
/*学生工作-学生管理-详情 控制器*/
app.controller('studentMAGD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学生工作-学生管理';
    $rootScope.nav = 6;
    $rootScope.topT = [
        { n: '学生工作', u: '/main/studentMAG' },
        { n: '学生管理', u: '/main/studentMAG' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学生工作',
        nav: [
            { t: '学生管理', c: 'active', u: '/main/studentMAG' },
            { t: '学生就业', c: '', u: '/main/employment' },
            { t: '学风建设', c: '', u: '/main/styleOfStudy' },
            { t: '班级风采', c: '', u: '/main/classStyle' },
            { t: '志愿服务', c: '', u: '/main/volunteerService' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da247697d0023' });
    $scope.article = function(id) {
        if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da247697d0023' });
        }
    }
}]);
/*学生工作-学生就业 控制器*/
app.controller('employment', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学生工作-学生就业';
    $rootScope.nav = 6;
    $rootScope.topT = [
        { n: '学生工作', u: '/main/studentMAG' },
        { n: '学生就业', u: '/main/employment' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学生工作',
        nav: [
            { t: '学生管理', c: '', u: '/main/studentMAG' },
            { t: '学生就业', c: 'active', u: '/main/employment' },
            { t: '学风建设', c: '', u: '/main/styleOfStudy' },
            { t: '班级风采', c: '', u: '/main/classStyle' },
            { t: '志愿服务', c: '', u: '/main/volunteerService' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/employmentD', 'ff8080815da203c6015da24975400024');
}]);
/*学生工作-学生就业-详情 控制器*/
app.controller('employmentD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学生工作-学生就业';
    $rootScope.nav = 6;
    $rootScope.topT = [
        { n: '学生工作', u: '/main/studentMAG' },
        { n: '学生就业', u: '/main/employment' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学生工作',
        nav: [
            { t: '学生管理', c: '', u: '/main/studentMAG' },
            { t: '学生就业', c: 'active', u: '/main/employment' },
            { t: '学风建设', c: '', u: '/main/styleOfStudy' },
            { t: '班级风采', c: '', u: '/main/classStyle' },
            { t: '志愿服务', c: '', u: '/main/volunteerService' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da24975400024' });
    $scope.article = function(id) {
        if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da24975400024' });
        }
    }
}]);
/*学生工作-学风建设 控制器*/
app.controller('styleOfStudy', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学生工作-学风建设';
    $rootScope.nav = 6;
    $rootScope.topT = [
        { n: '学生工作', u: '/main/studentMAG' },
        { n: '学风建设', u: '/main/styleOfStudy' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学生工作',
        nav: [
            { t: '学生管理', c: '', u: '/main/studentMAG' },
            { t: '学生就业', c: '', u: '/main/employment' },
            { t: '学风建设', c: 'active', u: '/main/styleOfStudy' },
            { t: '班级风采', c: '', u: '/main/classStyle' },
            { t: '志愿服务', c: '', u: '/main/volunteerService' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/styleOfStudyD', 'ff8080815da203c6015da249bb200025');
}]);
/*学生工作-学风建设-详情 控制器*/
app.controller('styleOfStudyD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学生工作-学风建设';
    $rootScope.nav = 6;
    $rootScope.topT = [
        { n: '学生工作', u: '/main/studentMAG' },
        { n: '学风建设', u: '/main/styleOfStudy' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学生工作',
        nav: [
            { t: '学生管理', c: '', u: '/main/studentMAG' },
            { t: '学生就业', c: '', u: '/main/employment' },
            { t: '学风建设', c: 'active', u: '/main/styleOfStudy' },
            { t: '班级风采', c: '', u: '/main/classStyle' },
            { t: '志愿服务', c: '', u: '/main/volunteerService' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da249bb200025' });
    $scope.article = function(id) {
        if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da249bb200025' });
        }
    }
}]);
/*学生工作-班级风采 控制器*/
app.controller('classStyle', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学生工作-班级风采';
    $rootScope.nav = 6;
    $rootScope.topT = [
        { n: '学生工作', u: '/main/studentMAG' },
        { n: '班级风采', u: '/main/classStyle' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学生工作',
        nav: [
            { t: '学生管理', c: '', u: '/main/studentMAG' },
            { t: '学生就业', c: '', u: '/main/employment' },
            { t: '学风建设', c: '', u: '/main/styleOfStudy' },
            { t: '班级风采', c: 'active', u: '/main/classStyle' },
            { t: '志愿服务', c: '', u: '/main/volunteerService' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/classStyleD', 'ff8080815da203c6015da24a08a70026');
}]);
/*学生工作-班级风采-详情 控制器*/
app.controller('classStyleD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学生工作-班级风采';
    $rootScope.nav = 6;
    $rootScope.topT = [
        { n: '学生工作', u: '/main/studentMAG' },
        { n: '班级风采', u: '/main/classStyle' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学生工作',
        nav: [
            { t: '学生管理', c: '', u: '/main/studentMAG' },
            { t: '学生就业', c: '', u: '/main/employment' },
            { t: '学风建设', c: '', u: '/main/styleOfStudy' },
            { t: '班级风采', c: 'active', u: '/main/classStyle' },
            { t: '志愿服务', c: '', u: '/main/volunteerService' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da24a08a70026' });
    $scope.article = function(id) {
        if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da24a08a70026' });
        }
    }
}]);
/*学生工作-志愿服务 控制器*/
app.controller('volunteerService', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学生工作-志愿服务';
    $rootScope.nav = 6;
    $rootScope.topT = [
        { n: '学生工作', u: '/main/studentMAG' },
        { n: '志愿服务', u: '/main/volunteerService' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学生工作',
        nav: [
            { t: '学生管理', c: '', u: '/main/studentMAG' },
            { t: '学生就业', c: '', u: '/main/employment' },
            { t: '学风建设', c: '', u: '/main/styleOfStudy' },
            { t: '班级风采', c: '', u: '/main/classStyle' },
            { t: '志愿服务', c: 'active', u: '/main/volunteerService' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/volunteerServiceD', 'ff8080815da203c6015da24a48760027');
}]);
/*学生工作-志愿服务-详情 控制器*/
app.controller('volunteerServiceD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '学生工作-志愿服务';
    $rootScope.nav = 6;
    $rootScope.topT = [
        { n: '学生工作', u: '/main/studentMAG' },
        { n: '志愿服务', u: '/main/volunteerService' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '学生工作',
        nav: [
            { t: '学生管理', c: '', u: '/main/studentMAG' },
            { t: '学生就业', c: '', u: '/main/employment' },
            { t: '学风建设', c: '', u: '/main/styleOfStudy' },
            { t: '班级风采', c: '', u: '/main/classStyle' },
            { t: '志愿服务', c: 'active', u: '/main/volunteerService' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da24a48760027' });
    $scope.article = function(id) {
        if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da24a48760027' });
        }
    }
}]);

/*创友之窗-创友名录 控制器*/
app.controller('enFNList', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '创友之窗-创友名录';
    $rootScope.nav = 7;
    $rootScope.topT = [
        { n: '创友之窗', u: '/main/enFNList' },
        { n: '创友名录', u: '/main/enFNList' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '创友之窗',
        nav: [
            { t: '创友名录', c: 'active', u: '/main/enFNList' },
            { t: '创友动态', c: '', u: '/main/enFDynamic' },
            { t: '创友风采', c: '', u: '/main/enFED' }
        ]
    };
    /*图文列表数据加载*/
    $rootScope.listOfText('/main/enFNListD', 'ff8080815da203c6015da24ad1680029');
}]);
/*创友之窗-创友名录-详情 控制器*/
app.controller('enFNListD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '创友之窗-创友名录';
    $rootScope.nav = 7;
    $rootScope.topT = [
        { n: '创友之窗', u: '/main/enFNList' },
        { n: '创友名录', u: '/main/enFNList' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '创友之窗',
        nav: [
            { t: '创友名录', c: 'active', u: '/main/enFNList' },
            { t: '创友动态', c: '', u: '/main/enFDynamic' },
            { t: '创友风采', c: '', u: '/main/enFED' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da24ad1680029' });
    $scope.article = function(id) {
        if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da24ad1680029' });
        }
    }
}]);
/*创友之窗-创友动态 控制器*/
app.controller('enFDynamic', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '创友之窗-创友动态';
    $rootScope.nav = 7;
    $rootScope.topT = [
        { n: '创友之窗', u: '/main/enFNList' },
        { n: '创友动态', u: '/main/enFDynamic' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '创友之窗',
        nav: [
            { t: '创友名录', c: '', u: '/main/enFNList' },
            { t: '创友动态', c: 'active', u: '/main/enFDynamic' },
            { t: '创友风采', c: '', u: '/main/enFED' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/enFDynamicD', 'ff8080815da203c6015da24b09dc002a');
}]);
/*创友之窗-创友动态-详情 控制器*/
app.controller('enFDynamicD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '创友之窗-创友动态';
    $rootScope.nav = 7;
    $rootScope.topT = [
        { n: '创友之窗', u: '/main/enFNList' },
        { n: '创友动态', u: '/main/enFDynamic' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '创友之窗',
        nav: [
            { t: '创友名录', c: '', u: '/main/enFNList' },
            { t: '创友动态', c: 'active', u: '/main/enFDynamic' },
            { t: '创友风采', c: '', u: '/main/enFED' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da24b09dc002a' });
    $scope.article = function(id) {
        if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da24b09dc002a' });
        }
    }
}]);
/*创友之窗-创友风采 控制器*/
app.controller('enFED', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '创友之窗-创友风采';
    $rootScope.nav = 7;
    $rootScope.topT = [
        { n: '创友之窗', u: '/main/enFNList' },
        { n: '创友风采', u: '/main/enFED' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '创友之窗',
        nav: [
            { t: '创友名录', c: '', u: '/main/enFNList' },
            { t: '创友动态', c: '', u: '/main/enFDynamic' },
            { t: '创友风采', c: 'active', u: '/main/enFED' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/enFEDD', 'ff8080815da203c6015da24b4f3f002b');
}]);
/*创友之窗-创友风采-详情 控制器*/
app.controller('enFEDD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '创友之窗-创友风采';
    $rootScope.nav = 7;
    $rootScope.topT = [
        { n: '创友之窗', u: '/main/enFNList' },
        { n: '创友风采', u: '/main/enFED' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '创友之窗',
        nav: [
            { t: '创友名录', c: '', u: '/main/enFNList' },
            { t: '创友动态', c: '', u: '/main/enFDynamic' },
            { t: '创友风采', c: 'active', u: '/main/enFED' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da24b4f3f002b' });
    $scope.article = function(id) {
        if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da24b4f3f002b' });
        }
    }
}]);

/*对外交流-合作概况 控制器*/
app.controller('cooperation', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '对外交流-合作概况';
    $rootScope.nav = 8;
    $rootScope.topT = [
        { n: '对外交流', u: '/main/enFNList' },
        { n: '合作概况', u: '/main/enFED' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '对外交流',
        nav: [
            { t: '合作概况', c: 'active', u: '/main/cooperation' },
            { t: '专家互访', c: '', u: '/main/expertVisits' },
            { t: '合作办学', c: '', u: '/main/cooperationIRS' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/cooperationD', 'ff8080815da203c6015da24d6c71002d');
}]);
/*对外交流-合作概况-详情 控制器*/
app.controller('cooperationD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '对外交流-合作概况';
    $rootScope.nav = 8;
    $rootScope.topT = [
        { n: '对外交流', u: '/main/enFNList' },
        { n: '合作概况', u: '/main/enFED' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '对外交流',
        nav: [
            { t: '合作概况', c: 'active', u: '/main/cooperation' },
            { t: '专家互访', c: '', u: '/main/expertVisits' },
            { t: '合作办学', c: '', u: '/main/cooperationIRS' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da24d6c71002d' });
    $scope.article = function(id) {
        if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da24d6c71002d' });
        }
    }
}]);
/*对外交流-专家互访 控制器*/
app.controller('expertVisits', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '对外交流-专家互访';
    $rootScope.nav = 8;
    $rootScope.topT = [
        { n: '对外交流', u: '/main/enFNList' },
        { n: '专家互访', u: '/main/enFED' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '对外交流',
        nav: [
            { t: '合作概况', c: '', u: '/main/cooperation' },
            { t: '专家互访', c: 'active', u: '/main/expertVisits' },
            { t: '合作办学', c: '', u: '/main/cooperationIRS' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/expertVisitsD', 'ff8080815da203c6015da24dbc6f002e');
}]);
/*对外交流-专家互访-详情 控制器*/
app.controller('expertVisitsD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '对外交流-专家互访';
    $rootScope.nav = 8;
    $rootScope.topT = [
        { n: '对外交流', u: '/main/enFNList' },
        { n: '专家互访', u: '/main/enFED' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '对外交流',
        nav: [
            { t: '合作概况', c: '', u: '/main/cooperation' },
            { t: '专家互访', c: 'active', u: '/main/expertVisits' },
            { t: '合作办学', c: '', u: '/main/cooperationIRS' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da24dbc6f002e' });
    $scope.article = function(id) {
        if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da24dbc6f002e' });
        }
    }
}]);
/*对外交流-合作办学 控制器*/
app.controller('cooperationIRS', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '对外交流-合作办学';
    $rootScope.nav = 8;
    $rootScope.topT = [
        { n: '对外交流', u: '/main/enFNList' },
        { n: '合作办学', u: '/main/enFED' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '对外交流',
        nav: [
            { t: '合作概况', c: '', u: '/main/cooperation' },
            { t: '专家互访', c: '', u: '/main/expertVisits' },
            { t: '合作办学', c: 'active', u: '/main/cooperationIRS' }
        ]
    };
    /*文字列表数据加载*/
    $rootScope.listOfText('/main/cooperationIRSD', 'ff8080815da203c6015da24e0e28002f');
}]);
/*对外交流-合作办学-详情 控制器*/
app.controller('cooperationIRSD', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '对外交流-合作办学';
    $rootScope.nav = 8;
    $rootScope.topT = [
        { n: '对外交流', u: '/main/enFNList' },
        { n: '合作办学', u: '/main/enFED' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '对外交流',
        nav: [
            { t: '合作概况', c: '', u: '/main/cooperation' },
            { t: '专家互访', c: '', u: '/main/expertVisits' },
            { t: '合作办学', c: 'active', u: '/main/cooperationIRS' }
        ]
    };
    $rootScope.detail({ currentArticleId: $location.search().id, columnId: 'ff8080815da203c6015da24e0e28002f' });
    $scope.article = function(id) {
        if (id) {
	        $location.search({ id: id });
	        $rootScope.detail({ currentArticleId: id, columnId: 'ff8080815da203c6015da24e0e28002f' });
        }
    }
}]);


/*信息公开控制器*/
app.controller('infoPublic', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '信息公开';
    $rootScope.nav = 9;
    $rootScope.topT = [
        { n: '信息公开', u: '/main/infoPublic' }
    ];
    /*侧边栏数据*/
    $rootScope.side = {
        t: '信息公开',
        nav: []
    };
    /*单篇数据加载*/
    $rootScope.oneDetail('ff8080815da203c6015da24e9bd50031');
}]);

/*搜索结果*/
app.controller('search', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$sce', function($scope, $rootScope, $location, $http, $timeout, $sce) {
    $rootScope.mTitle = '搜索结果';
    $rootScope.nav = -1;
    /*侧边栏数据*/
    $rootScope.side = {
        t: '搜索结果',
        nav: []
    };
    $scope.result = 103;
    $scope.data = [
        { title: '暑期研修班“先进制造中的人工智第七届暑期研修班“先进制造中的人工智第七届暑期修班期研', time: '2017-01-01' },
        { title: '暑期研修班“先进制造中的人工智第七届暑期研修班“先进制造中的人工智第七届暑期修班期研', time: '2017-01-01' },
        { title: '暑期研修班“先进制造中的人工智第七届暑期研修班“先进制造中的人工智第七届暑期修班期研', time: '2017-01-01' },
        { title: '暑期研修班“先进制造中的人工智第七届暑期研修班“先进制造中的人工智第七届暑期修班期研', time: '2017-01-01' },
        { title: '暑期研修班“先进制造中的人工智第七届暑期研修班“先进制造中的人工智第七届暑期修班期研', time: '2017-01-01' }
    ];
    /*搜索内容*/
    $http({
        method: 'POST',
        url: 'http://119.29.153.250:10001/cyxy-interface/cms/api/article/list',
        params: { title: $location.search().s }
    }).then(function successCallback(response) {
        $scope.keyword = $location.search().s;
        $rootScope.searchdata = response.data.data;
        $rootScope.searchpage = paging($rootScope.searchdata.currentPage, $rootScope.searchdata.totalPage);
    }, function errorCallback(response) {
        alert('出现错误，请联系管理员。错误信息：' + response);
    });
}]);

/*分页方法*/
function paging(pageNo, totalPages) {
    var strpage = [];
    if (totalPages == 1) {
        strpage = [1];
    } else if (totalPages <= 8) {
        for (var i = 0; i < totalPages; i++) {
            if (i == 0) {
                strpage.push(1);
            } else if (i == (totalPages - 1)) {
                strpage.push(totalPages);
            } else {
                strpage.push(i + 1);
            }
        }
    } else if (pageNo <= 4) {
        strpage = [];
        for (var i = 0; i < 6; i++) {
            strpage.push(i + 1);
        }
        strpage.push('...');
        strpage.push(totalPages);
    } else if (pageNo >= 15) {
        strpage = [1, '...'];
        for (var i = 12; i < totalPages; i++) {
            strpage.push(i + 1);
        }
    } else if (totalPages - pageNo > 3) {
        strpage = [1, '...'];
        for (var i = (pageNo - 3); i < (pageNo + 2); i++) {
            strpage.push(i + 1);
        }
        strpage.push('...');
        strpage.push(totalPages);
    } else {
        strpage = [1, '...'];
        for (var i = (pageNo - 3); i < totalPages - 1; i++) {
            strpage.push(i + 1);
        }
        strpage.push(totalPages);
    }
    return strpage;
};
