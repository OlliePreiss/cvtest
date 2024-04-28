import { v4 as uuidv4 } from 'uuid';

const experienceTestData = [
  {
    id: uuidv4(),
    description: {
      employer: 'Stripe',
      roleTitle: "Senior Engineer",
      startDate: "June 2019",
      endDate: "Present",
      responsibilities: "Managing the SMB product suite, overseeing the consolidation of services into a central platform and the development of new products"
      }
  },
  {
    id: uuidv4(),
    description: {
      employer: 'Google',
      roleTitle: "Full-stack Engineer",
      startDate: "Sept 2016",
      endDate: "May 2019",
      responsibilities: "Managed performance updates to the Google Maps API, reducing overall response times by 4%"
      }
    },
]

export default experienceTestData;
