# Feed Reader Testing

* [Description](#Description)
* [Rules](#Rules)
* [Stepstoruntheproject](#Stepstoruntheproject)


## Description

This project is a web-based application that reads RSS feeds. Tests provided by developer help to manage if there's any issue with the code.


## Rules

After opening 'index.html' file you'll see some URLs and Jasmine notes below it.
There are 7 specs for Jasmine. By clicking one you'll see if there're errors in code. If code is passing all tests - Jasmine will show 
actual number of specs that are working:

1. The First test checking if allFeeds are defined and not empty.
2. The Second test: "The menu visibility" checking if: 
  a. The menu is hidden by default;
  b. The menu changes visibility when clicked.
3. The Third test: "Initial Entries" checking if there's an .entry element within the .feed container.
4. The Fourth test: "New Feed Selection" checking if each new feed changing content.


## Steps to run the project

Open 'index.html' file in your browser. After opening the file there are two ways to run the project:

1. By clicking 'run all tests' or 'Jasmine__TopLevel__' in Jasmine - it will run all the tests that Jasmine has.
2. By clicking on every test separately:

2.1. 'RSS Feeds' test run 3 specs: 

a.'are defined'; 
b.'URLs are defined'; 
c.'NAME is defined'.

2.2 'The menu' test run 2 specs: 
a.'The menu is hidden'; 
b.'The menu changes visibility'.

2.3. 'Initial Entries' test run 1 spec:  'Entry element within the feed container'.
2.4. 'New Feed Selection' test run 1 spec: 'New feed changing content'.
