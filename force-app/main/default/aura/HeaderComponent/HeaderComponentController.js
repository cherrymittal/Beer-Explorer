({
	handleCompEvent : function(component, event, helper) {
        var searchParam = event.getParam('searchText');
		
	},
    updateCart  : function(component, event, helper){
        var params = event.getParam('arguments');
        if(params){
           // alert(JSON.stringify(params))
            var beerRecord = params.beerRecord;
            var existingRecords = component.get('v.recordList');
            //alert(JSON.stringify(beerRecord))
            if(existingRecords){
                existingRecords.push(beerRecord);
                component.set('v.recordList', existingRecords);
            } else {
                existingRecords = [];
                existingRecords.push(beerRecord);
                component.set('v.recordList', existingRecords);
            }
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Success!",
                "type" : "success",
                "message": beerRecord.Name+ " has been added to the cart."
            });
            //alert(component.get('v.recordList'))
            toastEvent.fire();
    }
    }
})