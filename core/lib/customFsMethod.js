import * as fs from 'fs/promises';

const makeDir = async (dir_name) =>{
    await fs.mkdir(`${dir_name}`)
}

const createFile =  async (file_name ,content)=>{
    await fs.appendFile(`${file_name}`, content)
}

export {makeDir, createFile}