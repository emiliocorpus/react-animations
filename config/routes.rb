Rails.application.routes.draw do
  get 'pokedex/index'

  get 'pokedex/pokemon'

  root 'page#index'
end
