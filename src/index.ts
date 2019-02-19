import {Command, flags} from '@heroku-cli/command'
import * as Heroku from '@heroku-cli/schema'

export default class index extends Command {
  static description = 'Gives you a list of your apps'
  static flags = {
    remote: flags.remote(),
    app: flags.app({required: true})
  }

  async run () {
    const {flags} = this.parse(index)
    const response = await this.heroku.get<Heroku.App>(`/apps/${flags.app}`)
    const app = response.body
    console.dir(app)
  }
}