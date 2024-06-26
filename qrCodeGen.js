import inquirer from 'inquirer';
import qr from 'qr-image';
import { createWriteStream, writeFile } from 'node:fs';

inquirer
  .prompt([
    {name: 'url' ,message: 'Please enter the URL that you want generate a QR Code out of it: '}
  ])
  .then((answers) => {(
    var png_buffer = qr.imageSync(answers.url, { type: 'png' });
    writeFile('url.png', png_buffer, ((err) =>  {
      if(err) throw err;
    }))
    writeFile('url.txt', answers.url, ((err) =>  {
      if(err) throw err;
    }));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error(error)
    } else {
        console.error(error)
    }
  });