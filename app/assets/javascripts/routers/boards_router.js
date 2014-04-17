Trellino.Routers.Boards = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.boards = options.boards;
  },

  routes: {
    "" : "index",
    "boards/:id" : "show",
    "boards" : "index",
    "boards/new" : "newBoard"
  },

  show: function(id){
    //make boardShow view with the id

    //var boards = new Trellino.Collections.Boards();
    //var that = this;

    //var success = function(){
     // var board = that.boards.get(id);
      var view = new Trellino.Views.BoardShow({
        model: this.boards.get(id)
      });
      // appends it to root
      that.$rootEl.html(view.render().$el);
      //};

    // boards.fetch({
 //      success: success
 //    });

  },

  index: function(){

    var boards = new Trellino.Collections.Boards();



  },

  newBoard: function(){}


});
