({
	chang : function(component, event, helper) {
			alert("value changed");
	},
    
    chngeval: function(component, event, helper){
        component.set('v.test', 'hey');
    },
    chngevald : function(component, event, helper){
        component.set('v.test', 'hello');
    }
})