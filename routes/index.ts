import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET home page. */
router.get('/home', (req, res, next) => 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET about page. */
router.get('/about', (req, res, next) => 
{
  res.render('index', { title: 'About Us', page: 'about' });
});

/* GET projects page. */
router.get('/projects', (req, res, next) => 
{
  res.render('index', { title: 'Our Projects', page: 'projects' });
});

/* GET services page. */
router.get('/services', (req, res, next) => 
{
  res.render('index', { title: 'Our Services', page: 'services' });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => 
{
  res.render('index', { title: 'Contact Us', page: 'contact' });
});

export default router;
