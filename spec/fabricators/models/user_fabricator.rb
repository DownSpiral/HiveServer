Fabricator(:user) do
  email { Faker::Internet.email }
  username { Faker::Name.first_name }
  password { "abc" } #Faker::String.random(3..12) }
	encrypted_password { |attrs| User.new(:password => attrs[:password]).encrypted_password }
end
