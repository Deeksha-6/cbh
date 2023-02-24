# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
Would divide the task into following tickets - 
1.Create a new field customId in the Agents Table which holds the customId value for each Agent
    Acceptance Criteria - New Field called Custom ID should be added to the Agent Table 
     ALTER TABLE Agent ADD CustomId varchar(255);
     Check if the new field is added in the table by running desc on the Agent table
     1 working day Time estimate
2. Have ticket to accept the custome Id for each Agent - It could be through a custom script to generate the custom Id the facility client would like to add. 
    Acceptance Criteria - UI to accept the custom script to generate the custom id for each Agent or may be a field which accepts the custom id for each Agent. This id should be stored in a new field 
    Create an Input to accept the script to generate the UI script 
    Or have Field to accept the Custom Id in the UI Form for each Agent which will be stored in the CustomId field in the Agent Table
    Have test to see valid custom Id is stored in the Agent table 
    3 working day time estimate
3. Changes to the getShiftsByFacility to make sure the custom Id of the Agent is displayed for the metadata for the Agent .Requirements - Custom Id included in Agents Meta data information.
  Acceptance Criteria - Custom ID for each Agent worked in the Shifts should be displayed as that is the identifying information for the Facility. 
  Include Test to validate the above
  2 working day time estimate to make sure changes are thorough
  Make sure the custom ID is  included Agents metadata information in the Shifts information based on the Facitlity
4. Changes to the generateReport to make sure the custom Id of the Agent is displayed for the metadata for the Agent as that is the identifying ID for the client. 
  Acceptance Criteria -
   Make sure custom Id is displayed for each Agent displayed in the report
   Add test to make sure  valid custom ID is displayed for each Agent in quarter report 
   2 working days to make sure the changes and test work as expected.
 
