#!/usr/bin/env node
import start from './core/rocket.js'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers' 
import chalk from 'chalk'

yargs(hideBin(process.argv)).command({
    command: 'init',
    async handler(argv){
        if (argv._[0] === 'init') {
            await start()
        } else console.log(chalk.bgRed('An error was occured when creating project'));
    }
}).parse()