# Airplane Services

## Once Again with Heroku and MongoLabsS

Most of these steps can be found here: [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

0. Mongo stuff: [https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-ubuntu/](https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-ubuntu/)

    You'll need to know your Ubuntu version: ` lsb_release -a` 

1. Download the Heroku Command Line Interface (CLI) - you may see a mongod error, you can ignore it.
2. Login to Heroku:

    ```
    $ heroku login
    Enter your Heroku credentials.
    Email: zeke@example.com
    Password:
    ...
    ```

3. Make sure that the following versions of software are installed:

    ```
    Node: version 4 or higher (`node -v`)
    NPM:  should be kept up to date with Node (`npm -v`)
    Git:  a recent version should be there (`git --version`)
    ```

4. Ensure that you are using Git locally (you should also be using Github)
5. Create a new Heroku app - Heroku will give a random name at first (MAKE SURE YOU ARE IN YOUR APPLICATION FOLDER!)

    ```
    $ heroku create
    ```

6. Deploy 

    ```
    $ git push heroku master
    ```
7. configure instance and open

    ```
    $ heroku ps:scale web=1
    $ heroku open
    ```

8. Create `Procfile`

    ```
    web: node ./bin/www
    ```

9. Checkup on running Dynos

    ```
    $ heroku ps
    ```

10. Renaming

    [Follow this](https://devcenter.heroku.com/articles/renaming-apps#updating-git-remotes)

11. Connect to database

    * see `db.js` for proper use of the `MONGODB_URI` variable.
    * You'll need to set up a [Heroku Addon](https://elements.heroku.com/addons/categories/data-stores) in order to use MongoLabs
    * Either use the website or type: `heroku addons:create mongolab:sandbox`
    * Change the `MONGODB_URI` to reflect your actual connection string: `mongodb://<dbuser>:<dbpassword>@ds157487.mlab.com:57487/ahuimanu`
    * Set the `NODE_ENV` variable to 'production': `heroku config:set NODE_ENV=staging`
    
12. Good References

* [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
* [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
* [Create a Web App and RESTful API Server Using the MEAN Stack](https://devcenter.heroku.com/articles/mean-apps-restful-api)