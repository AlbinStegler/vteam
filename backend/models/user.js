const db = require("../databases/sql/database.js");

const userModel = {
    /**
     * Retrieves all users from the database and returns them in a JSON format.
     * @param {Object} res - The response object used to send the JSON data.
     * @returns {Object} An array of user objects.
     */
    getAll: function (res) {
        db.all('SELECT * FROM Users', function (error, results, fields) {
            if (error) throw error;
            return res.json(results);
        });
    },
<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
+    /**
+     * Retrieves a single record from the Users table based on the provided ID and sends it as a JSON response.
+     *
+     * @param {number} id - The ID of the record to retrieve.
+     * @param {object} res - The response object to send the JSON response to.
+     * @return {undefined} This function does not return a value.
+     */
<<<<<  bot-65554f2a-5a9e-4a9f-89c1-8de96071e39f  >>>>>
    getOne: function (id, res) {
        db.get('SELECT * FROM Users WHERE userId = ?', id, function (error, results, fields) {
            if (error) throw error;
             return res.json(results);
        });
    },
    
    create: function (user, res) {
        const sql = 'INSERT INTO Users (username, email, passwd) VALUES (?, ?, ?)';
        const params = [user.body.username, user.body.email, user.body.passwd];
        console.log(params);

        db.run(sql, params, function (error) {
            if (error) {
                console.error('Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.status(201).json({ message: 'User created successfully', userId: this.lastID });
        });
    },
    update: function (userId, req, res) {
        // Build the SQL query and parameters based on the provided or existing data
        const sql = 'UPDATE Users SET ' +
            'username = COALESCE(?, username), ' +
            'email = COALESCE(?, email), ' +
            'passwd = COALESCE(?, passwd), ' +
            'userrole = COALESCE(?, userrole) ' +
            'WHERE userId = ?';

        // Ensure that undefined values are replaced with null
        const params = [
            req.username || null,
            req.email || null,
            req.passwd || null,
            req.userrole || null,
            userId
        ];
        console.log(params);
        console.log(params);
        db.run(sql, params, function (error, results) {
            if (error) {
                console.error('Error:', error);
                // You need to handle the error here, for example by calling a callback with the error
                return error;
            }
            // You need to handle the success case here, for example by calling a callback with the results
            console.log('User updated successfully.');
        });
    },
    delete: function (id, res) {
        const sql = 'DELETE FROM Users WHERE userId = ?';
        db.run(sql, id, function (error, results) {
            if (error) {
                console.error('Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.json({ message: 'User deleted successfully' });
        });
    }
};

module.exports = userModel;
