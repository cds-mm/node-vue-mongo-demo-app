var ObjectId = require('mongodb').ObjectID;

module.exports = {
// Get All
    index: (app, req, res) => {
        app.set('myDb')
            .collection('students')
            .find({})
            .toArray((err, docs) => {
                if(err){console.error(err);}
                res.json(docs)
            });
    },

// Get One
    show: (app, req, res) => {
        var o_id = new ObjectId(req.params.studentID)
        app.set('myDb')
            .collection('students')
            .find({"_id": o_id})
            .toArray((err, docs) => {
                if(err){console.error(err);}                
                res.json(docs)
            });
    },

// Create
    create: (app, req, res) => {
        var newStudent = req.body;

        res.json({msg: "Successfully Created"});

        // app.get('myDb').collection('students').insertOne(newStudent,
        //     (err, dbRes) => {
        //         if(err){console.error(err)}
        //         if(dbRes.insertedCount === 1){
        //             res.json({msg: "Successfully Created"})
        //         } else {
        //             res.json({msg: "Not Found"})
        //         }
        //     })
    },

// Update
    update: (app, req, res) => {
        var updateStudent = req.body;
        var o_id = new ObjectId(req.params.studentID);
        app.get('myDb').collection('students').updateOne(
            {_id: o_id},
            { $set: {}},
            (err, dbRes) => {
                if(err){console.error(err)}
                if(dbRes.modifiedCount === 1){
                    res.json({msg: "Successfully Updated"})
                } else {
                    res.json({msg: "Not Found"})
                }
            }
        );
    },

// Delete
    delete: (app, req, res) => {
        var o_id = new ObjectId(req.params.studentID);

        app.get('myDb').collection('students').deleteOne(
            {_id: o_id}, 
            (err, dbRes) => {
                if(err) {console.error(err)}
                if(dbRes.deletedCount === 1){
                    res.json({msg: "Successfully Removed"})
                } else {
                    res.json({msg: "Not Found"})
                }
            }
        );
    }
}
