import { createContext, useState } from "react";
import PublicArea from "./components/public_area/public_area.component";
// images
import ListingOneOne from './assets/house_1_1.png';
import ListingOneTwo from './assets/house_1_2.jpg';
import ListingModal from "./components/listing_modal/listing_modal.component";

export const MyContext = createContext();

function App() {
  const [contextState, setContextState] = useState({
    showLisitingModal: false,
    listingDataToShow: null,
    listingsData: [
      {
        id: 'OMGBL001',
        featured: true,
        status: {
            forSale: true,
            forRent: false
        },
        address: 'Lekki County Ikota Lekki Lagos',
        name: '5 Bedroom Fully Detached Duplex With Bq',
        beds: 5,
        baths: 6,
        toilets: 6,
        price: 350000000,
        displayImg: ListingOneOne,
        images: [ListingOneOne, ListingOneTwo],
        description: `
          MODERN 5 BEDROOM FULLY DETACHED HOME FOR SALE!!! <br /><br />
          Features: <br />
          - New <br />
          - Modern Design <br />
          - All Rooms Ensuite <br />
        `
      }
    ]
  })
  return (
    <MyContext.Provider value={{contextState, setContextState}}>
        <>
          <PublicArea />
          {/* listing modal */}
          {contextState.showLisitingModal? <ListingModal /> : ''}
        </>
    </MyContext.Provider>
  )
}

export default App
