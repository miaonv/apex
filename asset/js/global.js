

// 移动端导航显示隐藏控制
$(".open_menu").click(function(){
    $(this).hide();
    $(this).addClass("uk-animation-slide-left-small");
    // $(".header_menu").show();
    $(".header_menu").addClass("display-block");
    $(".header_menu").removeClass("display-none");
    $(".close_menu").show();

});
$(".close_menu").click(function(){
    $(this).hide();
    $(this).addClass("uk-animation-slide-left-small");
    $(".open_menu").show();
    // $(".header_menu").hide();
    $(".header_menu").addClass("display-none");
    $(".header_menu").removeClass("display-block");
});


// 第一页banner 替换cover封面图片
window.onresize = function(event) {  
    var img = document.getElementById('bannerImage');  
    if (window.innerWidth < 960) {  
        img.src = 'asset/images/banner3_bg.png'; // 当宽度小于1000时使用的图片地址  
    } else {  
        img.src = 'asset/images/banine1.svg'; // 当宽度大于或等于1000时使用的图片地址  
    }  
};  
  
// 在页面加载时也执行一次，以确保在页面首次加载时图片大小也正确  
window.onresize();  




// 返回页面顶部 初始化滚动组件
UIkit.scroll(scrollup_top, {
    duration: 200, // 动画持续时间（毫秒）
    offset: 0     // 目标位置偏移量
});
// 为返回顶部链接添加点击事件处理函数
document.getElementById('scrollup_top').addEventListener('click', e => {
    e.preventDefault(); // 阻止默认的点击行为
    // 使用UIkit的scrollTo方法平滑滚动到文档的顶部
    UIkit.scroll(document.body).scrollTo(0);
});
window.addEventListener('scroll', function() {  
    var button = document.getElementById('scrollup_top');  
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;  
  
    if (scrollPosition > 300) {  
        button.style.display = 'block'; // 当滚动位置超过300px时显示按钮  
    } else {  
        button.style.display = 'none'; // 当滚动位置小于等于300px时隐藏按钮  
    }  
});



// 'countUp'：需要添加数字动画的元素 ID。
// 0：起始数字。
// 1000：结束数字。
// 0：小数位数。
// 2.5：动画持续时间（秒）。
// options：传递 CountUp.js 配置，例如：是否启用缓动效果、是否启用千分位分组等。
$(document).ready(function(){
    var options = {
        useEasing : true, // 是否启用缓动效果
        useGrouping : true, // 是否启用千分位分组
        separator : ',', // 千位分隔符
        decimal : '.', // 小数点
        prefix : '$', // 前缀
        suffix : '' // 后缀
    };
    // var countUp = new CountUp('countUp', 0, 1000, 0, 2.5, options); // countUp 参数解释
    // countUp.start(); // 开始数字动画
    var a = new countUp.CountUp("counter1",  50, 1000, 0, 2.5)
    a.start();
    var b = new countUp.CountUp("counter2",  50, 1000, 0, 2.5)
    b.start();
    var c = new countUp.CountUp("counter3",  100, 1000, 0, 2.5)
    c.start();
    //About APEX data show
    var a = new countUp.CountUp("dat65",  65, 1000, 0, 2.5)
    a.start();
});

// Home 学生感言
var swiper = new Swiper(".star_circle_Swiper", {
  slidesPerView: 3,
  initialSlide :1,//默认第二个
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    // type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    on: {
        slideChange: function() {
          // 移除其他slide的阴影
          this.slides.forEach(slide => slide.classList.remove('swiper-slide-active'));
          // 给当前active的slide添加阴影
          this.activeIndex && this.slides[this.activeIndex].classList.add('swiper-slide-active');
        }
      }
});


// 老师负责学校列表
$(".open_school_list").click(function(){
    $(".school_locations").show();
});
$(".close_school_list").click(function(){
     $(".school_locations").hide();
});




