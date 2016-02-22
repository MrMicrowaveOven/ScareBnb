# == Route Map
#
#      Prefix Verb URI Pattern            Controller#Action
# api_benches GET  /api/benches(.:format) api/benches#index {:format=>:json}
#             POST /api/benches(.:format) api/benches#create {:format=>:json}
#

Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:index, :create]
  end
end
