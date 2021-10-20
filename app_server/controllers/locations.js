const homelist = function(req, res){
    res.render('index', {
        title: 'Destination Finder',
        
        pageHeader: { 
            title: 'Destination Finder', 
            strapline: 'Find your next holiday destination!' 
        }, 
    
        locations: [{
            name: 'Bled, Slovenia',
            image: '/images/lakebled.jpg',
            alt: 'Lake Bled',
            bio: 'Situated in the heart of the Julian Alps, Bled is probably Europe\'s best kept secret. Bled is a fantastic place to base yourself' + 
            ' if you plan on exploring Slovenia. Situated just 3 km from the picturesque Vintgar Gorge, 6 km from Triglav National Park and 54 km from capital city Ljubljana,'
            + ' Bled allows you to be in the heart of Slovenia without isolating you from the many other treasures the country has to offer.',
            features: ['Alpine Views','Hiking','Easy-Going']
        },{
            name: 'Barcelona, Spain',
            image: '/images/barcelona.jpg',
            alt: 'Barcelona',
            bio: 'Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. ' + 
            'The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city. ' + 
            'Museu Picasso and Fundació Joan Miró feature modern art by their namesakes. City history museum MUHBA, includes several Roman archaeological sites.',
            features: ['Great Food','Architecture','Churches']
        },{
            name: 'Paris, France',
            image: '/images/paris.jpg',
            alt: 'Eiffel Tower',
            bio: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture. ' +
            'Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, ' + 
            'Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
            features: ['Great For Couples','City Life','History']
        }],

        newsItems: [{
            headline: 'USA Travel Restrictions Set To Ease',
            blurb: 'US President Joe Biden has announced a further easing of restrictions on Europeans wishing to visit the US. The news has been met '
            + ' with open arms by airline companies, who experienced a surge in European travellers booking flights to the US last night... ',
            link: 'https://www.rte.ie/news/'
        },{
            headline: 'Why You Should Visit The Balkans',
            blurb: 'The Balkans are home to some of Europe\'s most spectacular views, centuries of complex history and wholesome, wallet-friendly cuisine.'
            + ' From the Mediterranean-like atmosphere along the Adriatic Sea in Slovenia and Croatia to the fabled histories of Sarajevo and Belgrade... ',
            link: 'https://www.rte.ie/news/'
        }]
    });
};

module.exports = {
    homelist
};    