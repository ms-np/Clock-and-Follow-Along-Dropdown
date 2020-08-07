# Development Strategy

> `separation-of-concerns-project-week-2`

## Clock-and-Follow-Along-Dropdown

The collaborative reconstruction of Wes Bos JavaScript30 tutorials from Day 2(CSS + JS Clock) and Day 26(Stripe Follow Along Dropdown) by the team of enthusiastic developers.

## Wireframe

![wireframe](images/wireframe.jpg)

## 0. Set-Up

> repository owner: Nadia

**As a User I can see an empty site at the correct URL**

**As a fellow developer I can see the prepared repository**

### Repo

1. Generate a new repo from [javascript-30-starter](https://github.com/HackYourFutureBelgium/javascript-30-starter)
2. Create initial README file
3. Turn on GitHub Pages
4. Add collaborators
5. Create initial development-strategy
6. Prepare a project board

---

## 1. HTML&CSS structure

> assigned to Nadia

**As a site visitor, I want to see the website layout and elements**

### Repository

- developed on a branch called `styling`

### JS

- [ ] no changes

### HTML

- [ ] nav element holding nav tabs as unordered list
- [ ] list items of the nav tab holding the nav links
- [ ] div element as a dropdown with different structure for each nav tab

### CSS

- [ ] styling of the httml document and its body
- [ ] styling of the nav bar, nav links, nav tabs
- [ ] styling of the dropdown element, and inner content, links, and buttons

---

## 2. Clock-html

> assigned to Mamé

**As a site visitor, I want to see website without style so that I can see starting point of the project**

### Repository

- [x] main user story feature branch is `clock-html-style-main`
- [x] developed on a branch called `clock-html`

### JS

- [x] Nothing has changed

### HTML

- [x] add `div` tags give classes name each of them

### CSS

- [x] nothing has changed

---

## 3.Clock-style

> assigned to Mamé

**As a site visitor, I want to see styled clock so that I can see hour,minute second hand on the clock face **

### Repository

- [x] main user story feature branch is `clock-html-style-main`
- [x] developed on a branch called `clock-style`

### JS

- [x] Nothing has changed

### HTML

- [x] Add one more div to make a spot on the hands of clock

### CSS

- Styled div tags
- Used `transform: rotate(deg)` property to make (h-m-s)hand in the motion
- Used `transform-origin` property to change origin of hand to top-left
- Used `z-index` property to overlap each hand respectively

## 4. Clock Js

> assigned to Murielle

**As a site visitor, I want to see the clock showing on the webpage**

### Repository

- main user story feature branch is `clock-html-style-main`
- developed on a branch called `clock-js`

### HTML

- add the link of the script

### CSS

- nothing to change

### JS

- add handler and listener for the clock to work

## 5. Dropdown Enter

> assigned to Eltayeb

**As a site visitor, I want to see the content of the dropdown menu when hovering the mouse**

### Repository

- developed on a branch called `dropdown-enter` with two other branches `enter-handler` and `enter-listener`

### Handler

- write enterHandler to react to the event `mouseenter`

### Listener

- Add a `mouseenter` event listener on the li's.

### CSS

- Change display property for classes trigger-enter and dropdown
- Set the value of opacity property of classes trigger-enter-active and dropdown to 1
- Set the value of opacity property of class one to 1

## 6. Dropdown Leave

> assigned to Miroslav

**As a site visitor, I want to close the content from the dropdown menu list when the mouse leave**

### Repository

- developed on a branch called `dropdown-leave`

### JS

- Adding event listeners to all _li_ elements with 'mouseleave' type of event
- Writing _leaveHandler_ function to handle the logic when the mouse leave

### HTML

- Adding links to both scripts, listener and handler

### CSS

- No styling has been added in this user story
