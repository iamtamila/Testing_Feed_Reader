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
4. The Fourth TEST: New Feed Selection checking if each new feed changing content.

## Steps to run the project

There are two ways to run the project:

1. By clicking 'run all tests' in Jasmine - it will run all the tests that Jasmine has.
2. By clicking on every test separately - it will run only one test at a time.
