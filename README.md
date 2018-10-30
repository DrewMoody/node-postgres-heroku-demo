# nodepostgres_deploy_demo

Reference guide: https://devcenter.heroku.com/articles/getting-started-with-nodejs

## Notes: 
- The above guide suggests using Postgres in your development environment for parity (Postgres for both development and production). This application has been configured to have sqlite3 in development since that is what you have already learned. Be aware that using Postgres in a dev environment is more ideal (for parity), but also more difficult to set up.
- the steps below assume that you have already created a Heroku account and have installed Heroku CLI. If you have not done so, refer to the "set up" portion of the link above to get started.

## Steps (terminal commands)
- `heroku create` creates a heroku app
- `git push heroku master` pushes the updated repo
- `heroku ps:scale web=1` ensures at least one instance of the app is running
- `heroku open` opens the url in the browser
- `heroku logs --tail` to see your logs
- `heroku addons:create heroku-postgresql:hobby-dev` to provision a db
- Set env variable `ENVIRONMENT` to `production`. You can do this by navigating to your Heroku app's dashboard, then go to settings >> config vars >> reveal config vars >> key = `ENVIRONMENT`, value = `production`
- `heroku run knex migrate:latest` run migrations
- `heroku run knex seed:run` run seeds
