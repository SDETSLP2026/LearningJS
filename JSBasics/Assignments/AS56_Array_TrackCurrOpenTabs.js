/*
Array_Assignment-3
PS: Browser Tabs Automation
Scenario: A browser automation framework tracks currently opened tabs.
Question: Declare an array with "Google", "YouTube", "ChatGPT" and:
1. Close the last opened tab
2. Add "GitHub" as the first tab
3. Display tabs in reverse order
*/

/*
Unshift & Shift methods deals with first element operations.
Push & Pop methods deals with last element operations.

Unshift() - First Element add
Push() - Last Element add
Shift() - First Element remove
Pop() - Last Element remove
*/

let openTabs = ["Google", "YouTube", "ChatGPT"];

// 1. Close the last opened tab
console.log("We are closing the last active tab - " + openTabs.pop());

// 2. Add "GitHub" as the first tab
console.log("We are adding GitHub as the first tab - ");
openTabs.unshift("GitHub");
console.log(openTabs); //[ 'GitHub', 'Google', 'YouTube' ]

// 3. Display tabs in reverse order
console.log("We are printng the open tabs in reverse order - " + openTabs.reverse());
