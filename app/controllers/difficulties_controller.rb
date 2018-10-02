class DifficultiesController < ApiController
  def index
    @difficulties = Difficulty.select("id, name, slug").all
    buttons = @difficulties.map do |button|
      { :id => button.id, :label => button.name, :url => "/levels/#{button.slug}" }
    end
    buttonsData = { :title => "Choose Your level", :buttonData => buttons }
    render json: buttonsData.to_json
  end
end