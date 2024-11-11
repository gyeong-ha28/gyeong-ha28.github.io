  // 초기화하는 함수(script의 reset)
        // 시작하자마자 이 함수를 시작하라.
        winSzin();

        function winSzin() {
            let winW = $(window).width();
            console.log(winW)
            // submenu 숨기기
            if (winW >= 960) {
                $(".header .submenu").hide();
            }
        }
        // 너비값이 체크하기
        $(window).resize(function() {
            winSzin();
        });
        $(".gnb > ul > li").mouseover(function() {
            // console.log(winW);
            winW = $(window).width();
            if (winW >= 960) {
                $(".gnb > ul > li").find(".submenu").stop().slideDown();
                $("#gnbBg").stop().slideDown(500);
            }
        });
        $(".gnb > ul > li").mouseout(function() {
            winW = $(window).width();
            if (winW >= 960) {
                $(".gnb > ul > li").find(".submenu").stop().slideUp();
                $("#gnbBg").stop().slideUp(500);
            }
        });
        // 모바일 네비게이션 클릭했을 때
        $("#barMenu").click(function(e) {
            e.preventDefault();
            // barMenu를 클릭했을 때 
            $(".gnb").toggleClass("open")
            // .gnb에 open 클래스를 넣는다.
        });
        // width 960이하일 때 메뉴 클릭했을 때 submenu 나오게하기
        $(".gnb > ul >li > a ").click(function(e) {
            if (winW < 960) {
                // 960보다 같거나 작으면 > 충돌나기 때문에 작다 표시만 한다.
                e.preventDefault();
                // 임시 링크 걸린 것 해지
                $(".header .gnb>ul>li>.submenu").stop().slideUp();
                // 새로운 것을 클릭하면 무조건 slideUp되고
                $(this).next("ul").stop().slideToggle();
                // 지금 선택한 아이의 다음의 아이(ul = submenu)stop했다가 slidetoggle 열고 닫아라.
            }
        });
