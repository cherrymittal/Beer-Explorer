({
    goToCart : function(component, event, helper) {
        var action = component.get('c.getCartId');
        // debugger;
        //alert(component.get('v.beerNameList'))
       //alert("In the cart")
        action.setParams({
            'beerList' : component.get('v.beerNameList')
        });
     
        action.setCallback(this, function(response){
            var state = response.getState();
            	 //debugger;
            	//alert(state)
            if(state === 'SUCCESS' || state === 'DRAFT'){
                
                var pageReference = component.find("navigation");
                //alert(JSON.stringify(pageReference))
                var pageReferenceNav = {    
                    "type": "standard__component",
                    "attributes": {
                        "componentName": "c__CartDetail"    
                    },    
                    "state": {
                        "c__cartId": response.getReturnValue()
                    }
                };
                pageReference.navigate(pageReferenceNav, true);
                 
            }else if(state === 'INCOMPLETE'){
                console.log('User is offline System does not support offline');
            }else if(state ==='ERROR'){
                var errors = response.getError();
                if(errors || errors[0].pageMessage){
                    console.log(' page Error ', errors[0].pageMessage);
                }
                if(errors || errors[0].duplicateResults){
                    console.log(' duplicate Error ', errors[0].duplicateResults);
                }
            }else{
                
            }
        });
        $A.enqueueAction(action);
    },
    createCartItems : function(component, event, helper){
        console.log(' Selected Beer ', component.get('v.recordList'));
        var names = [];
        for(var i=0; i<component.get('v.recordList').length;  i++){
            names.push(component.get('v.recordList')[i].Id);
        }
        console.log('Name', names);
        component.set('v.beerNameList', names);
    },
})