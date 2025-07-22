const fs=require('fs')

const [,,command,...args]=process.argv
// console.log(command,args)

switch (command){
    case 'create-file':
        createFile(args[0],args.slice(1).join(" "))
        break
    case 'read-file':
        readFile(args[0])
        break
    case 'update-file':
        updateFile(args[0],args.slice(1).join(" "))
        break
    case 'delete-file':
        deleteFile(args[0])
        break
    case 'create-dir':
        createDir(args[0])
        break
    case 'delete-dir':
        deleteDir(args[0])
        break
    case 'update-dir':
        updateDir(args[0],args[1])
        break
    case 'list-dir':
        listDir()
        break
    default:
        console.log("Wrong command")
}
function listDir()
{
    console.log(fs.readdirSync('.'))
}
function createFile(fileName,content)
{
    if(fs.existsSync(fileName))
    {
        console.log("file Already Exsits")
    }
    else{
        fs.writeFileSync(fileName,content)
        console.log(`file created ${fileName}`)
    }
}
function readFile(fileName){
    if(fs.existsSync(fileName)){
        console.log(fs.readFileSync(fileName,'utf8'))
    }
    else{
        console.log("file not found")
    }
}
function updateFile(fileName,content)
{
    if(fs.existsSync(fileName))
    {
        
        fs.appendFileSync(fileName,content)
        console.log(`file updated ${fileName}`)
    }
    else
    {
        console.log("file not found")
    }
}
function deleteFile(fileName)
{
    if(fs.existsSync(fileName))
    {
        fs.unlinkSync(fileName)
    }
    else{
        console.log("file not found")
    }
}

function createDir(dirName)
{
    if(fs.existsSync(dirName))
    {
        console.log("dir already exists")
    }
    else{
        fs.mkdirSync(dirName)
    }
}
function deleteDir(dirName)
{
    if(fs.existsSync(dirName)){
        fs.rmdirSync(dirName)
    }
    else{
        console.log("dir not found")
    }

}
function updateDir(oldName,newName)
{
    if(fs.existsSync(oldName))
    {
        fs.renameSync(oldName,newName)
        console.log(`${oldName} is updated to ${newName}`)
    }
    else{
        console.log("file not found")
    }
}