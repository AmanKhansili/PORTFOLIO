import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json"; // Path to your JSON file

const makeCommits = (startDate, endDate) => {
    let currentDate = moment(startDate); // Start date
    const end = moment(endDate); // End date

    const commitNextDate = () => {
        // If current date is past the end date, stop
        if (currentDate.isAfter(end)) {
            return simpleGit().push(); // Push all commits to the remote repository
        }

        const date = currentDate.format(); // Format the date for commit
        const data = { date };

        console.log(`Committing on: ${date}`); // Log the date for debugging

        // Write the data to the JSON file and make the commit
        jsonfile.writeFile(path, data, (err) => {
            if (err) {
                console.error(`Error writing file: ${err}`);
                return;
            }
            // Add and commit with the specified date
            simpleGit()
                .add([path])
                .commit(date, { "--date": date }, commitNextDate); // Recursively commit next date
        });

        currentDate.add(1, 'days'); // Move to the next day
    };

    commitNextDate(); // Start the commit process
};

// Call the function with the desired date range
makeCommits("2024-02-12", "2024-03-02");
