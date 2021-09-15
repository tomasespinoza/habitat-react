import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

const listings = () => (
    <Query query={gql`
      {
        listings {
          edges {
            node {
              title
              slug
              listingsFields {
                address
                bathrooms
                bedrooms
                city
                fieldGroupName
                price
                state
              }
              featuredImage {
                node {
                  uri
                  mediaDetails {
                    file
                  }
                }
              }
            }
          }
        }
      }
      
      
    `
    }>


{
    ( {loading, error, data}) => {
        if ( loading ) {
            return(<h1>Loading...</h1>)
        }
        // console.log(data);
        return(
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    data.listings.edges.map(( listing, key) => {
                        return(

                            <div key={key}>
                                <Link to={`/listing/${listing.node.slug}`}>
                                  <figure>
                                    <img src={`https://tomasespinoza.me/projects/habitat/wp-content/uploads/${listing.node.featuredImage.node.mediaDetails.file}`} alt={listing.node.title}></img>
                                    <figcaption>
                                      <p><strong>${listing.node.listingsFields.price}</strong></p>
                                      <p>{listing.node.listingsFields.address}</p>
                                      <p>{listing.node.listingsFields.city}, {listing.node.listingsFields.state}</p>
                                      <p>{listing.node.listingsFields.bathrooms} Bed, {listing.node.listingsFields.bedrooms} Bath</p>

                                    </figcaption> 
                                  </figure>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }   
}
    </Query>
)
export default listings