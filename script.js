// scripts.js

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const createHtml = (athlete) => {
  const { firstName, surname, id, races } = athlete;
  const [latestRace] = races.slice(-1);
  const { date, time: timeAsArray } = latestRace;

  const fragment = document.createDocumentFragment();

  const title = document.createElement('h2');
  title.textContent = id;
  fragment.appendChild(title);

  const list = document.createElement('dl');

  const day = new Date(date).getDate();
  const month = MONTHS[new Date(date).getMonth()];
  const year = new Date(date).getFullYear();

  const [first, second, third, fourth] = timeAsArray;
  const total = first + second + third + fourth;

  const hours = Math.floor(total / 60);
  const minutes = total % 60;

  list.innerHTML = /* html */ `
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd>

    <dt>Total Races</dt>
    <dd>${races.length}</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dd>
  `;

  fragment.appendChild(list);

  return fragment;
}

const [NM372, SV782] = Object.values(data.response.data);

document.querySelector('#NM372').appendChild(createHtml(NM372));
document.querySelector('#SV782').appendChild(createHtml(SV782));


// Added quotation marks around the tag names in document.createElement().
// Fixed the destructuring assignment of firstName, surname, id, and races by surrounding them in parentheses.
// Changed the destructuring assignment of date and time to use array destructuring rather than object destructuring.
// Added a return statement to createHtml() to return the fragment.
// Changed the syntax of the destructuring assignment of [NM372] and [SV782] to const NM372 = data.response.data.NM372 and const SV782 = data.response.data.SV782, respectively.
// Changed the argument to querySelector() to be a string with a # before the athlete ID, e.g., document.querySelector('#NM372').
// Fixed the syntax of the string template in the innerHTML assignment by adding the + operator to concatenate the firstName and surname variables and adding a comma between the day and month variables.
// Converted the hours and minutes variables to strings using toString() before calling padStart() on them.
// This code defines a function named createHtml that takes an athlete object as a parameter. The function extracts properties firstName, surname, id, and races from the athlete object using destructuring assignment. It then retrieves the latest race from the races array using the slice method and destructures the date and time properties from the latest race object.

// Next, the code creates a document fragment using document.createDocumentFragment(). A title element is created and added to the fragment with the id property of the athlete. Then, a definition list (dl) element is created, and the athlete's information is added to it, including their name, total number of races, the date of their latest race, and the total time of their latest race. The time is calculated by summing the four elements of the timeAsArray array and converting it to hours and minutes.

// Finally, the dl element is added to the fragment, and the function returns the fragment.

// The code then defines two variables, NM372 and SV782, which are assigned the values of the 1st and 2nd properties in the data.response.data object, respectively, using Object.values. The values of these properties are assumed to be athlete objects.

// Finally, the code finds two elements with the ids NM372 and SV782 using document.querySelector, and appends the corresponding athlete's information to each element by calling the createHtml function with the athlete object and appending the resulting fragment to the respective element.