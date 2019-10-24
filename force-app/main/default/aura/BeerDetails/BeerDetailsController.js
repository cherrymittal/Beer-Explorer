({
    doOrder : function(component, event, helper) {
        
        
        console.log('Inside Bear Details Controller');
        var navComp = component.find("navigation");
        
        /*var pageReferenceNav = {
                    "type": "standard__component",
                    "attribute": {
                        "ComponentName": "c__CreateBeerOrder"
                    },
                    "state": {
                        "beerId": component.get('v.beerId')
                    }
                    
                };
                
                alert(pageReferenceNav.state.beerId);
                pageReference.navigate(pageReferenceNav);
                */
        
        var bid = component.get('v.beerId');
        var pageReference = {    
            "type": "standard__component",
            "attributes": {
                "componentName" : "c__CreateBeerOrder"    
            },
            "state": {
                "c__beerId": bid
            }
        }    
        navComp.navigate(pageReference);
    }
})