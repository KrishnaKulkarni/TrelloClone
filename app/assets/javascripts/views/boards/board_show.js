Trellino.Views.BoardShow = Backbone.View.extend({


  template: JST["boards/show"],
  className: "board",

 // new Trellino.Views.BoardShow({collection: cards})
  // new Trellino.Views.BoardShow({model: board, cards: cards, collection2: boardMembers})
  //this.collection
  events: {
    "click .newList" : "genNewList",
    "click .deleteBoard" : "deleteBoard"
  },

  genNewList: function(){},

  deleteBoard: function(){},

  // options : lists, members, model
  initialize: function(options){
    //add listeners for lists and members collections
    //this.lists = this.model.lists();
    //this.members = this.model.members();
    this.subviews = [];
  },

  render: function(){
    var renderedContent = this.template({
      board: this.model
    });

    this.$el.html(renderedContent);

    var that = this;

    // this.lists.each(function(list){
    //   var view = new Trellino.Views.ListShow({ model: list });
    //   that.subviews.push(view);
    //   that.$el.find(".list-list").append(view.render().$el);
    // });
    //
    // this.members.each(function(member){
    //   var view = new Trellino.Views.MemberShow({ model: member });
    //   that.subviews.push(view);
    //   that.$el.find(".member-list").append(view.render().$el);
    // });

    return this;
  }
});