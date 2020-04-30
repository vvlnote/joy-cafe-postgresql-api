# class ApplicationController < ActionController::API

# end

class ApplicationController < ActionController::Base
 protect_from_forgery with: :exception
end
