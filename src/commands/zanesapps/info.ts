import {Command, flags} from '@heroku-cli/command'
import * as Heroku from '@heroku-cli/schema'

export default class Info extends Command {
    static description = 'describe the command here'
    static flags = {
      app: flags.string ({
        char: 'a',
        description: 'app name',
        required: true,
      })
    }

    static examples = [
      '$ heroku zanesapps:info -a <app_name>'
    ]
    

    async run() {
      const {flags} = this.parse(Info)
      const response = await this.heroku.get<Heroku.App>(`/apps/${flags.app}`)
      const app = response.body
      this.log('App Name: ' + app.name)
      this.log('Stack: ' + app.stack.name)
      this.log('Owner: ' + app.stack.owner)
    }
  }