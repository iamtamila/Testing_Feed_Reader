# Feed Reader Testing

* [Description](#Description)
* [Rules](#Rules)
* [Stepstoruntheproject](#Stepstoruntheproject)


## Description

This project is a web-based application that reads RSS feeds. Tests provided help to manage if there's any issue with the code.


## Rules

After opening 'index.html' file you'll see some URLs and Jasmine notes below it.
There are 7 specs for Jasmine. By clicking one you'll see if there're errors in code. If code is passing all tests - Jasmine will show 
actual number of specs that are working:

1. The First test checking if allFeeds are defined and not empty.
2. The Second test: "The menu visibility" checking if: <br />
  a. The menu is hidden by default;<br />
  b. The menu changes visibility when clicked.<br />
3. The Third test: "Initial Entries" checking if there's an .entry element within the .feed container.
4. The Fourth test: "New Feed Selection" checking if each new feed changing content.


## Steps to run the project

Open 'index.html' file in your browser. After opening the file there are two ways to run the project:

1. By clicking 'run all tests' or 'Jasmine__TopLevel__' in Jasmine - it will run all the tests that Jasmine has.
2. By clicking on every test separately:<br />
  2.1. 'RSS Feeds' test run 3 specs: <br />
    ..2.1.1.'are defined'; <br />
    ..2.1.2.'URLs are defined'; <br />
    ..2.1.3.'NAME is defined'.<br />
  2.2 'The menu' test run 2 specs: <br />
    ..2.2.1.'The menu is hidden'; <br />
    ..2.2.2.'The menu changes visibility'.<br />
2.3. 'Initial Entries' test run 1 spec:  'Entry element within the feed container'. <br />
2.4. 'New Feed Selection' test run 1 spec: 'New feed changing content'.
