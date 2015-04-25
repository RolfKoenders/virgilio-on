
module.exports = function(/*options*/) {
	var virgilio = this;
	virgilio.extend$('_createAction$', function _createAction$(name, handler) {
		var virgilio = this;
	    var action = _createAction$.super$.call(this, name, handler);
        action.on = (function(event) {
        	virgilio.on(event, action);
        });
	    return action;
	});
}