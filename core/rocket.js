import inquirer from 'inquirer'
import setupDir from './lib/setupDir.js'

const init = async () =>{
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

export default init