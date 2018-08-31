(function($, doc) {
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
				areaResult.innerText = items[0].text;
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
				areaResult2.innerText = items[0].text;
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
	
	});
	//时间选择器
	var result = $('#result')[0];
	var btns = $('.btn');
	var date=new Date;
	var year=date.getFullYear(); 
	var month=date.getMonth()+1;
	month =(month<10 ? "0"+month:month); 
	var mydate = (year.toString()+'-'+month.toString());
	console.log(mydate)
   result.innerText = mydate
	btns.each(function(i, btn) {
		btn.addEventListener('tap', function() {
			var _self = this;
			if(_self.picker) {
				_self.picker.show(function (rs) {
					result.innerText = rs.text;
					_self.picker.dispose();
					_self.picker = null;
				});
			} else {
				var optionsJson = this.getAttribute('data-options') || '{}';
				var options = JSON.parse(optionsJson);
				var id = this.getAttribute('id');
				/*
				 * 首次显示时实例化组件
				 * 示例为了简洁，将 options 放在了按钮的 dom 上
				 * 也可以直接通过代码声明 optinos 用于实例化 DtPicker
				 */
				_self.picker = new $.DtPicker(options);
				_self.picker.show(function(rs) {
					/*
					 * rs.value 拼合后的 value
					 * rs.text 拼合后的 text
					 * rs.y 年，可以通过 rs.y.vaue 和 rs.y.text 获取值和文本
					 * rs.m 月，用法同年
					 * rs.d 日，用法同年
					 * rs.h 时，用法同年
					 * rs.i 分（minutes 的第二个字母），用法同年
					 */
					result.innerText = rs.text;
					/* 
					 * 返回 false 可以阻止选择框的关闭
					 * return false;
					 */
					/*
					 * 释放组件资源，释放后将将不能再操作组件
					 * 通常情况下，不需要示放组件，new DtPicker(options) 后，可以一直使用。
					 * 当前示例，因为内容较多，如不进行资原释放，在某些设备上会较慢。
					 * 所以每次用完便立即调用 dispose 进行释放，下次用时再创建新实例。
					 */
					_self.picker.dispose();
					_self.picker = null;
				});
			}
			
		}, false);
	});
})(mui, document);