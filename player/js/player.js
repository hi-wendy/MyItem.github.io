var offOn=true;
var totaltime=0;
var playtime=0;
var num=0;
var timer=null;
var curtime=0;
var proL=0;
var musicArr=[
			'http://mpge.5nd.com/2015/2015-6-7/67375/1.mp3',
			'http://mpge.5nd.com/2010/2010b/2013-10-9/61031/1.mp3',
			'http://mpge.5nd.com/2015/2015-5-20/67147/1.mp3',
			'http://mpge.5nd.com/2010/2010b/2013-11-12/61352/3.mp3',
			'http://mpge.5nd.com/2006/x/20066128120301/81222782.mp3'
			];
var music=$('#player')[0];
//播放暂停
$('.playBtn').click(function() {
	if (offOn) {
		music.play();
		offOn=false;
	}else {
		music.pause();
		offOn=true;
	}
});
//歌曲切换按钮
$('footer>div').click(function () {
	num=$(this).index();
	changeM();
});
//上一首
$('.upBtn').click(function() {
	num--;
	num=num<0?4:num;
	changeM();
});
//下一首
$('.downBtn').click(function() {
	num++;
	num=num>4?0:num;
	changeM();
});
//重新加载歌曲按钮
// $('.res').click(function() {
// 	music.load();
// });
//拖动条
$('.pro').mousedown(function(ev) {
	ev=ev||event;
	proL=ev.pageX-$(this).offset().left;
	proL=proL<0?0:proL;
	proL=proL>330?330:proL;
	$(this).find('p').width(proL);
	console.log(proL);
	document.onmousemove=function(ev) {
		ev=ev||event;
		proL=ev.pageX-$('.pro').offset().left;
		proL=proL<0?0:proL;
		proL=proL>330?330:proL;
		$('.pro>p').width(proL);
	};
	document.onmouseup=function () {
		document.onmousemove=null;
		document.onmouseup=null;
	};
});
//播放时触发
music.onplay=function () {
	$('.playBtn').addClass('glyphicon-pause').removeClass('glyphicon-play');
	$('.head').css('transform','rotateZ(0deg)');
	$('.cd').css('animation-play-state', 'running');
	$('footer>div').eq(num).addClass('active').siblings().removeClass('active');
	offOn=false;
};
//暂停时触发
music.onpause=function () {
	$('footer>div').removeClass('active');
	$('.playBtn').addClass('glyphicon-play').removeClass('glyphicon-pause');
	$('.head').css('transform','rotateZ(-17deg)');
	$('.cd').css('animation-play-state', 'paused');
	offOn=true;
}
//当媒介元素的持续时间以及其他媒介数据已加载时运行脚本

//当媒介长度改变时运行脚本
music.ondurationchange=function () {
	totaltime=$('#player')[0].duration;
	$('.ttime').html(addZero(parseInt(totaltime/60))+":"+addZero(parseInt(totaltime%60)));
}

music.onplaying=function () {
	console.log('当媒介数据已开始播放时运行脚本');
	$('.playBtn').addClass('glyphicon-pause').removeClass('glyphicon-play');
	$('.head').css('transform','rotateZ(0deg)');
	$('.cd').css('animation-play-state', 'running');
}
music.onprogress=function () {
	console.log('当浏览器正在取媒介数据时运行脚本');
}
//当目前的播放列表已结束时触发。
music.onended=function () {
	num++;
	num=num>4?0:num;
	changeM();
}
music.onratechange=function () {
	console.log('当媒介数据的播放速率改变时运行脚本');
}
music.onreadystatechange=function () {
	console.log('当就绪状态（ready-state）改变时运行脚本');
}
music.ontimeupdate=function () {
	console.log('当媒介改变其播放位置时运行脚本');
	curtime=$('#player')[0].currentTime;
	$('.ptime').html(addZero(parseInt(curtime/60))+":"+addZero(parseInt(curtime%60)));
	$('.pro>p').width(curtime/totaltime*330);
}
music.onwaiting=function () {
	$('.playBtn').addClass('glyphicon-play').removeClass('glyphicon-pause');
	$('.head').css('transform','rotateZ(-17deg)');
	$('.cd').css('animation-play-state', 'paused');
	console.log('当媒介已停止播放但打算继续播放时运行脚本');
}
music.oncanplay=function () {
	console.log('当媒介能够开始播放但可能因缓冲而需要停止时运行脚本');
}
//加0处理
function addZero(n) {
	return n=n<10?('0'+n):n;
}
function changeM() {
	
	$('#player>source').attr('src', musicArr[num]);
	$('.musicBox>h2').text($('footer>div').eq(num).find('h2').text());
	$('.musicBox>span:first').text($('footer>div').eq(num).find('span:first').text());
	$('.musicBox>span:last').text($('footer>div').eq(num).find('span:last').text());
	music.load();
	music.play();
}
