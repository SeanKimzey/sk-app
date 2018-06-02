class ArtistsController < ApplicationController
  def index
    artists = Artists.all
    render json: arists
  end
end
