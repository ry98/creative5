// Express Setup
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

// Knex Setup
const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];  
const knex = require('knex')(config);

// bcrypt setup
let bcrypt = require('bcrypt');
const saltRounds = 10;

app.listen(3000, () => console.log('Server listening on port 3000!'));
app.delete('/api/recipe/:id', (req, res) => {
   let id = parseInt(req.params.id);
   knex('ingredients').where('reicpe_id',id).del().catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
   knex('steps').where('reicpe_id',id).del().catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
   knex('recipes').where('id',id).del().then(recipes => {
      res.status(200).json({recipes:recipes});
    }).catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
});
app.post('/api/users/:id/recipes', (req, res) => {
  let id = parseInt(req.params.id);
  knex('users').where('id',id).first().then(user => {
    return knex('recipes').insert({user_id: id, recipe:req.body.recipe, created: new Date()});
  }).then(ids => {
    return knex('recipes').where('id',ids[0]).first();
  }).then(recipe => {
    console.log("returned")
    res.status(200).json({recipe:recipe});
    console.log(recipe);
    return;
  }).catch(error => {
    console.log(error);
    console.log("hi")
    res.status(500).json({ error });
  });
});
app.post('/api/recipes/:id/ingredients', (req, res) => {
  let id = parseInt(req.params.id);
  console.log(id);
  knex('recipes').where('id',id).first().then(recipe => {
    return knex('ingredients').insert({reicpe_id: id, ingredient:req.body.ingredient});
  }).then(ids => {
    return knex('ingredients').where('id',ids[0]).first();
  }).then(ingredient => {
    res.status(200).json({ingredient:ingredient});
    return;
  }).catch(error => {
    console.log(error);
    console.log("hi")
    res.status(500).json({ error });
  });
});
app.post('/api/recipes/:id/steps', (req, res) => {
  let id = parseInt(req.params.id);
  knex('recipes').where('id',id).first().then(recipe => {
    return knex('steps').insert({reicpe_id: id, step:req.body.step});
  }).then(ids => {
    return knex('steps').where('id',ids[0]).first();
  }).then(step => {
    res.status(200).json({step:step});
    return;
  }).catch(error => {
    console.log(error);
    res.status(500).json({ error });
  });
});
app.get('/api/recipes/search', (req, res) => {
  if (!req.query.keywords)
    return res.status(400).send();
  let offset = 0;
  if (req.query.offset)
    offset = parseInt(req.query.offset);
  let limit = 50;
  if (req.query.limit)
    limit = parseInt(req.query.limit);
  console.log(req.query.keywords);
  knex('users').join('recipes','users.id','recipes.user_id')
    .whereRaw("MATCH (recipe) AGAINST('" + req.query.keywords + "')")
    .orderBy('created','desc')
    .limit(limit)
    .offset(offset)
    .select('recipe','username','name','created','recipes.id').then(recipes => {
      res.status(200).json({recipes:recipes});
    }).catch(error => {
      console.log(error);
      console.log("MATCH (recipe) AGAINST('" + req.query.keywords + "')");
      res.status(500).json({ error });
    });
});

app.get('/api/users/:id/recipes', (req, res) => {
  let id = parseInt(req.params.id);
  knex('users').join('recipes','users.id','recipes.user_id')
    .where('users.id',id)
    .orderBy('created','desc')
    .select('recipe','username','name','created','recipes.id').then(recipes => {
      console.log("returned");
      res.status(200).json({recipes:recipes});
    }).catch(error => {
      console.log("Failed");
      res.status(500).json({ error });
      
    });
});
app.get('/api/recipes/:id/ingredients', (req, res) => {
  let id = parseInt(req.params.id);
  knex('recipes').join('ingredients','recipes.id','ingredients.reicpe_id')
    .where('recipes.id',id)
    .select('ingredient').then(ingredients => {
      res.status(200).json({ingredients:ingredients});
    }).catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
});
app.get('/api/recipes/:id/steps', (req, res) => {
  let id = parseInt(req.params.id);
  knex('recipes').join('steps','recipes.id','steps.reicpe_id')
    .where('recipes.id',id)
    .select('step').then(steps => {
      res.status(200).json({steps:steps});
    }).catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
});

app.post('/api/users', (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.username || !req.body.name)
    return res.status(400).send();
  knex('users').where('email',req.body.email).first().then(user => {
    if (user !== undefined) {
      res.status(403).send("Email address already exists");
      throw new Error('abort');
    }
    return knex('users').where('username',req.body.username).first();
  }).then(user => {
    if (user !== undefined) {
      res.status(409).send("User name already exists");
      throw new Error('abort');
    }
    return bcrypt.hash(req.body.password, saltRounds);
  }).then(hash => {
    return knex('users').insert({email: req.body.email, hash: hash, username:req.body.username,
				 name:req.body.name, role: 'user'});
  }).then(ids => {
    return knex('users').where('id',ids[0]).first().select('username','name','id');
  }).then(user => {
    res.status(200).json({user:user});
    return;
  }).catch(error => {
    if (error.message !== 'abort') {
      console.log(error);
      res.status(500).json({ error });
    }
  });
});


app.post('/api/login', (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(400).send();
  knex('users').where('email',req.body.email).first().then(user => {
    if (user === undefined) {
      res.status(403).send("Invalid credentials");
      throw new Error('abort');
    }
    return [bcrypt.compare(req.body.password, user.hash),user];
  }).spread((result,user) => {
    if (result)
      res.status(200).json({user:{username:user.username,name:user.name,id:user.id}});
    else
      res.status(403).send("Invalid credentials");
    return;
  }).catch(error => {
    if (error.message !== 'abort') {
      console.log(error);
      res.status(500).json({ error });
    }
  });
});
