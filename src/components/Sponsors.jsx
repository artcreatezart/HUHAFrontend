const Sponsors = ({ sponsors = [] }) => {
    const mappedSponsors = sponsors.map((sponsor, index) => {
        function getFeaturedImage(sponsor) {
            if (
                sponsor &&
                sponsor._embedded &&
                sponsor._embedded['wp:featuredmedia'] &&
                sponsor._embedded['wp:featuredmedia'][0].source_url
            ) {
                return sponsor._embedded['wp:featuredmedia'][0].source_url;
            } else {
                return 'https://via.placeholder.com/150';
            }
        }

        return (  
            <div key={sponsor.slug + '-' + index} >
                <a href={sponsor.acf.link_to_sponsors_website_media} target='_blank' rel="noopener noreferrer">
                    <img
                        src={getFeaturedImage(sponsor)}
                        alt={sponsor.title?.rendered || 'Sponsor'}
                    />
                </a>
            </div>
        );
    });

    return (
        <div  className='sponsor-container'>
            <h2>Sponsors</h2>
            <h3>Thank you to our supporters</h3>
            <div className='sponsor-boxes-container'>
                {mappedSponsors}
            </div>
        </div>
        
    )
        
};

export default Sponsors;
