# ProjectTitle:User-Managment

Description

The Team User-Managment App is a versatile tool designed to simplify user management and team creation processes. It allows users to fetch and filter user data based on various criteria such as search terms, gender, domain expertise, and availability. Additionally, users can seamlessly create and store teams, enhancing collaboration and project management efficiency.

Key Features
(a). User Data Fetching: Fetch user data effortlessly to streamline user management.

(b). Flexible Filtering: Apply filters based on search terms, gender, domain expertise, and availability to narrow down results.

(c). Team Creation: Create and store teams seamlessly for improved collaboration and project management.

(d). Team Navigation: Easily navigate to the team page to access and manage team lists.

(e). Member Details: View detailed information about team members, including their roles, expertise, and contact details.

# Installation

1.Ensure Node.js and npm are installed: Angular requires Node.js and npm to be installed on your system. You can download and install them from the Nodejs website.

2.Run this Command install all paroject dependencies to get install.
```
npm install
```
3.Make sure to insatll json server.
```
npm install -g json-server
```
4.Then, you can start JSON Server and specify the JSON file you want to watch.
```
json-server --watch data.json
```
5.Start the development server:
```
ng serve -o
```

# Usage

1. User View
   • As you will redirected to the User View of the App
   and if you want to navigate to Team View than in header section you will find the option to navigate.
   ![Screenshot](/src/assets/header.png "Header")

• Now in User View you will find searchbar and filter like gender,domain nad availibility by which you can search user acoording to this three filter.
![Screenshot](/src/assets/filters.png "Header")

• To create Team you need to select the team, to select the team there is button name select user is provided that enable you for selecting users for a team.
![Screenshot](/src/assets/selectUser.png "Header")

• For creating a team after the user get selected you have createTeam button in filter section which will open a Pop up where you cand define a Team Name and add button will add user to data.json file.
![Screenshot](/src/assets/addUser.png "Header")

2. Team View
   • In the Team View of the app you will see the Team list in which you can see team memeber of the particular Team by clicking on showmember button.
   ![Screenshot](/src/assets/Team.png "Header")
   • To see individual member info from the Team cleck on that memeber and a card will open on left side of it.To clode that card close button is provided.
   ![Screenshot](/src/assets/member.png "Header")

# Contact

mail:manish159rai@gmail.com
linkedin:www.linkedin.com/in/manish1rai
