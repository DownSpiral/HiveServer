RSpec::Matchers.define :match_schema do |schema_name|

  match do |json|
    schema_file = Rails.root.join("./spec/schemas/#{schema_name}.json")
    json_data = File.read(schema_file)
    schema = JSON.parse(json_data)
    @errors = JSON::Validator.fully_validate(schema, json)
    @errors.none?
  end

  failure_message do
    @errors.first
  end

end
