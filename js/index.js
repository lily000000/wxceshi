$(function() {
	var chart = new Highcharts.Chart('container', {
		    title: {
		       text: '销售额/元',
			align: 'left',
			style: {
				color: '#262626',
				fontSize: '.24rem'
			}
		    },
		     colors:[
                    '#197DEC',   
                  ],
                  lineWidth:0,
		    xAxis: {
		    	lineWidth: 1,
		    	lineColor: '#E9E9E9',
		        categories: ['06-01', '06-15', '07-01', '07-15', '08-15', '09-01', '09-15']
		    },
		    yAxis: {
		        title: {
		          text: null,
		        },
		        labels:{
				format: '{value:.,0f}',

			},
		    },
		     plotOptions: {
                        series: {
                        lineWidth: 1     
                        },
                        line: {
                            dataLabels: {
                                enabled: true,          // 开启数据标签
                                style:{
                                	color:'#666666'
                                }
                            },
                            enableMouseTracking: false // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                        }

                    },
		    credits: {
	            enabled:false
	       },//禁掉网址
		    legend: {
		        layout: 'vertical',
		        align: 'right',
		        verticalAlign: 'middle',
		        borderWidth: 0
		    },
		    series: [{
		    	name: '销售额',
		        data: [0, 298, 68, 137, 81, 98, 0],
		        showInLegend: false,

		    }]
		})
	
	$('.deviceList').on('click',function(){
		window.location.href ="pages/device-list.html"
		
	})
	$('.todayreport').on('click',function(){
		window.location.href ="pages/today-report.html"
		
	})
	$('.monthlyreport').on('click',function(){
		window.location.href ="pages/monthly-report.html"
		
	})
	
})
//折线图
