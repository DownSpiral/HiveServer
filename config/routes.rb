Rails.application.routes.draw do
  devise_for :users,
    path: '',
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      registration: 'signup'
    },
    controllers: {
      sessions: 'sessions',
      registrations: 'registrations'
    }

  scope 'user' do
    get 'ships', to: 'ships#index'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
