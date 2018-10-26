# nodepostgres_deploy_demo

Reference guide: https://devcenter.heroku.com/articles/getting-started-with-nodejs

Note: the steps below assume that you have already created a Heroku account and have installed Heroku CLI. If you have not done so, refer to the "set up" portion of the link above to get started.

In addition, the above guide suggests using Postgres in your development environment for parity (Postgres for both development and production). This application has been configured to have sqlite3 in development since that is what you have already learned. Be aware that using Postgres in a dev environment is more ideal (for parity), but also more difficult to set up.

## Steps ()
- `heroku create`
- `git push heroku master`
- `heroku ps:scale web=1`
- `heroku open`
- `heroku logs --tail` to see your logs
- `heroku addons:create heroku-postgresql:hobby-dev` to provision a db
- `heroku run knex migrate:latest`
- `heroku run knex seed:run`