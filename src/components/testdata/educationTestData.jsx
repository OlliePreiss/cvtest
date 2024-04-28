import { v4 as uuidv4 } from 'uuid';

const educationTestData = [
  {
    id: uuidv4(),
    description: {
      school: 'Oxford',
      course: "MSc Computer Science",
      startDate: "2012",
      endDate: "2016",
      grade: "1st Class Hons"
      }
    },
  {
    id: uuidv4(),
    description: {
      school: 'Dulwich College',
      course: "Maths, Physics, Economics, English Literature",
      startDate: "2007",
      endDate: "2012",
      grade: "A*A*AA"
      }
    }
]

export default educationTestData;
