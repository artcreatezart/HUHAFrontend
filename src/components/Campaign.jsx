import{ useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = import.meta.env.VITE_WP_API_BASEURL

const Campaign = () => {
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);

  const endpoint = `${baseURL}/campaign?_embed`

  useEffect(() => {
    axios.get( `${ endpoint }`)
    .then(( response ) => {
      setCampaign( response.data );
      setLoading( false );
    }) 
    .catch(( error ) => console.log( error ))
  }, [])

  function getFeaturedImage( campaign ) {
    if (campaign && campaign._embedded && campaign._embedded['wp:featuredmedia'] && campaign._embedded['wp:featuredmedia'][0].source_url) {
      return campaign._embedded['wp:featuredmedia'][0].source_url;
  } else {
      return 'https://via.placeholder.com/150';
  }
  }

  if (loading) {
    return <>Loading...</>
  }
  
  return (
    <div className='campaign-container'>
      {campaign.map((campaign, index) => (
        <div key={campaign.slug + '-' + index} className='campaign-card'>
          <div className='left-img-campaign-description'>
            <img
              src={getFeaturedImage(campaign)}
              alt={campaign.title.rendered}
            />
          </div>
          
          <div className='right-text-campaign-description'>
            <h2 className='campaign-title'>{campaign.title.rendered}</h2>
            <p dangerouslySetInnerHTML={{ __html: campaign.content.rendered }} />
            <a href={campaign.acf.link_to_campaign__petition} target='_blank'>
              <button className='secondary-button'>
                Sign The Petition
              </button>
            </a>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default Campaign
