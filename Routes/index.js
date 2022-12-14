"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Home', page: 'home' });
});
router.get('/home', (req, res, next) => {
    res.render('index', { title: 'Home', page: 'home' });
});
router.get('/about', (req, res, next) => {
    res.render('index', { title: 'About Us', page: 'about' });
});
router.get('/projects', (req, res, next) => {
    res.render('index', { title: 'Our Projects', page: 'projects' });
});
router.get('/services', (req, res, next) => {
    res.render('index', { title: 'Our Services', page: 'services' });
});
router.get('/contact', (req, res, next) => {
    res.render('index', { title: 'Contact Us', page: 'contact' });
});
exports.default = router;
//# sourceMappingURL=index.js.map