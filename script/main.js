var app = angular.module("gameApp", []);
app.controller("gameCtrl", function($scope) {
    $scope.answers = [{
            "imgUrl1":"http://www.theblackpeppercorn.com/wp-content/uploads/2014/05/How-to-smoke-a-whole-chicken-5.jpg",
            "imgUrl2":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/7da8ce5c-02ce-479f-ba64-8fad76b9a064/dbjrc8j-07e154c3-899e-45a1-b2bb-96ce48d43efa.jpg/v1/fill/w_894,h_894,q_70,strp/magic_night_by_rhads_dbjrc8j-pre.jpg",
            "Q": ["pubg", "chicken dinner"]

        },
        {
            "imgUrl1":"https://www.mensjournal.com/wp-content/uploads/mf/apl-concept-1-main.jpg?w=1200&h=675&crop=1",
            "imgUrl2":"https://trabahotayo.com/wp-content/uploads/job-manager-uploads/company_logo/2017/05/BUM-Logo.png",
            "Q": ["shubham"]
        },
        {
            "imgUrl1":"https://i2-prod.coventrytelegraph.net/incoming/article12584415.ece/ALTERNATES/s1200/GD494099.jpg",
            "imgUrl2":"https://www2.palomar.edu/users/warmstrong/ls2exams/images/Lightning.jpg",
            "Q": ["thor"]
        },
        {
            "imgUrl1":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIzuJVSqK6K03DP0x8oBleE613GlQVeS4fGZrd6mukVzY71JZ",
            "imgUrl2":"https://assets.cdn.moviepilot.de/files/8bc73331974914bc1ac397f3999c2f3a95fadb7cef5e9de0de3ea9466326/fill/640/307/Robert+Downey+Jr.+Iron+Man.jpg",
            "Q": ["iron man","tony"]
        },
        {
            "imgUrl1":"https://cdn-02.independent.ie/world-news/and-finally/article36772890.ece/59de7/AUTOCROP/w620/ipanews_63bc05be-f5fd-4eb8-8806-f67853b14cd9_1",
            "imgUrl2":"https://n1.sdlcdn.com/imgs/g/s/p/Ino-SDL497906461-1-c0c33.jpg",
            "Q": ["ronaldino"]
        }
    ]
    $scope.ans = "";
    $scope.le = 0;
    $scope.nextbu = "NEXT";
    $scope.textCheck = function() {
        $scope.hideLiked = false;
        // console.log($scope.ans, $scope.answers.length);
        // console.log($scope.answers[$scope.le].Q[1].length);
        $scope.lengthExceeded = "";
        $scope.nazdik = "";
        for (var i = 0, j = 0; i < $scope.answers[$scope.le].Q.length, j < 3; i++, j++) {

            if ($scope.ans == $scope.answers[$scope.le].Q[i]) {
                $scope.nazdik = "";
                $scope.lengthExceeded = "";
                $scope.hideLiked = true;
            } else if ($scope.ans.charAt(j) == $scope.answers[$scope.le].Q[i].charAt(j)) {
                $scope.nazdik = "";
                $scope.match = $scope.answers[$scope.le].Q[i];
                $scope.len = $scope.answers[$scope.le].Q[i].length;
                console.log($scope.len);
            } else if ($scope.ans.length > $scope.len) {
                $scope.lengthExceeded = "length exceeded";
            } else if ($scope.ans.length == $scope.len && $scope.ans.charAt(j) == $scope.match.charAt(j) && $scope.ans != $scope.match) {
                $scope.nazdik = "so close";
                console.log('test');
            } else {

            }
        }
    }
    $scope.nextq = function() {
        $scope.ans = "";
        $scope.le++;
        document.getElementById("1").focus();
        $scope.hideLiked = !$scope.hideLiked;
        if ($scope.le > 4) {
            $scope.hideGame = !$scope.hideGame;
            $scope.finish = "Game over"
        } else if ($scope.le >= 4) {
            $scope.nextbu = "FINISHED";
        }
    }
});