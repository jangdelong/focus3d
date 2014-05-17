/**
 * @author: Jelon Cheung
 * @date: 2014-5-17
 * @version: 1.0
 *
 */

var focus3D = {
	curIndex: 1,
	$$: function(id) {
		return document.getElementById(id);
	}
};
focus3D.next = function() {
	if (this.curIndex == 6) return;
	this.$$('frame' + this.curIndex).style.webkitTransform = 'rotateX(90deg)';
	this.$$('frame' + this.curIndex).style.transform = 'rotateX(90deg)';

	this.curIndex++;
	this.$$('frame' + this.curIndex).style.webkitTransform = 'rotateX(0deg)';
	this.$$('frame' + this.curIndex).style.transform = 'rotateX(0deg)';
};
focus3D.prev = function() {
	if (this.curIndex == 1) return;
	this.$$('frame' + this.curIndex).style.webkitTransform = 'rotateX(-90deg)';
	this.$$('frame' + this.curIndex).style.transform = 'rotateX(-90deg)';

	this.curIndex--;
	this.$$('frame' + this.curIndex).style.webkitTransform = 'rotateX(0deg)';
	this.$$('frame' + this.curIndex).style.transform = 'rotateX(0deg)';
};
focus3D.init = function() {
	var _this = this;
	_this.$$('next').onclick = function() {
		_this.next();
	};
	_this.$$('prev').onclick = function() {
		_this.prev()
	};
};
focus3D.init();
