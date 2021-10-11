/* GET 'home' page */
const homelist = function(req, res){
    res.render('index', {
        title: 'Destination Finder',
        
        pageHeader: { 
            title: 'Destination Finder', 
            strapline: 'Find your next holiday destination!' 
        }, 
    
        locations: [{
            name: 'Bled, Slovenia',
            rating: 5,
            image: '/images/lakebled.jpg',
            alt: 'Lake Bled',
            bio: 'lake bled, bled castle, pletnas.. etc',
            features: ['Alpine Views','Hiking','Easy-Going']
        },{
            name: 'Barcelona, Spain',
            rating: 5,
            image: '/images/barcelona.jpg',
            alt: 'Barcelona',
            bio: 'catalonia.. architecture.. etc',
            features: ['Great Food','Architecture','Churches']
        },{
            name: 'Paris, France',
            rating: 2,
            image: '/images/paris.jpg',
            alt: 'Eiffel Tower',
            bio: 'eiffel tower.. romantic.. etc',
            features: ['Great For Couples','City Life','History']
        }]
    });
};

module.exports = {
    homelist
};    