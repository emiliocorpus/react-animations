class PageController < ApplicationController
  def index
  	@pokemon = Pokemon.all
  end
end
