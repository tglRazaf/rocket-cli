import * as fs from 'fs';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner'
import { createFile, makeDir } from './customFsMethod.js';
import { css, html } from './staticFilesContent.js';
import { cp } from 'fs/promises';
import chalk from 'chalk';

const spinner = createSpinner('Creating project\n')
const sleep = (ms=2000) => new Promise((r)=> setTimeout(r, ms))

const setupDir = async (dir_name) =>{
    spinner.start()
    fs.mkdir(`${dir_name}`, async ()=>{
        fs.opendir(`${dir_name}`, async (err, dir)=>{
            if(err) throw err
            try {
                await createFile(`${dir.path}/index.html`, html)
                await makeDir(`${dir.path}/src`)
                await makeDir(`${dir.path}/src/assets`)
                await makeDir(`${dir.path}/src/js`)
                await makeDir(`${dir.path}/src/styles`)
                await createFile(`${dir.path}/src/styles/main.css`, css)
                await cp('favicon.svg', `${dir.path}/favicon.svg`)
                await sleep() //just for the visual of spinner :)
                spinner.success()
                await dir.close()
                figlet('Merci tyy!', (err, data) => {
                    if (err) {
                        console.log('Something went wrong...');
                        return;
                    }
                    console.dir(data);
                });
            } catch (error) {
                console.log(chalk.bgRed('An error was occured when creating project'));
            }
        })
    })
}

export default setupDir