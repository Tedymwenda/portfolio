const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https:///github.com/Tedymwenda/portfolio',
  title: 'TedyMwenda.com',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tedy Mwenda',
  role: 'Front End Engineer',
  // description:
    // 'This is to facilitate easier Export .',

  resume: 'https://gitconnected.com/tedymwenda/resume',
  social: {
    linkedin: 'https://linkedin.com/in/Tedymwenda',
    github: 'https://github.com/Tedymwenda/',
    googlemaps:'https://www.google.com/maps/embed/v1/place?q=Meru,nkurune&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
  },
}

const projects = [
  // projects can be added or removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Portfolio',
    description:
      'This is the currently runnig Project',
    stack: [ 'JavaScript', 'React'],
    sourceCode: 'https://github.cttps://github.com/Tedymwenda/portfolio',
    livePreview: 'https://github.cottps://github.com/Tedymwenda/portfolio',
  },
  {
    name: 'Whatsapp-clone',
    description:
      'This is a Whatsapp-clone for educational purposes ',
    stack: ['JavaScript', 'React'],
    sourceCode: 'https://github.com/Tedymwenda/whatsapp-clone',
    livePreview: 'https://github.com/Tedymwenda/whatsapp-clone',
  },
  {
    name: 'Linkedin-clone',
    description:
      'This is a linkedin-clone for educational purposes ',
    stack: [ 'JavaScript', 'React'],
    sourceCode: 'https://github.com/Tedymwenda/linkedin-clone',
    livePreview: 'https://github.com/Tedymwenda/linkedin-clone',
  },
]
const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  // Phone: '+254700027971',
  email: 'mwendateddy@gmail.com',
}
export { header, about, projects, skills, contact,}

