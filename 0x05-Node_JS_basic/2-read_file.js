const fs = require('fs');

const countStudents = (filePath) => {
  const students = {};
  const fields = {};
  let length = 0;

  try {
    const content = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const lines = content.toString().split('\n');
    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        length += 1;
        const field = lines[i].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    console.log(`Number of students: ${length - 1}`);
    for (const [k, v] of Object.entries(fields)) {
      if (k !== 'field') {
        const lst = students[k].join(', ');
        console.log(`Number of students in ${k}: ${v}. List: ${lst}`);
      }
    }
  } catch (err) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
