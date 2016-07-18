require 'test_helper'

class PokedexControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get pokemon" do
    get :pokemon
    assert_response :success
  end

end
