# nodepostgres_deploy_demo

https://devcenter.heroku.com/articles/getting-started-with-nodejs

Steps
- run command `heroku create`
- `git push heroku master`
- `heroku ps:scale web=1`
- run `heroku open`. If that doesn't work, navigate to it from heroku website
- run `heroku logs --tail` to see your logs
- run `heroku addons:create heroku-postgresql:hobby-dev` to provision a db
- run `heroku run knex migrate:latest`
- run `heroku run knex seed:run`