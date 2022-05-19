
// listTable start
    $(document).ready(function() {
        $('#listTable').DataTable({
            "searching": false,
            "ordering": false,
            "info": false,
            "pageLength": 10,
            "lengthChange": false,
            "language": {
                "processing": "處理中...",
                "loadingRecords": "載入中...",
                "lengthMenu": "每頁顯示 _MENU_ 項結果",
                "zeroRecords": "沒有符合的結果",
                "info": "顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
                "infoEmpty": "顯示第 0 至 0 項結果，共 0 項",
                "infoFiltered": "(從 _MAX_ 項結果中過濾)",
                "infoPostFix": "",
                "search": "搜尋:",
                "paginate": {
                    "first": "第一頁",
                    "previous": "<",
                    "next": ">",
                    "last": "最後一頁"
                },
            }
        });
    });
// listTable end
// slick start
    $(document).ready(function() {
        $('.responsive').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
// slick end

// 字體閃爍 start
    $(function() {
        setInterval(flicker, 2500); //迴圈閃爍，間隔2.5秒
    })

    function flicker() { //閃爍函數
        $('.shine').fadeOut(500).fadeIn(500);
    }
// 字體閃爍 end