class DifficultiesController < ApiController

  def index
    @difficulties = Difficulty.select("id, name, slug").all
    buttons = @difficulties.map do |button|
      { :id => button.id, :label => button.name, :url => "/levels/#{button.slug}" }
    end
    buttonsData = { :title => "Choose Your level", :buttonData => buttons }
    render json: buttonsData.to_json
  end

  def show
    @level_difficulties = Game.joins(:difficulty).where(:difficulties => {:slug => params[:id]})
    buttons = @level_difficulties.map do |button|
      { :id => button.id, :label => button.title, :url => "/games/#{button.slug}" }
    end
    buttonsData = { :title => "#{params[:id].capitalize} - Choose Your game", :buttonData => buttons }
    render json: buttonsData.to_json
  end

end