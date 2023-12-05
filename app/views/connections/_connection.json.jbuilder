json.extract! connection, :id, :url, :created_at, :updated_at
json.url connection_url(connection, format: :json)
