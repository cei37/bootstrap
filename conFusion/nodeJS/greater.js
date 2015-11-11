(function(global,$) {
    
    function Greater(firstName, lastName, lan) {
        return new Greater.init(firstName,lastName,lan);
    }
    
    Greater.prototype = {};
    
    Greater.init = function(firsName,lastName,lan) {
        var self = this;
        self.firsName = firsName || '';
        self.lastName = lastName || '';
        self.lan = lan || '';
    }
    
    Greater.init.prototype = Greater.prototype;
    
    global.Greater = global.G$ = Greater;
    
}(window,jQuery));