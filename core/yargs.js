import yargs from 'yargs'
import { hideBin } from 'yargs/helpers' 
import chalk from 'chalk'
import init from './rocket.js'

const start =  async ()=>{
    yargs(hideBin(process.argv))
    .usage("Usage: init")
    .command({
        command: '*',
        handler(){
            console.log(chalk.red('specify a command or get help with --help option'));
        }
    })
    .command({
        command: 'init',
        description: 'init the project',
        async handler(){
            await init()
        }
    }).parse()
}

export default start