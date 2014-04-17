Trellino.Models.Board = Backbone.Model.extend({

  lists: function(){
    if (!this._lists){
      this._lists = new Trellino.Collections.Lists([],{
        board: this
      });
    }
  },

  members: function(){
    if (!this._members){
      this._members = new Trellino.Collections.Members([],{
        board: this
      });
    }
  },

  parse: function(jsonResp){
    debugger
  }


  // lists: Trellino.Collections.Lists

  // members: new Trellino.Collections.Members([], {
  //
  // }),
});
