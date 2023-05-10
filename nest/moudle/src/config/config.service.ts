import { Injectable } from '@nestjs/common'
import { readdir, readdirSync } from 'fs'
import path from 'path'

@Injectable()
export class ConfigService {
  config = {} as any
  constructor() {
    const config = { path: path.resolve(__dirname, '../configure') }
    // console.log(config)
    readdirSync(config.path).map(async (file) => {
      if (file.slice(-2) === 'js') {
        // console.log(file)
        const moudle = await import(path.resolve(config.path, file))
        // console.log(moudle.default())
        this.config = { ...this.config, ...moudle.default() }
        // console.log(this.config)
      }
    })

    // console.log(files)
  }
  get(path: string) {
    return path.split('.').reduce((config, name) => {
      return config[name]
    }, this.config)
  }
}
