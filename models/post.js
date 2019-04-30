module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      postType: {
          type: DataTypes.STRING,
          allowNull: false,
          len: [1],
          defaultValue: "status-update"
      },
    });
  
    Post.associate = function(models) {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Post.hasMany(models.Comment, {
          onDelete: "cascade",
        });
    };
  
    return Post;
  };