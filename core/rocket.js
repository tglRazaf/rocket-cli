"use strict"

import inquirer from 'inquirer'
import setupDir from './lib/setupDir.js'

const askDirName = async () =>{
    const rocket = await inquirer.prompt({
        name: 'dir_name',
        type: 'input',
        message: 'directory name',
        default(){
            return 'rocket-project'
        }
    })    
    await setupDir(rocket.dir_name)
}

const start = async () => await askDirName()

export default start