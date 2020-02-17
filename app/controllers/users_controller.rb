# frozen_string_literal: true

class UsersController < ApplicationController
  def index
    @users = User.all

    respond_to do |format|
      format.html
      format.json do
        render json: @users,
               each_serializer: UserSerializer
      end
    end
  end
end
