import {Command, flags} from '@heroku-cli/command'
import * as Heroku from '@heroku-cli/schema'

export default class info extends Command {
  static description = 'Gives general info on apps'

  async run () {
    //const {flags} = this.parse(info)
    const response = await this.heroku.get<Heroku.App>(`/apps`)
    const app = response.body
    app.forEach ((a: Heroku.App) => this.log(a.name))
    //console.log(app)
  }
}