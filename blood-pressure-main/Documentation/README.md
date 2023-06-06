# Requirments
1. Node js
# Installing Dependencies
1. Clone repository into local machine
2. Open a terminal(terminal 1), navigate into relevant directory(ie. Users/blood-pressure)
3. run the following in the termina 1: npm install
4. Open another terminal(terminal 2) navigate into Users/blood-pressure/serverapi2
5. run the following in terminal 2: npm install
6. run the follwing in terminal 1: npm start
7. run the follwing in terminal 2: npm start 

# Confirming everything is Running
1. Ensure local host 3007 is free. If you want to use a different port to launch the json server, go to the package.json file under the serverapi2 folder, and change "3007" located near the "start" field to a port of your choice.
2. Ensure that application is running by going to localhost:3000 in browser
3. Ensure that json server is up and running by going to localhost:3007

# Exploring the app as an excisting user
1. Read the information about hypertension based off my research on the Landing page localhost:3000
2. Click login and enter the values for following fields exactly as you see them. Username: timmy, Password:timtim
3. You can see existing blood pressure values listed under this username. If you don't see any values, click the logout button and try logging in once more. 
4. Click on a given blood pressure value, you will see more information regarding that specific entry.
5. Click on the red button "Back" in order to return to list
6. Click the blue icon for any blood pressure entry of your choice, change a given value and click add at the bottom. You will be redirected to the blood pressure list and the values will be updated.
7. Click on the red trash can icon and you will see that a value has been deleted. If you go to localhost:3007 and click on 'bps' you will see that specific blood pressure entry is no longer there
8. Click on add appointment at the top. Enter a future appointment and click submit. You will see the upcoming appointment displayed at the top. The appointments are sorted by date so the one you're seeing at the top is the upcoming appointment
9. You can also see an average calorie consumption per meal, average cardio session listed at the top.

# Explore the app as a new user
1. Click sign out or navigate back to localhost:3000
2. Click Register
3. Enter in the fields required
4. If an existing username is entered you will not be allowed to proceed and a message will pop up
5. Once registered you can add blood pressures and new appointments