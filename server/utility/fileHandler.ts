import {Express } from "express";
export class FileHandler {

    private _root: string
    private _ressources: string[] = []
    private _fileNames: string[] = []
    private _UsePath: string[] = []
    constructor(root: string, app: Express) {
        this._root = root


    }

    run() {
        this._getAllFile()
        this._UseRessource()
    }


    private _getAllFile() {
        const fs = require("fs")
        const path = require("path")

        const getAllFiles = function (dirPath: string, arrayOfFiles: string[]) {
            let files = fs.readdirSync(dirPath)

            arrayOfFiles = arrayOfFiles || []

            files.forEach(function (file: string) {
                if (fs.statSync(dirPath + "/" + file).isDirectory()) {
                    arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
                } else {
                    arrayOfFiles.push(path.join(__dirname, "/../../" + dirPath, "/", file))
                }
            })

            return arrayOfFiles
        }

        getAllFiles(this._root, this._ressources)

    }

    private _UseRessource() {
        for (const ressource of this._ressources) {
            const ressourceNormal = this._normalisation(ressource)
            const index = this._ressources.indexOf(ressource)

            this._ressources[index] = ressourceNormal

            const path = this._ressources[index].split('/dist')[1]
            const fileName = path.split('/')
            this._fileNames.push(fileName[fileName.length - 1])
            this._UsePath.push(path)
        }
    }


    private _normalisation(ressource: string) {
        while (ressource.search('\\\\') != -1) {
            ressource = ressource.replace('\\', '/')
        }

        return ressource
    }


    getRessources() {
        return this._ressources
    }

    getNameFiles() {
        return this._fileNames

    }
    getUsePathRessource() {
        return this._UsePath
    }


}