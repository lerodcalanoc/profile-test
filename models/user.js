module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		firstName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
		googleID: {
            type: DataTypes.STRING
        },
        backgroundColor: {
            type: DataTypes.STRING,
            defaultValue: "#F5F5F5"
        },
        profileImgUrl: {
            type: DataTypes.STRING,
            defaultValue: "/img/github1.png"
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hometown: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

	return User;
}