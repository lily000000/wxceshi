(function($, doc,$$) {
	$.init();
	$.ready(function() {
		/**
		 * 获取对象属性的值
		 * 主要用于过滤三级联动中，可能出现的最低级的数据不存在的情况，实际开发中需要注意这一点；
		 * @param {Object} obj 对象
		 * @param {String} param 属性名
		 */
		var _getParam = function(obj, param) {
			return obj[param] || '';
		};
		//更多区域
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: 'ywj',
			text: '董事长 叶文洁'
		}, {
			value: 'aaa',
			text: '总经理 艾AA'
		}, {
			value: 'lj',
			text: '罗辑'
		}]);
		var showUserPickerButton = doc.getElementById('showUserPicker');
		var areaResult = doc.getElementById('areaResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				areaResult.value = items[0].text;
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
		//更多门店
		//-----------------------------------------
		var userPicker2 = new $.PopPicker();
		userPicker2.setData([{
			value: 'ywj',
			text: '文一路'
		}, {
			value: 'aaa',
			text: '文二路'
		}, {
			value: 'lj',
			text: '文三路'
		}]);
		var showUserPickerButton2 = doc.getElementById('showUserPicker2');
		var areaResult2 = doc.getElementById('areaResult2');
		showUserPickerButton2.addEventListener('tap', function(event) {
			userPicker2.show(function(items) {
				areaResult2.value = items[0].text;
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);

		var userPicker3 = new $.PopPicker();
		userPicker3.setData([{
			value: 'ywj',
			text: '文一路'
		}, {
			value: 'aaa',
			text: '文二路'
		}, {
			value: 'lj',
			text: '文三路'
		}]);
		var showUserPickerButton3 = doc.getElementById('showUserPicker3');
		var areaResult3 = doc.getElementById('areaResult3');
		showUserPickerButton3.addEventListener('tap', function(event) {
			userPicker3.show(function(items) {
				areaResult3.value = items[0].text;
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);

		var userPicker4 = new $.PopPicker();
		userPicker4.setData([{
			value: 'ywj',
			text: '文一路'
		}, {
			value: 'aaa',
			text: '文二路'
		}, {
			value: 'lj',
			text: '文三路'
		}]);
		var showUserPickerButton4 = doc.getElementById('showUserPicker4');
		var areaResult4 = doc.getElementById('areaResult4');
		showUserPickerButton4.addEventListener('tap', function(event) {
			userPicker4.show(function(items) {
				areaResult4.value = items[0].text;
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
		//选择门店
		var userPicker5 = new $.PopPicker();
		userPicker5.setData([{
			value: 'ywj',
			text: '文一路'
		}, {
			value: 'aaa',
			text: '文二路'
		}, {
			value: 'lj',
			text: '文三路'
		}]);
		var showUserPickerButton5 = doc.getElementById('showUserPicker5');
		var areaResult5 = doc.getElementById('areaResult5');
		showUserPickerButton5.addEventListener('tap', function(event) {
			userPicker5.show(function(items) {
				areaResult5.value = items[0].text;
				//返回 false 可以阻止选择框的关闭
				//return false;
				$$('.stores-information').css('display','block')
			});
		}, false);

	});
	//点击查询
	$$('.bind-new').on('tap',function(){
		window.location.href="bind-device.html"
	})
})(mui, document,jQuery);