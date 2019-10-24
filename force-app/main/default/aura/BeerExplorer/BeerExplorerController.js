({
	handleCompEvent : function(component, event, helper) {
        var searchParam = event.getParam('searchText');
        //alert(searchParam);
        var cmp = component.get("c.searchBeer");
        cmp.setParams({"searchParam" : searchParam});
        cmp.setCallback(this, function(response){
            var state = response.getState();
            if (state === 'SUCCESS'){
                var responseValue = response.getReturnValue();
                component.set('v.beerList', responseValue);
                console.log('responseValue', responseValue);
            }
            else{
             console.log(response.getError());
            }
            
        });
        $A.enqueueAction(cmp);
		
	},
    
    updateCart : function(component, event, helper){
        var params = event.getParam('beerRecord');
        //component.set('v.beerRecord', beerRecord);
        var headerComp = component.find('headerComp');
        headerComp.updateCart(params);
    }
    
    
})