class DifficultiesController < ApiController
  # GET /drinks
  def index
    @difficulties = Difficulty.select("id, name").all
    render json: @difficulties.to_json
  end
end