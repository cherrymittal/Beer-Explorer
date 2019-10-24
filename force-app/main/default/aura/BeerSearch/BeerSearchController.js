({
	doSearch : function(component, event, helper) {
		var componentEvent = component.getEvent("BeerEvent");
        var searchParam = component.find("searchInput").get("v.value");
        //alert(JSON.stringify(searchParam))
        componentEvent.setParams({
            "searchText" : searchParam
        });
        componentEvent.fire();	
        
	}
})