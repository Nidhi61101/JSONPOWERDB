# JSONPOWERDB
## This project is all about JSONPOWERDB and basic operations

## What is JSONPOWERDB?
* JsonPowerDB is a Real-time, High Performance, Lightweight and Simple to Use, Rest API based Multi-mode DBMS. 
JsonPowerDB has ready to use API for Json document DB, RDBMS, Key-value DB, GeoSpatial DB and Time Series DB functionality. 
JPDB supports and advocates for true serverless and pluggable API development.

## Benefits of using JSONPOWERDB
+ Simplest way to retrieve data in a JSON format.
+ Schema-free, Simple to use, Nimble and In-Memory database.
+ It is built on top of one of the fastest and real-time data indexing engine - PowerIndeX.
+ It is low level (raw) form of data and is also human readable.
+ It helps developers in faster coding, in-turn reduces development cost.

## Title:***Student Enrollment Form that will store data in STUDENT-TABLE relation of SCHOOL-DB database.***
###### Input Fields: Roll-No, Full-Name, Class, Birth-Date, Address, Enrollment-Date
###### Primary key: Roll No.

## Description
1. There will be three control buttons [Save], [Update] and [Reset] at the bottom of the form. On page load or any control button click, an empty form will be displayed and the cursor will remain at the first input field in the form which will have the primary key in the relation. All other fields and buttons should be disabled at this time.  

2. User will enter data in the field having primary key   

   *If the primary key value does NOT exist in the database, enable [Save] and [Reset] buttons and move the cursor to the next field and allow the user to enter data in the form.  

        -Check that the data should be valid i.e. no empty fields.  

        -Complete the data entry form and click the [Save] button to store the data in the database and go to step-1.  

   *If the primary key value is present in the database, display that data in the form. Enable [Update] and [Reset] buttons and move the cursor to the next' field in the form. Keep the primary key field disabled and allow users to change other form fields.  

        -Check that the data should be valid i.e. no empty fields.  

        -Click on [Update] button to update the data in the database and go to step-1.  

        -Click [Reset] to reset the form as per the step-1.
        

![Screenshot (24)](https://user-images.githubusercontent.com/68695414/219686652-2b7de304-5bdf-4bc9-b427-f81f305c94b0.png)
