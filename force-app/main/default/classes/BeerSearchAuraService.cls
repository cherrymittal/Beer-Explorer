public class BeerSearchAuraService {
	@AuraEnabled
    public static List<sObject> searchBeer (String searchParam){
        //system.debug(searchParam);
        //String Quer = 'Select Id, Name from Beer__c where Id like %' + searchParam + '% LIMIT 10';
        //List<Beer__c> BeerList = Database.query(Quer);
        //system.debug(BeerList);
        system.debug(searchParam);
        String likeParam = '%' + searchParam + '%';
        String Query;
        if(searchParam != null){
            Query = 'Select Id, Name,Alcohol__c, brewery_id__c, brewery_Name__c, Id__c, Price__c, Remaining_Quantity__c, Tags__c, Total_Quantity__c from Beer__c where Name Like :likeParam LIMIT 10';
        }
        else{
            Query = 'Select Id, Name,Alcohol__c, brewery_id__c, brewery_Name__c, Id__c, Price__c, Remaining_Quantity__c, Tags__c, Total_Quantity__c from Beer__c LIMIT 10';
            system.debug(Query);
        }
        List<sObject> sObjectList = Database.query(Query);
        system.debug(sObjectList);
        return (sObjectList);
        
    }
}