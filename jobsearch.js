import { request } from 'axios';

const options = {
  method: 'POST',
  url: 'https://indeed11.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '908545d881msh1527b6b33a7ada6p157b5ejsncfd8f130f2e3',
    'X-RapidAPI-Host': 'indeed11.p.rapidapi.com'
  },
  data: {
    search_terms: 'sales manager',
    location: 'United States',
    page: '1'
  }
};

const jobListingsContainer = document.getElementById('job-listings-container');

async function fetchJobListings() {
  try {
    const response = await request(options);
    const jobListings = response.data;
    jobListings.forEach(job => {
      const jobElement = document.createElement('div');
      jobElement.classList.add('job-listing');
      jobElement.innerHTML = `
        <h3>${job.title}</h3>
        <p>${job.description}</p>
        <p>Location: ${job.location}</p>
        <p>Company: ${job.company}</p>
        <hr>
      `;
      jobListingsContainer.appendChild(jobElement);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchJobListings();