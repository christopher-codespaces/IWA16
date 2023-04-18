const MONTHS = [
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug",
"Sep",
"Oct",
"Nov",
"Dec",
];

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
        date: "2022-11-18T20:00:00.000Z",
        time: [9, 7, 8, 6],
      },
      {
        date: "2022-12-02T20:00:00.000Z",
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
        date: "2022-11-18T20:00:00.000Z",
        time: [10, 8, 3, 12],
      },
      {
        date: "2022-11-25T20:00:00.000Z",
        time: [6, 8, 9, 11],
      },
      {
        date: "2022-12-02T20:00:00.000Z",
        time: [10, 11, 4, 8],
      },
      {
        date: "2022-12-09T20:00:00.000Z",
        time: [9, 8, 9, 11],
      },
    ],
  },
},

const createHtml = (athlete) => {
  const { firstName, surname, id, races } = athlete;
  const [latestRace] = races.slice(-1);
  const { date, time } = latestRace;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const totalMinutes = time.reduce((acc, curr) => acc + curr, 0);
  const hours = Math.floor(totalMinutes / 60).toString().padStart(2, '0');
  const minutes = (totalMinutes % 60).toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`;

  const section = document.querySelector(`[data-athlete="${id}"]`);
  section.innerHTML = `
    <h2>${id}</h2>
    <dl>
      <dt>Full name</dt>
      <dd>${firstName} ${surname}</dd>
      <dt>Total Races</dt>
      <dd>${races.length}</dd>
      <dt>Event Date (Latest)</dt>
      <dd>${formattedDate}</dd>
      <dt>Total Time (Latest)</dt>
      <dd>${formattedTime}</dd>
    </dl>
  `;
};

//still tying to figure it out 