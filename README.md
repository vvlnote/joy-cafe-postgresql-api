# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration
   - configure the listening port. by default the listen port is #3000, update to #3002, and keep the front-end works on port #3000.  this is by updating config/puma.rb
   - specify which port to receive the RESTful API request from front-end by updating config/initializers/cors.rb file. so we specify http://localhost:3000.  
   - un-comment gem rack-cors in Gemfile to make corss-rogin AJAX possible.  
   - after the updates made above, need to run bundle install 

   - add gem 'active_model_serializers' into Gemfile, and run bundle install

   

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
